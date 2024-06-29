import React, { useState } from 'react'
import Attendence from './Attendence';
import Note from './Note';

const ExpectedPer = () => {
  const EXP = new Attendence().ExpectedAttendence;

  const temp = {totalPeriods :''  , absentPeriods :'' , expectedPer:85 };

  const [result, setResult] = useState([0,0]);
  const [Data, setData] = useState(temp);

  const set = e => setData({...Data,[e.target.name] : e.target.value});

  function Result(event) {

    event.preventDefault();
    setResult(EXP(Data));
}

  return (
    <div className='body-div'>
    <h1>Expected percentage</h1>
    <form className='form-class' onSubmit={Result}>
        <label>Enter the total conducted periods :</label>
            <input type='text' className='form-data' placeholder='Total days Conducted ' name='totalPeriods' onChange={set} value={Data.totalPeriods} />
        <label >Enter the no.of absent periods :</label>
            <input type='text' className='form-data' placeholder='NO. of absents ' name='absentPeriods' onChange={set} value={Data.absentPeriods} />
        <label >enter the Expected percentage :</label>
            <input type='text' className='form-data' placeholder='Expected Percentage ' name='expectedPer' onChange={set} value={Data.expectedPer}/>
            <div>
            <button type='submit' className='form-btn save'> Submit </button>
            <button onClick={()=>setData(temp)} className='form-btn reset'> reset </button>
            </div>
            <br></br>
            <h1> Periods to Attend or absent : {result[0]} </h1>
            <h1> expected Percentage : {result[1]} </h1>
    </form>
    <Note/>
  </div>
  )
}

export default ExpectedPer
