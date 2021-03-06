import { useEffect, useState } from "react";
import { Card, Container, Image, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import { database } from "../config";
import withAuth from "../components/auth";

const Basic = ({ data }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    let ref = database.ref("gandalf_123/basic_information"); // TODO: Change to inhabitant object
    ref.on(
      "value",
      snapshot => {
        const data = snapshot.val();

        setInfo(data);
      },
      error => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Layout>
      <Container fluid style={{ marginTop: 16 }}>
        <Card>
          <Card.Body>
            <Row>
              <Col sm="3">
                <Image src="./images/old_person.jpg" width={300} rounded />
              </Col>
              <Col sm="auto">
                <Row>Name: {info?.name}</Row>
                <Row>Phone number (home): {info?.number}</Row>
                <Row>Age: {info?.age}</Row>
                <Row>Address: {info?.address}</Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
};

export default withAuth(Basic);
