import * as React from 'react';
// import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import { Box } from '@mui/material';

export default function ColorRadioButtons(Props) {
  const [selectedValue, setSelectedValue] = React.useState();
   const {title, value1, value2, span1, span2, msg, msg1, msg2, msg3,
           valueGet, valueGetGender, valueGetNationality, valueGetSelectedSpecialNeeds} = Props;

  const handleChange = (event) => {
    let val = event.target.value;
    setSelectedValue(val);
    if (val === 'mr' || val === 'ms') {
      valueGet(val);
    }
    if (val === 'male' || val === 'feMale') {
      valueGetGender(val);
    }
    if (val === 'kenya' || val === 'other') {
      valueGetNationality(val);
    }
    if (val === 'yes' || val === 'no') {
      valueGetSelectedSpecialNeeds(val);
    }
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <Box color={msg1 || msg || msg2 || msg3 ? 'red':''}>
      <span>{title}</span><br />
      <Radio {...controlProps(value1)} color="secondary" sx={{
           color: msg1 || msg || msg2 || msg3 ? 'red':'',
        }}/><span>{span1}</span>
      <Radio {...controlProps(value2)} color="success" sx={{
           color: msg1 || msg || msg2 || msg3 ? 'red':'',
        }}/><span>{span2}</span><br />
      <Box color="red">{msg}</Box>
      <Box color="red">{msg1}</Box>
      <Box color="red">{msg2}</Box>
      <Box color="red">{msg3}</Box>
      {/* <Radio {...controlProps('d')} color="default" /> */}
      {/* <Radio
        {...controlProps('e')}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      /> */}
    </Box>
  );
}
