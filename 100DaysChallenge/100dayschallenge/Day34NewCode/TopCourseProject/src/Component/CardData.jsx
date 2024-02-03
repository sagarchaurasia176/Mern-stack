import React from "react";
import Card from "./Card";

function CardData(props) {
    //it's return the single arrays
    let data = props.data;
    function allDataRetrivedFromTheObject() {
        let allDataCourses = [];
        // all the data are stored into the single arrays
        Object.values(data).forEach(datas => {
            //convert the data into the single values
            datas.forEach(allData => {
                //then push the data into one of the files
                allDataCourses.push(allData);
            });
        });
        return allDataCourses;
    }

    
    return (
        <>
            {allDataRetrivedFromTheObject().map((values) => (
                <Card key={values.id} course={values} />
            )) }
        </>
    );
}

export default CardData;
