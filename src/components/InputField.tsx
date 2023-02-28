import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export const InputField: React.FC<Props> = ({todo, setTodo}) => {

  return (
    <form>
      <input type="text" placeholder="Enter task" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button type="submit">Go</button>
    </form>
  );
};
