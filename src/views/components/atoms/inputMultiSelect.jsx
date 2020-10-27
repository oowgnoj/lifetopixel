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
    // const handleChange = (newValue, actionMeta) => {
    //     console.group('Value Changed');
    //     console.log(newValue);
    //     console.log(`action: ${actionMeta.action}`);
    //     console.groupEnd();
    //   };  
    return (
      <AsyncCreatableSelect
        onChange={(newVal)=>handleChange(index, newVal)}
        defaultOptions
        isMulti
        loadOptions={loadData}
      />
    );
}
export default WithPromises