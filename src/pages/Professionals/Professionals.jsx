import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { professionals } from "../../assets/assets";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Professionals = () => {
  const [selectedService, setSelectedService] = useState("carpentry");

  return (
    <>
      <Navbar />
      <Container className="mt-5 mb-5">
        <h2 className="text-center mb-4">Find a Professional</h2>

        <Form.Group controlId="serviceSelect" className="mb-4">
          <Form.Label>Select a Service</Form.Label>
          <Form.Select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            {Object.keys(professionals).map((service) => (
              <option key={service} value={service}>
                {service.charAt(0).toUpperCase() + service.slice(1)}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Row>
          {professionals[selectedService].map((pro) => (
            <Col md={4} key={pro.id} className="mb-4">
              <Card className="shadow-sm">
                <Card.Img
                  variant="top"
                  src={pro.image}
                  alt={pro.name}
                  className="img-fluid"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{pro.name}</Card.Title>
                  <Card.Text>
                    <strong>Experience:</strong> {pro.experience} <br />
                    <strong>Rating:</strong> ⭐{pro.rating} <br />
                    <strong>Contact:</strong> {pro.contact}
                  </Card.Text>
                  <Button variant="primary">Book {pro.name}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Professionals;

// const Professionals = () => {
//   const [selectedService, setSelectedService] = useState("carpentry");

//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Find a Professional</h2>

//       <Form.Group controlId="serviceSelect" className="mb-4">
//         <Form.Label>Select a Service</Form.Label>
//         <Form.Select
//           value={selectedService}
//           onChange={(e) => setSelectedService(e.target.value)}
//         >
//           {Object.keys(professionals).map((service) => (
//             <option key={service} value={service}>
//               {service.charAt(0).toUpperCase() + service.slice(1)}
//             </option>
//           ))}
//         </Form.Select>
//       </Form.Group>

//       <Row>
//         {professionals[selectedService].map((pro) => (
//           <Col md={4} key={pro.id} className="mb-4">
//             <Card className="shadow-sm">
//               <Card.Body>
//                 <Card.Title>{pro.name}</Card.Title>
//                 <Card.Text>
//                   <strong>Experience:</strong> {pro.experience} <br />
//                   <strong>Rating:</strong> ⭐{pro.rating} <br />
//                   <strong>Contact:</strong> {pro.contact}
//                 </Card.Text>
//                 <Button variant="primary">Book {pro.name}</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Professionals;
