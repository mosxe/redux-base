import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';


const Spin = (props) => {
    const spinner = useSelector(state => {
        const { appReducer } = state;
        return appReducer.loading;
    });
    return (
        <div className="loader-styles">
            <Loader
                type="TailSpin"
                width={100}
                height={100}
                color="gray"
                visible={spinner}
            />
        </div>
    );
};

export default Spin;