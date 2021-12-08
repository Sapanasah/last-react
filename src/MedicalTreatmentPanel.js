// MedicalTreatmentPanel.js

import React from "react";


function MedicalTreatmentPanel(){

    const [treatId, setTreatId] = React.useState('');

    const [treatcourseId, setTreatcourseId] = React.useState('');

    const [treattype, setTreattype] = React.useState('');

    const [treatcategory, setTreatcategory] = React.useState('');

    const [treatname, setTreatname] = React.useState('');

    const [treatstartDate, setTreatstartDate] = React.useState('');


    function showClickHandler () {
        window.alert("[" + "Id = "+ treatId + ", courseId = "+treatcourseId+ ", type = "+ treattype +", category =" +treatcategory +" name = " + treatname + "startDate = " + treatstartDate + "]");

    }
 function clearClickHandler () {
        setTreatId('');
        setTreatcourseId('');
        settype('');
        setcategory('');
        setname('');
        setstartDate('');

    }


    return(
        <div>

            <input placeholder="treatId" value={treatId}  onChange = { e => setTreatId(e.target.value)}  ></input>

            <br/>

            <input placeholder="treatcourseId" value={treatcourseId}  onChange = { e => settreatcourseId(e.target.value)}  ></input>

            <br/>

            <input placeholder=" type" value={treattype}  onChange = { e => settreatType(e.target.value)}  ></input>
            
            <br/>

            <input placeholder=" category" value={treatcategory}  onChange = { e => settreatcategory(e.target.value)}  ></input>

            <br/>

            <input placeholder=" name" value={treatname}  onChange = { e => settreatname(e.target.value)}  ></input>

            <br/>

            <input placeholder=" startDate" value={treatstartDate}  onChange = { e => settreatstartDate(e.target.value)}  ></input>

            <br/>

            <button style={{color:"black"}} onClick={showClickHandler}>show</button>

            <button style={{color:"purple"}} onClick={clearClickHandler}>Clear</button>

            <br/><br/><br/><br/>

            <input placeholder="Some value"></input>

        </div>
    );

}

export default MedicalTreatmentPanel;