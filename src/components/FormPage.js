import React from 'react';
function FormPage(props){
    return (
        <>
        {formFields(props)}
        </>
        );
}
export default FormPage;
function formFields(props){
    const {fieldType,fieldAttrs} = props;
    if(fieldType==='text'){
        const {label, name, value, onChange, isPassword} = fieldAttrs;
        return(
            <label>
                {label}
                <input type={isPassword?'password':'text'} name={name} onChange={onChange} value={value}></input>
            </label>
        );
    }
    else if(fieldType==='select'){
        const {label, options, onChange} = fieldAttrs;
        return(
            <label>
                {label}
                <select name={name} onChange={onChange} value={value}>
                    <option value=''>--select--</option>
                    {
                        options.map(({text,value},i)=>(
                            <option value={value} key={i}>{text}</option>
                        ))
                    }
                </select>
            </label>
        );
    }
    else if(fieldType==='checkbox'){
        const {label, name, checked, onChange} = fieldAttrs;
        <label>
            {label}
        <input type='checkbox' name={name} onChange={onChange} checked={checked}></input>
    </label>
    }
    else{
        return<div></div>;
    }
}