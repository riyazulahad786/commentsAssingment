import React, { useState } from 'react';

function Comment({ comment, onReply }) {
  const [reply, setreply] = useState('');
  const [showReplyOption, setshowReplyOption] = useState(false);

  const ReplyChange = (e) => {
    setreply(e.target.value);
  };

  const AddReply = () => {
    if (reply.trim() === '') return;
    onReply(comment.id, reply);
    setreply('');
  };

  return (
    <div className="comment">
      <p>{comment.text}</p>
      <button onClick={() => setshowReplyOption(!showReplyOption)}>Reply</button>

      {showReplyOption && (
        <div className="reply-form">
          <textarea
            value={reply}
            onChange={ReplyChange}
            placeholder="Addreply..."
          />
          <button onClick={AddReply}>Add comments</button>
        </div>
      )}

      <div className="replies">
        {comment.replies.map((reply) => (
          <Comment key={reply.id} comment={reply} onReply={onReply} />
        ))}
      </div>
    </div>
  );
}

function Comments() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [commentIdCounter, setCommentIdCounter] = useState(1);

  const commentChange = (e) => {
    setCommentText(e.target.value);
  };

  const AddComment = () => {
    if (commentText.trim() === '') return;
    const newComment = {
      id: commentIdCounter,
      text: commentText,
      replies: [],
    };
    setComments([...comments, newComment]);
    setCommentText('');
    setCommentIdCounter(commentIdCounter + 1);
  };

  const handleReply = (parentId, reply) => {
    if (reply.trim() === '') return;

    const newComments = comments.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...comment.replies, { id: commentIdCounter, text: reply, replies: [] }],
        };
      }
      return comment;
    });

    setComments(newComments);
    setCommentIdCounter(commentIdCounter + 1);
  };

  return (
    <div className="comments-section">
      <h2>Comments</h2>
      <div className="comment-input">
        <textarea
          value={commentText}
          onChange={commentChange}
          placeholder="Add comment..."
        />
        <button onClick={AddComment}>Add Comment</button>
      </div>

      <div className="comment-list">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} onReply={handleReply} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
