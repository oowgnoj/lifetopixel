import React, { Component } from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import {requestTag} from 'lib/api/tag'


const loadData = async (inputValue) => {
  const {data} = await requestTag();
  return data.map(el => {
    return {label: el.name, value: el.id }}
  )
}

const WithPromises = ({index, handleChange}) => {
    const handleAdd = (newValue) => {
        handleChange(index, newValue)
      };  
    return (
      <AsyncCreatableSelect
        onChange={(newValue)=>handleAdd(newValue)}
        defaultOptions
        isMulti
        loadOptions={loadData}
      />
    );
}
export default WithPromises