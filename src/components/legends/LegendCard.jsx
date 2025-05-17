import React,{useState} from 'react'
import {  Row, Col, Card, Button } from "react-bootstrap";

const LegendCard = ({legend}) => {
      const [show, setShow] = useState(false);

  return (
    <Col >
               <Card className='player-card'  onClick={()=>setShow(!show)} >
                 {!show ? (
                   <Card.Img variant="top" src={legend.img} />
                 ) : (
                   <>
                     <Card.Header>
                       <Card.Title>{legend.name}</Card.Title>
                     </Card.Header>
   
                     <ul>
                       {legend.statistics.map((item) => (
                         <li className="list-unstyled text-start p-1 fw-bold display-6">
                           ⚽ {item}{" "}
                         </li>
                       ))}
                     </ul>
                      <p>Carear Years:{legend.official_career}</p>
                   </>
                 )}
   
                
               </Card>
             </Col>
  )
}

export default LegendCard