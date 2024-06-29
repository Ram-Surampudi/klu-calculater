
export default class Attendence {

    Ltps (classAttendence) {
    const classWeightages = {lecture : 1, tutorial : 0.25, practical : 0.5 , skill : 0.25};

    var totalWeightage =0, totalAttendence = 0, temp ;
    
    for(let i in classAttendence){

        temp = parseFloat(classAttendence[i]);

        if(0 < temp && temp <= 100){
    
            totalAttendence += (temp * classWeightages[i]);
    
            totalWeightage += (classWeightages[i] *100);
    
        }
    }

        return (totalWeightage > 0) ? Math.ceil((totalAttendence/totalWeightage)*100) : 0;
}

ExpectedAttendence({totalPeriods  , absentPeriods , expectedPer }){

   let  periods =0,
        percentage = 0;

        totalPeriods = parseFloat(totalPeriods);
        absentPeriods = parseFloat(absentPeriods);
        expectedPer = parseFloat(expectedPer);

        if(absentPeriods < totalPeriods && totalPeriods > 0){

            let presentPeriods = totalPeriods - absentPeriods;
            percentage = Math.ceil((presentPeriods*100)/totalPeriods);

            if(expectedPer <= 100 && expectedPer > 0 && absentPeriods > -1 ){
                if(percentage < expectedPer){
                    expectedPer /= 100;
                    periods = Math.ceil((presentPeriods - (expectedPer * totalPeriods)) / (expectedPer -1));
                    percentage = Math.ceil((presentPeriods+periods)*100/(totalPeriods+periods));
                }
                else {
                expectedPer /= 100;
                periods = -Math.round(((presentPeriods/expectedPer) - totalPeriods));
                percentage = Math.ceil(presentPeriods*100/(totalPeriods-periods));
                }
             }
        }

    return [periods, percentage];
}

takeALeave({totalPeriods , absentPeriods , wantToAbsentPeriods }){
    totalPeriods = parseFloat(totalPeriods);
    absentPeriods = parseFloat(absentPeriods);
    wantToAbsentPeriods = parseFloat(wantToAbsentPeriods);
    if(totalPeriods > absentPeriods && totalPeriods > 0 && absentPeriods > -1 && wantToAbsentPeriods > 0)
            return Math.ceil((totalPeriods - absentPeriods )*100/(totalPeriods + wantToAbsentPeriods));
    return "Something went Wrong";
}

GeneralAttendence({totalPeriods , absentPeriods}){
    totalPeriods = parseFloat(totalPeriods);
    absentPeriods = parseFloat(absentPeriods);
    if(totalPeriods > absentPeriods && totalPeriods >0 && absentPeriods >-1)
        return Math.ceil((totalPeriods-absentPeriods)*100/totalPeriods);
    return "Something went Wrong";

}

}