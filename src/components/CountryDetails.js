import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'


function CountryDetails() {
    const {cca3} = useParams()
    const [detail, setDetail] = useState([])

    useEffect(() => {

        async function getData(){
            let response = await axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`)
            setDetail(response.data)
            
            
            
        }
        getData()
    }, [cca3])

    if (!detail){
        return<p>Loading...</p>
    }
    return (
        <div>
        {
            detail.map((elem) => {
                return (
                    <div>
                        <img src={elem.flags.svg} alt="img" height="500px" width="700px"></img>
                        <h1>{elem.name.common}</h1>
                        <p>Capital {elem.capital}</p>
                        <hr/>
                        <p>Area {elem.area} km2</p>
                        <hr/>
                        {
                            elem.borders.map((elem)=> {
                                return (
                                    <p>Borders <Link to={`../countries/${elem}`}>{elem}</Link></p>
                                    
                                )
                            })
                        }
                    </div>
                )
                    

            })
        }

    </div>
)
}

export default CountryDetails
