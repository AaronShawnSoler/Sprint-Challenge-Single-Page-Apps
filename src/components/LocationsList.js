import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LocationsList({data}) {

    const [locationData, setLocationData] = useState();

    useEffect(() => {
        axios.get(data.url)
        .then(res => {
            console.log(res);
            setLocationData(res.data.dimension);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    return(
        <div>
            <p>Location: {locationData}</p>
        </div>
    );
}
