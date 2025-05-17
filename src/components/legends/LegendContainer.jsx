import React, { useState } from "react";
import { Container, Row, Form } from "react-bootstrap";
import { data } from "../../helpers/data";
import LegendCard from "./LegendCard";

const LegendContainer = () => {
    const [search,setSearch]=useState("")

    const handleChange=(e)=>{
        setSearch(e.target.value)
        console.log(search)

    }

    const filteredData=data.filter((item)=>item.name.toLowerCase().includes(search.trim().toLowerCase()))

  return (
    <div>
      <Form.Control type="text" placeholder="Search Legends..."   className="w-50 mx-auto"  onChange={handleChange} />

      <Container className="my-3 p-3 card-container">
        <Row xs={1} md={2} xl={3} className="g-3 d-flex justify-content-center">
          {filteredData.map((legend) => (
            <LegendCard legend={legend} key={legend.id} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
