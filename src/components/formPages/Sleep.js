import React from 'react';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
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
        <div>
            <img src='/assets/sleep.png' alt='account'></img>
            <input type='number' name='bedtime' onChange={onChange} value={formValues.bedtime}>
            </input>
            <select name='hoursOfSleep' onChange={onChange} value={formValues.hoursOfSleep}>
                <option value=''>--hours--</option>
                {
                    hourArray().map((t)=><option key={uuid()} value={t}>{t}</option>)
                }
            </select>
            <Link to='/form/personalinfo'>
                <button>Back</button>
            </Link>
        </div>
    );
}
export default Sleep;