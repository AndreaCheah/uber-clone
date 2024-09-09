import { StylesConfig, GroupBase } from 'react-select';
import { Option } from '@/types/InputItemTypes';

export const getCustomStyles: StylesConfig<Option, false, GroupBase<Option>> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    border: 'none',
  }),
  option: (provided) => ({
    ...provided,
    color: 'black',
  }),
};
