import { RiDeleteBinLine } from "react-icons/ri";
import { Text } from "components";
import { DeleteButton, TodoWrapper } from "./Todo.styled";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "redux/todoSlice";

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();
  const handleEditClick = () => {
    const newText = prompt("Input new text for your task");
    dispatch(editTodo({ id, text: newText }));
  };
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <button type="button" onClick={handleEditClick}>
          Edit
        </button>
      </TodoWrapper>
    </>
  );
};
