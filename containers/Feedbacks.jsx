import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import { Fade } from "react-awesome-reveal";
import { feedbacks } from "../portfolio";

const Feedbacks = () => {
  return feedbacks && (
    <section className="section section-lg">
      <Container>
        <div className="d-flex p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="fa fa-star text-info" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info">My Projects reviews</h4>
          </div>
        </div>
        <Row className="row-grid align-items-center">
          {feedbacks.map((data, index) => (
            <Col key={index} lg={6}>
              {/* Wrap FeedbackCard with Fade */}
              <Fade triggerOnce={true} delay={index * 100}>
                <FeedbackCard data={data} />
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Feedbacks;
