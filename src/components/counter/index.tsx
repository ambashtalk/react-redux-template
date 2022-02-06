import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/actions";
import { getCount } from "../../redux/selectors";
import styles from "./styles.module.css";

const Counter: React.FC = () => {
  const count = useSelector(getCount);
  const dispatch = useDispatch();

  const _handleIncrement = () => {
    dispatch(increment());
  };

  const _handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={_handleDecrement}>
        -
      </button>
      <div className={styles.display}>{count}</div>
      <button className={styles.button} onClick={_handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
