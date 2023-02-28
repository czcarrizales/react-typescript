import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {

  return (
    <form onSubmit={handleAdd}>
      <input type="text" placeholder="Enter task" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button type="submit">Go</button>
    </form>
  );
};
