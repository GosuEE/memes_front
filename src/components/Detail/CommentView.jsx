import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommentView() {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const { data } = await axios.get(`http://localhost:3001/comments`);
    setComments(data);
  };
  useEffect(() => {
    fetchComments();
  }, [comments]);

  const commentDeleteHandler = (commentId) => {
    alert('댓글삭제완료');
    axios.delete(`http://localhost:3001/comments/${commentId}`);
  };
  return (
    <div>
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            {comment.id},{comment.content}
            <button type="button">수정</button>
            <button
              type="button"
              onClick={() => {
                commentDeleteHandler(comment.id);
              }}
            >
              삭제
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default CommentView;
