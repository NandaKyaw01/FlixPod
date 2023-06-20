import { ProfileIcon } from "../../../icon";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

const Comment = ({
  comment,
  user_id,
  replies,
  addComment,
  deleteComment,
  updateComment,
  setActiveComment,
  activeComment,
  parentId = null,
  currentUserId,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";

  const canDelete = currentUserId === comment.user_id && replies.length === 0;
  const canEdit = currentUserId === comment.user_id;
  const canReply = Boolean(currentUserId);
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.created_date).toLocaleDateString();

  return (
    <div className="comment">
      <div className="comment-image-container">
        <ProfileIcon />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && (
          <div className="comment-text">{comment.comment_text}</div>
        )}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.comment_text}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
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
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies !== null && replies?.length > 0 && (
          <div className="replies">
            {replies.map((reply) => {
              return (
                <Comment
                  key={reply.id}
                  comment={reply}
                  replies={[]}
                  parentId={reply.id}
                  addComment={addComment}
                  deleteComment={deleteComment}
                  updateComment={updateComment}
                  setActiveComment={setActiveComment}
                  activeComment={activeComment}
                  currentUserId={currentUserId}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
