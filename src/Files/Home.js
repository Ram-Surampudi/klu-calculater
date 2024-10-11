import React from 'react'

const Home = () => {
  return (
    <div className='div'>
        <div className='lineBreak'>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
        <h1 className='main'> welcome to klu Attendence Calculator</h1>
        <section className='sub'>
            <p> here the discription about this web page : </p>
            <div className='sub0'>
                <h1><a className='hyperlink' href='/ltps'>LPS</a></h1>
                <p>In this tab, we calculate the overall percentage of the subject by considering all its components. Please provide the attendance percentage for each component of the subject. If a component is not part of the subject structure, leave that component's input empty. After providing the attendance percentages for all components, press enter, and the tool will calculate the subject's overall percentage.</p>
            </div>
            <div className='sub0'>
                <h1><a className='hyperlink' href='/expected-percentage'>Expected percentage</a></h1>
                <p>In this tab, we calculate the number of periods you need to attend or can be absent to achieve the expected attendance percentage. To do this, provide the total number of periods conducted, the total number of periods absent, and the expected attendance percentage. If the calculated periods are positive, you need to attend those periods to reach the expected attendance percentage.If the calculated periods are negative, you can miss those periods and still maintain the expected attendance percentage.</p>
            </div>
            <div className='sub0'>
                <h1><a className='hyperlink' href='/attendence'>Attendence</a></h1>
                <p>In this tab, we calculate the actual attendance percentage for each subject component separately. We use the total periods conducted up to the current date and the total number of absences to date to determine this percentage. Additionally, the calculation provides the number of periods you need to attend to achieve an 85% attendance percentage specifically for each component.It's essential to calculate each component of the subject individually to ensure accurate attendance percentages, rather than aggregating them, which could lead to inaccuracies. This approach should be followed using the LTPS tab for precise calculations.</p>
            </div>
            <div className='sub0'>
                <h1><a className='hyperlink' href='/take-a-leave'>take a leave </a> </h1>
                <p>In this tab, you can calculate how much the attendance percentage will decrease when taking a leave. To do this, provide the total periods conducted up to the current date, the total absences up to the current date, and specify the number of periods you plan to take leave for. The calculation will then determine the resulting attendance percentage after accounting for the leave taken.</p>
            </div>
        </section>
    </div>
  )
}

export default Home
