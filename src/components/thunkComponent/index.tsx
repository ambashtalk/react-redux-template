import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostData } from "../../redux/actions";
import { getData } from "../../redux/selectors";
import styles from "./styles.module.css";

const ThunkComponent: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(getData);

  const _onClickHandler = () => {
    dispatch(getPostData({ id: 1 }));
  };
  return (
    <div className={styles.container}>
      <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
      <button onClick={_onClickHandler}>Get Data</button>
    </div>
  );
};

export default ThunkComponent;
