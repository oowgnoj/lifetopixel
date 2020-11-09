import React from "react";
import InputMultiSelect from "views/components/atoms/InputMultiSelect";
const MultiselectContainer = ({ index, handleChange, dataType }) => {
  return <InputMultiSelect index={index} handleChange={handleChange} />;
};

export default MultiselectContainer;
