import styles from "./Error.module.scss"
import alien from "../../assets/alien.png" 
import { useDispatch } from "react-redux";
import { fetchUsers } from '../../redux/reducers/userSlice';

function Error() {

    const dispatch = useDispatch();

    return (
        <div className={styles.root}>
            <img src={alien}/>
            <h1 className={styles.title}>Какой-то сверхразум все сломал</h1>
            <p className={styles.description}>Постараемся быстро починить</p>
            <span onClick={() => dispatch(fetchUsers())} className={styles.try}>Попробовать снова</span>
        </div>
    );
}

export default Error;
