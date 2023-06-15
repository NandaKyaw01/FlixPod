import { ProfileIcon } from "../../../icon";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  replies,
  addComment,
  setActiveComment,
  activeComment,
  parentId = null,
  currentUserId,
}) => {
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const canReply = Boolean(currentUserId);
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.created_date).toLocaleDateString();

  return (
    <div key={comment.id} className="comment">
      <div className="comment-image-container">
        <ProfileIcon />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{createdAt}</div>
        </div>
        <div className="comment-text">{comment.comment_text}</div>
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                key={reply.id}
                comment={reply}
                replies={[]}
                parentId={comment.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
