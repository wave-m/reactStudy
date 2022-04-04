import { useState, useEffect } from 'react';

function ToDo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // 직접적으로 state를 수정하는 건 x 함수를 써야함
    if(toDo === "")
      return;
      
    setToDos(currentArray => [...currentArray, toDo]); // 현재 argument로 현재 state로 보냄
    setToDo(""); // 이와 같이 코딩 되어 있을 경우 toDo가 비어있는 String 값이 됨
  };
  
  useEffect(()=>{
    console.log(toDos);
  }, [toDos]);
  
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do.."
        />
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) =>
          <li key={index}>{item}</li>)
        }
      </ul>
    </div>
  );
}

export default ToDo;
