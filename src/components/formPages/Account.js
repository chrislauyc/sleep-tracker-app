import React from 'react';
import {Link} from 'react-router-dom';
import {
    Grid, TextField, Checkbox,FormControlLabel,Button
} from '@material-ui/core';
import {StyledImg} from '../../styles/StyledImg';
function Account(props){
    const {formValues,onChange,errors} = props;
    const isValid = () =>{
        let errorsInitialized = Object.keys(errors).filter((key)=>(
            (key==='email'||key==='password'||key==='terms')
        )); 
        let errorsFound = errorsInitialized.filter((key)=>(
            errors[key]!==''
        ));
        return(errorsFound.length===0&&errorsInitialized.length===3);
    };
    return(
        <Grid container direction='row' justify='center'>
            <Grid item xs={6}>
                <StyledImg src='/assets/account.png' alt='account'></StyledImg>
            </Grid>
            <Grid item>
                <Grid container direction='column' alignItems='center'>
                    <Grid item>
                        <TextField label='Email Address' type='text' name='email' onChange={onChange} value={formValues.email}/>
                    </Grid>
                    <Grid item>                        
                        <TextField label='Password' type='password' name='password' onChange={onChange} value={formValues.password}/>

                    </Grid>
                    <Grid item>                        
                        <FormControlLabel label='Terms of Service' control={<Checkbox type='checkbox' name='terms' onChange={onChange} checked={formValues.terms}/>}/>

                    </Grid>
                    <Grid item>                        
                        <Button component={Link} to='/'>Back</Button>
                        <Button component={Link} to='/form/personalinfo' disabled={!isValid()}>Next</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default Account;