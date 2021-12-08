import React from "react";
import "./style.css";
import MedicalTreatmentPanel from './MedicalTreatmentPanel';
import MedicalTreatment from './MedicalTreatmentPanel';

export default function App(){
 return (


    <div>
        <MedicalTreatment treatId ="21436534" courseId = "003" type= "short term"
      category = "anxiety"  name = "Man preet" startDate= {Date()} ></MedicalTreatment>
      <MedicalTreatmentPanel/>
      </div>
); 
}
