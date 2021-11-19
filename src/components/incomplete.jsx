import React from "react";

export const InComplete = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete">
      <p>未完了のtodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
