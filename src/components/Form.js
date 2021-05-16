import React from 'react';
import Account from './formPages/Account';
import PInfo from './formPages/PInfo';
import Sleep from './formPages/Sleep';
import Errors from './Errors';
import {Route, Switch, Redirect} from 'react-router-dom';
function Form(props){
    const{formValues, changeValues, submitForm, isValid, errors, isLoggedIn} = props;
    const onChange = (e)=>{
        const {name,value,type,checked} = e.target;
        const inputValue = type === 'checkbox'? checked:value.trim();
        changeValues(name,inputValue);
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        submitForm();
    }
    return(
        <form onSubmit={onSubmit}>
            <Switch>
                <Route path='/form/account'>
                    <Account formValues={formValues} onChange={onChange} errors={errors}/>
                </Route>
                <Route path='/form/personalinfo'>
                    <PInfo formValues={formValues} onChange={onChange} errors={errors} />
                </Route>
                <Route path='/form/sleep'>
                    <Sleep formValues={formValues} onChange={onChange}/>
                </Route>
            </Switch>
            <button type='submit' disabled={!isValid}>Finish</button>
            <Errors errors={errors} isvalid={isValid} />
            {isLoggedIn? <Redirect to='/'></Redirect>:''}
        </form>
    );
}
export default Form;
