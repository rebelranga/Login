import { useEffect } from "react";
import axios from "axios";


const newsFEED = () => {

    useEffect(() => {
        axios({
        method: "GET",
        url:"https://newsapi.org/v2/everything",
        params: {
            country:"in",
            aplikey:"q=Apple&from=2022-10-31&sortBy=popularity&apiKey=",
        }
    }).then(() =>{
        console.log(Response);

    }).catch(() =>{
        console.log(error);

    })


    }, []);
return (
    <>
    <h1> news serivice</h1>
    </>
)
}