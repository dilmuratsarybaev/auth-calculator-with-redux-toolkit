import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { calculate } from "../store/calculator/calculatorSlice";

const Calculator = () => {
  const result = useSelector((state) => {
    return state.calculate.result;
  });
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(calculate.add(20));
  };
  const subtractHandler = () => {
    dispatch(calculate.subract(5));
  };
  const multiplyHandler = () => {
    dispatch(calculate.multiply(10));
  };

  const divideHandler = () => {
    dispatch(calculate.divide(9));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Calculator</h1>
      <div className={classes.value}>Result: {result}</div>
      <button onClick={addHandler}>+20</button>
      <button onClick={subtractHandler}>-5</button>
      <button onClick={multiplyHandler}>*10</button>
      <button onClick={divideHandler}>/9</button>
    </main>
  );
};

export default Calculator;
