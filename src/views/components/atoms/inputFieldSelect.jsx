import React, { Component } from "react";

import AsyncCreatableSelect from "react-select/async-creatable";
import { requestField } from "lib/api/field";

const loadData = async (inputValue) => {
  const { data } = await requestField();
  console.log(data);
  return data.map((el) => {
    return { label: el.title, value: el.id };
  });
};

const WithPromises = ({ index, handleChange }) => {
  const handleAdd = (newValue) => {
    handleChange(index, newValue.value);
  };
  return (
    <AsyncCreatableSelect
      onChange={(newValue) => handleAdd(newValue)}
      defaultOptions
      loadOptions={loadData}
    />
  );
};
export default WithPromises;
