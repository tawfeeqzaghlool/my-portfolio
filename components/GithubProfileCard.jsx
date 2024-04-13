import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <Image
                src={prof.avatar_url}
                // Add width and height props based on your desired image size
                width={200} // Adjust as needed
                height={200} // Adjust as needed
                alt="Tawfeeq Zaghlool"
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
                unoptimized={true}
                loading="lazy"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Hit me Up!</h2>
              <p className="lead text-white mt-3 text-justify">
              {`
                Braintrust or brainstorm I'm all in! 🧠 
                Got a project or just a friendly chat? 
                Feel free to reach out! 📩
              `}
              </p>
              <p className="text-white mt-3 text-justify">{prof.bio}</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                {prof.location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
