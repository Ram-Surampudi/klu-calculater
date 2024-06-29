import React, { useState } from 'react'
import Attendence from './Attendence';
import Note from './Note';

const Ltps = () => {

    const LTPS = new Attendence().Ltps;

    const temp = {lecture : '', tutorial :'', practical:'', skill : ''};

    const [result, setResult] = useState(0);
    const [Data, setData] = useState(temp);

    const set = e => setData({...Data,[e.target.name] : e.target.value});

    function Result(event) {
            event.preventDefault();
            setResult(LTPS(Data));
        }

  return (
    <div className='body-div'>
      <h1>LTPS</h1>
        <form className='form-class' onSubmit={Result}>
            <label for='lecture'>Enter the Lecture percentage :</label>
            <input type='text' className='form-data' placeholder='Lecture Percentage ' name='lecture' onChange={set} value={Data.lecture} />
            <label for='tutorial'>Enter the tutorial percentage :</label>
            <input type='text' className='form-data' placeholder='Tutorial Percentage ' name='tutorial' onChange={set} value={Data.tutorial} />
            <label for='practical'>Enter the practical percentage :</label>
            <input type='text' className='form-data' placeholder='Pratical Percentage ' name='practical' onChange={set} value={Data.practical}/>
            <label for='skill'>Enter the skill percentage :</label>
            <input className='form-data' type='text'  placeholder='Skill Percentage ' name='skill' onChange={set}  value={Data.skill}  />
            <div>
            <button type='submit'  className='form-btn save'> Submit </button>
            <button className='form-btn reset' onClick={()=>setData(temp)}> reset </button>
            </div>
        </form>
        <h1> LTPS Attendende percentage : {result} </h1>
        <Note/>
    </div>
  )
}

export default Ltps
