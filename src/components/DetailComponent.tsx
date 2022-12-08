import { Component, ReactNode } from "react";
import { Link } from "react-router-dom"
import FetchComponent from "./FetchComponent";
import { useNavigate, useParams } from 'react-router-dom'
import { Information } from "../types"
import { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"

const DetailComponent = () => {
const params = useParams()
const [information, setInformation] = useState<null | Information>(null)

const navigate = useNavigate()


useEffect(()=>{
    fetchInformation()
        },[])
    
        const fetchInformation = async () => {
            try {
                let response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.elementId}`)
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
<Container>
               {information && (
                <Row className="mycard text-align-center col-12">
                <div className="col-11 col-md-8"><img src={information.imageUrl} className="myInnerCart" alt="image"/></div>
                <div className="col-11 col-md-4">
                  <h4>{information.newsSite}</h4>
                  <h6>{information.title}</h6>
                  <p>{information.summary}</p>
                  <p></p>
              
                
                      </div></Row>)
               }

               </Container>
                
            
        )
    }

export default DetailComponent