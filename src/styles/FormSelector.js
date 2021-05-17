import React from 'react';
import {
    FormControl, InputLabel, Select, MenuItem, makeStyles
} from '@material-ui/core';
function FormSelector(props){
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
      const classes = useStyles();
    const {label,name,value,onChange,itemList} = props;
    return(
      <div>
        <FormControl className={classes.formControl}>
            <InputLabel shrink id={`select-label-${name}`}>{label}</InputLabel>
            <Select
            labelId={`select-label-${name}`}
            id={`form-select-${name}`}
            value={value}
            name={name}
            onChange={onChange}
            >
            {
                itemList.map(({value,label},i)=><MenuItem key={i} value={value}>{label}</MenuItem>)
            }
            </Select>
        </FormControl>
      </div>
    );
}
export default FormSelector;