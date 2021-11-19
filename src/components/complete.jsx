import React from "react";

export const Complete = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete">
      <p>完了のtodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
