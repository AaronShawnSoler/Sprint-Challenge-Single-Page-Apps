import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Episode({data}) {

    const [episodeData, setEpisodeData] = useState();

    useEffect(() => {
        axios.get(data[0])
        .then(res => {
            console.log(res);
            setEpisodeData(res.data.episode);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    return(
        <div>
            <p>Episode Introduced: {episodeData}</p>
        </div>
    );
}