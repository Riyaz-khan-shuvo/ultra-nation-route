import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'
const Country = (props) => {
    const { name, flag } = props.country;
    return (
        <div>
            <div className="country">
                <div className="country-img">
                    <img src={flag} alt="" />
                </div>
                <div className="country-detail">
                    <h1> {name} </h1>
                    <Link to={`/country/${name}`}>
                        <button>Show detail of {name} </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Country;