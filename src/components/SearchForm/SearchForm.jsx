import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

import React, { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(value);
    setValue('');
  };

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        value={value}
        onChange={handleChange}
      />
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
    </SearchFormStyled>
  );
};
