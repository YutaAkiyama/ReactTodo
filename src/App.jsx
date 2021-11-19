import "./styles.css";
import React, { useState } from "react";
import { InputTodo } from "./components/inputtodo";
import { InComplete } from "./components/incomplete";
import { Complete } from "./components/complete";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplete, setIncomplete] = useState(["あ", "い"]);
  const [complete, setComplete] = useState(["うううう"]);

  const onChangeText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const addNew = [...incomplete, todoText];
    setIncomplete(addNew);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodo = [...incomplete];
    newTodo.splice(index, 1);
    setIncomplete(newTodo);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodo = [...incomplete];
    newIncompleteTodo.splice(index, 1);
    setIncomplete(newIncompleteTodo);

    const newCompleteTodo = [...complete, incomplete[index]];
    setComplete(newCompleteTodo);
  };

  const onClickBack = (index) => {
    const newCompleteTodo = [...complete];
    newCompleteTodo.splice(index, 1);

    const newInCompleteTodo = [...incomplete, complete[index]];
    setIncomplete(newInCompleteTodo);
    setComplete(newCompleteTodo);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeText}
        onClick={onClickAdd}
        disabled={incomplete.length >= 5}
      />
      {incomplete.length >= 5 && <p style={{ color: "red" }}>5個以上だめ</p>}
      <InComplete
        todos={incomplete}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <Complete todos={complete} onClickBack={onClickBack} />
    </>
  );
};
