import React, { FunctionComponent, useState } from "react";
import ReactSelect, {
  ValueType,
  OptionsType,
  Props as SelectProps,
} from "react-select";
import styled from "styled-components";

type ISelectProps = {
  index: number;
  handleChange: (index: number, text: string) => void;
};

type OptionType = {
  value: string;
  label: string;
};

// 나중에 options 는 api 요청으로 대체
const options: OptionType[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Select: FunctionComponent<ISelectProps> = ({ index, handleChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    options[0].value
  );

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    handleChange(index, selectedOption);
  };
  return (
    <ReactSelect
      options={options}
      onChange={(selected: ValueType<OptionType>) => {
        const value = selected && (selected as OptionType).value;
        value && handleSelect(value);
      }}
    />
  );
};

export default Select;
