import { Information } from "../types"
import { Card, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
interface InfoProps {
    info: Information,
    
}

const Info = ({ info }: InfoProps) => {
  const navigate = useNavigate()
      
    return(
        <Link to={"/detail/" + info.id}  className="col-6 col-md-3 mycart" >

  <img src={info.imageUrl} className="myInnerCart" alt="image"/>
  <div className="over">
    <h4>{info.newsSite}</h4>
    <h6>{info.title}</h6>
    <p>{info.summary}</p>
    <p></p>

  
</div></Link>/*
<div onClick={(e)=> navigate("/detail/:elemtId")} className="col-6 col-md-3 mycart" >

<img src={info.imageUrl} className="myInnerCart" alt="image"/>
<div className="over">
  <h4>{info.newsSite}</h4>
  <h6>{info.title}</h6>
  <p>{info.summary}</p>
  <p></p>


</div></div>*/
    )
}

export default Info