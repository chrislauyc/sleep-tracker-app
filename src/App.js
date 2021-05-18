import './App.css';
import React, {useState,useEffect} from 'react';
import Form  from './components/Form';
import Header from './components/Header';
import Users from './components/Users';
import {schema} from './validation/formSchema';
import {Route, Switch,useRouteMatch} from 'react-router-dom';
import {Container} from '@material-ui/core';
import styled from 'styled-components';
import axios from 'axios';
import * as yup from 'yup';
const initialValues = {
  first_name:'',
  last_name:'',
  email:'',
  password:'',
  birthdate:'',
  bedtime:'',
  hoursOfSleep:'',
  terms:false
};
function App() {
  const [formValues, setFormValues] = useState(initialValues);
  const [isValid,setIsValid] = useState(true);
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('/');
  const changeValues = (name,value) =>{
    yup.reach(schema,name)
    .validate(value)
    .then(()=>setErrors({...errors,[name]:''}))
    .catch((err)=>setErrors({...errors,[name]:err.errors[0]}));
    setFormValues({...formValues,[name]:value});
  };
  const submitForm = () =>{
    setIsLoggedIn(true);
    axios.post('https://reqres.in/api/users',formValues)
    .then((r)=>{
      setFormValues(initialValues);
      setUsers({...users,[r.data.id]:r.data});
    })
    .catch((e)=>console.log('error',e));
  };
  const updateActivePage=(pageName)=>{
    if(pageName!==activePage){
      setActivePage(pageName);
    }
  };
  useEffect(()=>{
    schema.isValid(formValues)
    .then((valid)=>{
      setIsValid(valid);
    })
  },[formValues]);
  return(
    <div className="App">
      <Header isLoggedIn={isLoggedIn} activePage={activePage}/>
      <main>
        <Switch>
          <Route path='/form'>
            <Container>
              <Form formValues={formValues} changeValues={changeValues} submitForm={submitForm} isValid={isValid} errors={errors} isLoggedIn={isLoggedIn} setActivePage={updateActivePage}></Form>
            </Container>
          </Route>
          <Route path='/'>
            <Container>
              <StyledImg src='/assets/Koala_Sleep.jpg'></StyledImg>
            </Container>
          </Route>
        </Switch>
        <Users users={users}/>
      </main>
    </div>
  );
}

export default App;
const StyledImg = styled.img`
  max-width:100%;
`;
