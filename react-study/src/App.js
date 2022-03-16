import Button from './Button.js';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  //state가 변경될 때 모든 component와 code는 다시 실행됨

  console.log("call an api");

  return (
    <div>
      <h1 className={styles.title}>
        {counter}
      </h1>
      <button onClick={onClick}>Click</button>
      <Button text={"hello"} />
    </div>
  );
}

export default App;
