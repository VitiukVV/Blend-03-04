import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { FormBtn, InputSearch, SearchFormStyled } from "./SearchForm.styled";
import { useDispatch } from "react-redux";
import { addTodos } from "redux/todoSlice";
import { nanoid } from "nanoid";

export const SearchForm = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleInput = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodos({ text: query, id: nanoid() }));
    setQuery("");
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
