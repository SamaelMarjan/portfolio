import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Data from './data';

export default function Info () {
    const {id} = useParams();
    const [info, setInfo] = useState(null);

    useEffect(() => {
        let info = Data.find((info) => info.id === parseInt(id));
        if (info) {
            setInfo(info);
        }
    }, [id]);

    return (
        <>
        {
            info ? (
                <div className="info">
                    <div className="set_info">
                        <img src={info.img} alt={info.alt} />
                        <p>{info.desc}</p>
                    </div>
                </div>
            ) : (null)
        }
        <Link to='/projects'>Back</Link>
        </>
    );
}