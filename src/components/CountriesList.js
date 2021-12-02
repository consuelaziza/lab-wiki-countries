
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';



function CountriesList() {

    const [countries, setCountries] = useState([])

    useEffect(() => {

        async function getData(){
        let response = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(response.data)
        }
    
        getData()
    
        }, [])
    
        if (!countries.length){
            return <p>Loading...</p>
        }

    return (

        <div>
        <h1>Countries</h1>
        {
            countries.map((elem, i) => {
                return (
                <div>
                <Link to={`countries/${elem.cca3}`}>{elem.name.common}</Link>
                </div>
                )
            })
        }
    </div>
    )
}

export default CountriesList
