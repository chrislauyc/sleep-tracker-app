import React from 'react';
import uuid from 'react-uuid';
function Errors(props){
    const {errors,isValid} = props;
    return(
        isValid||!(Object.keys(errors).find((e)=>errors[e]!==''))?'':
        (<label>
            Errors
            {
                Object.keys(errors).filter((key)=>errors[key]!=='').map((key)=><div key={uuid()}>{errors[key]}</div>)
            }
        </label>)
    );
}
export default Errors;