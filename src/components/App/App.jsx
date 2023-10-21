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

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

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
