import React from 'react';

function MedicalTreatment (prop) {

    function toString(prop){
        return "[" + "Id = " +prop.Id + " , courseId = "+prop.courseId+ " , type = " + prop.type+" , category = " +prop.category + " , name = " + prop.name + " , startDate = " +prop.startDate +"]";
    }

    return (
        <div>
            {toString(prop)}  
        </div>
    );
}

export default MedicalTreatment;



   
   
