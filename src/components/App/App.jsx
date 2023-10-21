import { nanoid } from "nanoid";

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from "components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "redux/selector";
import { addTodos } from "redux/todoSlice";

export const App = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos) {
      dispatch(addTodos(todos));
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  // const addTodo = (text) => {
  //   const todo = {
  //     id: nanoid(),
  //     text,
  //   };

  //   setTodos((todos) => [...todos, todo]);
  // };

  // const handleSubmit = (data) => {
  //   addTodo(data);
  // };

  // const deleteTodo = (id) => {
  //   setTodos((prev) => prev.filter((todo) => todo.id !== id));
  // };

  return (
    <>
      <Header />
      <Section>
        <Container>
          {/* <SearchForm onSubmit={handleSubmit} /> */}

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo id={todo.id} text={todo.text} counter={index + 1} />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
