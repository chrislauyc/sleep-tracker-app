import React from 'react';
import Account from './formPages/Account';
import PInfo from './formPages/PInfo';
import Sleep from './formPages/Sleep';
import Errors from './Errors';
import {Route, Switch, Redirect,useRouteMatch} from 'react-router-dom';
import {Button} from '@material-ui/core';
function Form(props){
    const{formValues, changeValues, submitForm, isValid, errors, isLoggedIn, setActivePage} = props;
    const onChange = (e)=>{
        const {name,value,type,checked} = e.target;
        const inputValue = type === 'checkbox'? checked:type==='text'?value.trim():value;
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
                    <Account formValues={formValues} onChange={onChange} errors={errors} setActivePage={setActivePage}/>
                </Route>
                <Route path='/form/personalinfo'>
                    <PInfo formValues={formValues} onChange={onChange} errors={errors} setActivePage={setActivePage}/>
                </Route>
                <Route path='/form/sleep'>
                    <Sleep formValues={formValues} onChange={onChange} setActivePage={setActivePage}/>
                </Route>
            </Switch>
            <Button type='submit' disabled={!isValid}>Finish</Button>
            <Errors errors={errors} isvalid={isValid} />
            {isLoggedIn? 
                <>
                    <Redirect to='/'></Redirect>
                    {setActivePage('home')}
                </>
                :''
            }
        </form>
    );
}
export default Form;
