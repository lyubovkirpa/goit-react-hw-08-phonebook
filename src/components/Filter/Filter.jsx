import React from 'react';
import { Label, Input } from './Filter.styled';
import { changeFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.currentTarget.value;
    dispatch(changeFilter(value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={handleChange}></Input>
    </Label>
  );
};

export default Filter;
