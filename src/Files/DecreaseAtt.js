import React, { useState } from 'react'
import Attendence from './Attendence';
import Note from './Note';

const DecreaseAtt = () => {

  const TAL = new Attendence().takeALeave;

  const temp = {totalPeriods :''  , absentPeriods :'0' , wantToAbsentPeriods :'' };

  const [result, setResult] = useState(0);
  const [Data, setData] = useState(temp);

  const set = e => setData({...Data,[e.target.name] : e.target.value});

  function Result(event) {

    event.preventDefault();
    setResult(TAL(Data));
}


  return (
<div className='div'>
    <h1>Attendce calculation on leave</h1>
    <form className='form-class' onSubmit={Result}>
        <label for='totalPeriods'>Enter the total conducted periods :</label>
            <input type='text' className='form-data' placeholder='Total days Conducted ' name='totalPeriods' onChange={set} value={Data.totalPeriods} />
        <label for='absentPeriods'>Enter the no.of absent periods :</label>
            <input type='text' className='form-data' placeholder='NO. of absents ' name='absentPeriods' onChange={set} value={Data.absentPeriods} />
        <label for='wantToAbsentPeriods'>Enter the no.of periods you want to absent :</label>
            <input type='text' className='form-data' placeholder='NO. of periods to absent' name='wantToAbsentPeriods' onChange={set} value={Data.wantToAbsentPeriods} />
            <div>
            <button type='submit' className='form-btn save'> Submit </button>
            <button onClick={()=>setData(temp)} className='form-btn reset'> reset </button>
            </div>
            <br></br>
            <h1> Percentage : {result} </h1>
    </form>
    <Note/>
  </div>
  )
}

export default DecreaseAtt
