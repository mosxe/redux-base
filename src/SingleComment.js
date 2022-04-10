import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { commentUpdate, commentDelete } from './redux/actions';

function SingleComment({data}) {
    const [commentText, setCommentText] = useState('');
    const { text, id } = data;
    const dispatch = useDispatch();

    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    const handleInput = (event) => {
        setCommentText(event.target.value);
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(commentUpdate(commentText, id));
    };

    const handleDelete = (event) => {
        event.preventDefault();
        dispatch(commentDelete(id));
    }

    return (
            <form onSubmit={handleUpdate} className="commments-item">
                <div className="comments-item-delete" onClick={handleDelete}>
                    &times;
                </div>
                <input type="text" value={commentText} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
    );
};

export default SingleComment;