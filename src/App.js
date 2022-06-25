import React, { useState } from "react";
import "./styles.css";

const CounterText = (props) => <p>カウント：{props.count}</p>;

const INITIAL_COUNT = 0;

const Counter = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  const countAdd = () => setCount((prevCount) => prevCount + 1);

  const countSub = () => setCount((prevCount) => prevCount - 1);

  const countReset = () => setCount(INITIAL_COUNT);

  return (
    <>
      <button onClick={countAdd}>ボタン +1</button>
      <button onClick={countSub}>ボタン -1</button>
      <button onClick={countReset}>リセット</button>
    </>
  );
};

export default function App() {
  return <Counter />;
}
