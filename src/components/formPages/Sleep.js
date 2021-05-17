import React from 'react';
import {Link} from 'react-router-dom';
import {
    Grid, TextField, Button
} from '@material-ui/core';
import {StyledImg} from '../../styles/StyledImg';
import FormSelector from '../../styles/FormSelector';
function Sleep(props){
    const {formValues, onChange} = props;
    const hourArray = () =>{
        let ret = []
        for(let i=0; i<=24; i+=0.5){
            ret.push(i);
        }
        return ret;
    };
    return(
        <Grid container direction='row' justify='center'>
            <Grid item xs={6}>
                <StyledImg src='/assets/sleep.png' alt='account'></StyledImg>
            </Grid>
            <Grid item>
                <Grid container direction='column' alignItems='center'>
                    <Grid item>
                        <TextField InputLabelProps={{shrink:true}} label='Goal: Bed Time' type='time' name='bedtime' onChange={onChange} value={formValues.bedtime}></TextField>
                    </Grid>
                    <Grid item>
                        <FormSelector label={'Goal: Hours of Sleep'} name={'hoursOfSleep'} value={formValues.hoursOfSleep} onChange={onChange} itemList={
                            hourArray().map((t)=>({label:t,value:t}))
                        }></FormSelector>
                    </Grid>
                    <Grid item>
                        <Button component={Link} to='/form/personalinfo'>Back</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default Sleep;