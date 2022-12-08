import { useEffect, useState } from "react";
import { Information } from "../types";
import { Container, Row } from "react-bootstrap";
import  Info  from "./Info"
const FetchComponent = () =>{
const [information, setInformation] = useState<Information[]>([])

    useEffect(()=>{
fetchInformation()
    },[])

    const fetchInformation = async () => {
        try {
            let response = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
        console.log(response)
        if (response.ok){
            let data = await response.json()
            console.log(data)
            setInformation(data)
        } else {
            console.log("error from fetching")
        }
        } catch (error){
            console.log(error)

        }
    }
    return(
        <div><h1>Here the News!!</h1>
        <Row className="m-5">{information.map((info)=> (
            <Info info={info} key={info.id}/>
        ))}
            </Row></div>
    )
}

export default FetchComponent