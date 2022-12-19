import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

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
          <li>
            {comment.id},{comment.content}
            <button>수정</button>
            <button
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
