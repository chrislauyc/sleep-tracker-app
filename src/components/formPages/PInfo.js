import React from 'react';
import {Link} from 'react-router-dom';
function PInfo(props){
    const {formValues,onChange,errors} = props;
    const isValid = () =>{
        let errorsInitialized = Object.keys(errors).filter((key)=>(
            (key==='first_name'||key==='last_name'||key==='birthdate')
        ));
        let errorsFound = errorsInitialized.filter((key)=>(
            errors[key]!==''
        ));
        return(errorsFound.length===0&&errorsInitialized.length===3);
    };
    return(
        <div>
            <img src='/assets/you.png' alt='account'></img>
            <label>
                First Name
                <input type='text' name={'first_name'} onChange={onChange} value={formValues.first_name}></input>
            </label>
            <label>
                Last Name
                <input type='text' name={'last_name'} onChange={onChange} value={formValues.last_name}></input>
            </label>
            <label>
                birthdate
                <input type='date' name='birthdate' onChange={onChange} value={formValues.birthdate}></input>
            </label>
            <Link to='/form/account'>
                <button>Back</button>
            </Link>
            <Link to='/form/sleep'>
                <button disabled={!isValid()}>Next</button>
            </Link>
        </div>
    );
}
export default PInfo;