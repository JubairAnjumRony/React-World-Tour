import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const  Countries = () =>{

    const [Countries,setCountry] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res) =>res.json())
        .then((data)=> setCountry(data))
    }, [])


    return (
        <div>
            <h3>Countries: {Countries.length}</h3>
            {
                Countries.map(c=><Country key={c.cca3} country={c}></Country>)
            }
        </div>
    );
}
export default Countries;