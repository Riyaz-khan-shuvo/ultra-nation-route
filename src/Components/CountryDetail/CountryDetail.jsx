import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const CountryDetail = () => {

    const { countryName } = useParams();
    const [detailOfCountry , setDetailOfCountry] = useState([])
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${ countryName }`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetailOfCountry(data))
    })
    
    return (
        <div>
            <h1> This is {countryName} </h1>
            {
                detailOfCountry.map(country=>(<Details country={country}></Details>))
            }
        </div>
    );
};

function Details(props) {
    const {name , flag , capital , region , borders, nativeName ,timezones , currencies, languages} = props.country;
    return(
        <div className="country">
                <div className="country-img">
                    <img src={flag} alt="" />
                </div>
                <div className="country-detail" style={{textAlign:'left' , margin:'auto'}}>
                    <h1> Country Name: {name} </h1>
                    <h5>Capital: {capital} </h5>
                    <h5>Region: {region} </h5>
                    <h5>Borders: {borders[0] +' '+ borders[1]} </h5>
                    <h5>Native Name: {nativeName} </h5>
                    <p> Time zone: {timezones} </p>
                    <p>Currencies Code: {currencies[0].code} </p>
                    <p>Currencies Name: {currencies[0].name} </p>
                    <p>Currencies Symbol: {currencies[0].symbol} </p>
                    <p>Language: {languages[0].name} </p>
                    <p>Language Native Name: {languages[0].nativeName} </p>
                </div>
            </div>
    );
}



export default CountryDetail;