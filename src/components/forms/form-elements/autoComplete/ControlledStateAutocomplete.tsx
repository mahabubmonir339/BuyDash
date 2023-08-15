import React from 'react';
import { Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import CustomTextField from "../../theme-elements/CustomTextField";

const options = ['Option 1', 'Option 2'];


interface ControlledStatePropsType {
  small:boolean
}

const ControlledStateAutocomplete:React.FC<ControlledStatePropsType> = ({small}) => {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <>
      <Autocomplete
      size={small===true?'small':'medium'}
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        fullWidth
        renderInput={(params) => (
          <CustomTextField
            {...params}
            placeholder="Controllable"
            aria-label="Controllable"
          />
        )}
      />
    
    </>
  );
};

export default ControlledStateAutocomplete;
