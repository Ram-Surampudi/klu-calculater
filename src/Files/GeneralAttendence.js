import React, { useState } from 'react'
import Attendence from './Attendence';
import Note from './Note';

const GeneralAttendence = () => {
  const GA = new Attendence().GeneralAttendence;
  const Ep = new Attendence().ExpectedAttendence;

  const temp = {totalPeriods :''  , absentPeriods :''};

  const [result, setResult] = useState(false);
  const [Data, setData] = useState(temp);
  const [per, setper] = useState([0]);

  const set = e => setData({...Data,[e.target.name] : e.target.value});

  function Result(event) {
    event.preventDefault();
    let c = GA(Data);
    setResult(c);
    setper(c < 85 ? Ep({...Data, expectedPer : 85}) : '0');
  }

  return (
<div className='div'>
<div className='lineBreak'>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    <h1>General Attendence</h1>
    <form className='form-class' onSubmit={Result}>
        <label for='totalPeriods'>Enter the total conducted periods :</label>
            <input type='text' className='form-data' placeholder='Total days Conducted ' name='totalPeriods' onChange={set} value={Data.totalPeriods} />
        <label for='absentPeriods'>Enter the no.of absent periods :</label>
            <input type='text' className='form-data' placeholder='NO. of absents ' name='absentPeriods' onChange={set} value={Data.absentPeriods} />
            <div>
            <button type='submit' className='form-btn save'> Submit </button>
            <button onClick={()=>setData(temp)} className='form-btn reset'> reset </button>
            </div>
            <br></br>
            <h1> Percentage : {result} </h1>
            {result && <h1> periods to attend : {per[0]}</h1>}
    </form>
    <Note/>
  </div>
  )
}

export default GeneralAttendence;
