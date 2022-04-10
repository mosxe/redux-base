import { connect } from "react-redux";
import { incrementLikes, decrementLikes } from './redux/actions';


function Likes(props) {
    return (
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
            <button onClick={props.onDecrementtLikes}>Dislike</button>
        </div>
    );
};

function mapStateToProps(state) {
    const { likes } = state.likesReducer;
    return {
        likes : likes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementtLikes: () => dispatch(decrementLikes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);