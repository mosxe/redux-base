import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { commentCreate, commentsLoad } from './redux/actions';
import SingleComment from './SingleComment';

function Comments(props) {
    const [textComment, setTextComment] = useState('');
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setTextComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
        setTextComment('');
    };

    const comments = useSelector(state => {
        const { commentsReducer } = state;
        return commentsReducer.comments;
    });

    useEffect(() => {
        dispatch(commentsLoad());
    },[]);

    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit}className="commments-item-create">
                <input type="text" value={textComment} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
            {comments.length > 0 && comments.map(comment => {
                return  <SingleComment key={comment.id} data={comment}/>
            })}
        </div>
    );
};

export default Comments;