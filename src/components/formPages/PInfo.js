import React from 'react';
import {Link,useRouteMatch} from 'react-router-dom';
import {
    Grid, TextField, Button
} from '@material-ui/core';
import {StyledImg} from '../../styles/StyledImg';
function PInfo(props){
    const {formValues,onChange,errors,setActivePage} = props;
    setActivePage('personalinfo');
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
        <Grid container direction='column' justify='center' alignItems='center'>
            <Grid item xs={6}>
                <StyledImg src='/assets/you.png' alt='account'></StyledImg>
            </Grid>
            <Grid item>
                <Grid container direction='column' alignItems='center'>
                    <Grid item>
                        <TextField label='First Name' name={'first_name'} onChange={onChange} value={formValues.first_name}></TextField>
                    </Grid>
                    <Grid item>
                        <TextField label='Last Name' name={'last_name'} onChange={onChange} value={formValues.last_name}></TextField>
                    </Grid>
                    <Grid item>
                        <TextField type='date' label='Birthdate' name='birthdate' onChange={onChange} value={formValues.birthdate} InputLabelProps={{
                        shrink: true,
                        }}></TextField>
                    </Grid>
                    <Grid item>
                        <Button component={Link} to='/form/account'>Back</Button>
                        <Button component={Link} to='/form/sleep' disabled={!isValid()}>Next</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default PInfo;