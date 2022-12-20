import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { readComments } from '../../redux/modules/commentSlice';
import { useCallback } from 'react';
import { deleteComment } from '../../redux/modules/commentSlice';
import { updateComment } from '../../redux/modules/commentSlice';

function CommentView() {
  const param = useParams();
  const [modifyContent, setModifyContent] = useState('');
  const comments = useSelector((state) => state.comment.comments);

  const dispatch = useDispatch();

  async function updateCommentHandler(commentId) {
    alert('수정완료');
    await dispatch(updateComment({ id: commentId, content: modifyContent }));
    dispatch(readComments(param.memeId));
    setModifyContent('');
  }

  async function deleteCommentHandler(commentId) {
    alert('삭제완료');
    await dispatch(deleteComment(commentId));
    dispatch(readComments(param.memeId));
  }

  const dispatchReadComments = useCallback(() => {
    dispatch(readComments(param.memeId));
    console.log(param.memeId);
  }, [dispatch]);

  useEffect(() => {
    dispatchReadComments();
  }, [dispatchReadComments]);

  return (
    <div>
      {comments?.map((comment) => {
        return (
          <li key={comment.id}>
            {comment.content}
            <input
              type="text"
              onChange={(e) => {
                setModifyContent(e.target.value);
              }}
            ></input>
            <button
              type="button"
              onClick={() => {
                updateCommentHandler(comment.id);
              }}
            >
              수정
            </button>
            <button
              type="button"
              onClick={() => {
                deleteCommentHandler(comment.id);
              }}
            >
              {' '}
              삭제
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default CommentView;
