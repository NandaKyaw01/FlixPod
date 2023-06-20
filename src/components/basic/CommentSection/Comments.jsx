import { useEffect, useMemo, useState } from "react";
import { useComment } from "../../../hooks/useComment";
import UserService from "../../../services/userService";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({ user_id, movie_id }) => {
  // const { data, error, isLoading } = useComment(movie_id);
  const [comments, setComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const canComment = Boolean(user_id);

  useEffect(() => {
    UserService.getComment(movie_id).then(
      (res) => {
        setComments(res);
      },
      (err) => console.log(err)
    );
  }, []);

  const rootComments =
    comments.length > 0 &&
    comments
      .filter((comment) => comment.parent_comment_id === null)
      .sort(
        (a, b) =>
          new Date(b.created_date).getTime() -
          new Date(a.created_date).getTime()
      );

  const getReplies = (commentId) => {
    return (
      comments.length > 0 &&
      comments
        .filter((comment) => comment.parent_comment_id === commentId)
        .sort(
          (a, b) =>
            new Date(a.created_date).getTime() -
            new Date(b.created_date).getTime()
        )
    );
  };

  const addComment = (comment_text, parent_comment_id) => {
    UserService.addComment({
      movie_id: "" + movie_id,
      comment_text: comment_text,
      parent_comment_id: parent_comment_id,
    }).then((comment) => {
      setComments([comment, ...comments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    UserService.updateComment({ id: commentId, comment_text: text }).then(
      () => {
        const updatedComment = comments.map((c) => {
          if (c.id === commentId) return { ...c, comment_text: text };
          return c;
        });
        setComments(updatedComment);
        setActiveComment(null);
      },
      (err) => console.log(err)
    );
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      UserService.deleteComment(commentId).then(
        (res) => {
          const updatedArray = [...comments].filter((c) => c.id !== commentId);
          setComments(updatedArray);
        },
        (err) => console.log(err)
      );
    }
  };

  return (
    <>
      <div className="comments">
        <h3 className="comments-title">Comments</h3>
        {canComment && (
          <>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Write" handleSubmit={addComment} />
          </>
        )}
        <div className="comments-container">
          {rootComments &&
            rootComments.map((comment) => (
              <Comment
                key={comment.id}
                user_id={user_id}
                comment={comment}
                replies={getReplies(comment.id)}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                addComment={addComment}
                deleteComment={deleteComment}
                updateComment={updateComment}
                currentUserId={user_id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
