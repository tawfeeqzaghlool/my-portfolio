import React, { useEffect, useState } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
import GreetingLottie from "../components/DisplayLottie";
import { useTypingEffect } from "../hook/useTypingEffect";

const Greetings = () => {
  const [displaySocialLinks, setDisplaySocialLinks] = useState(false);

  // Use the useTypingEffect hook to simulate typing effect
  const typedText = useTypingEffect(greetings.description, 30);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDisplaySocialLinks(true);
    }, greetings.description.length * 30 + 3000);
  }, []);
  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <motion.h1
                    className="display-3 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {greetings.title + " "}
                  </motion.h1>
                  <motion.p className="lead text-white text-justify">
                    {typedText}
                  </motion.p>
                  {displaySocialLinks && (
                    <motion.div
                      className="fade-in"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2 }}
                    >
                      <SocialLinks />
                      <div className="btn-wrapper my-4">
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href={greetings.resumeLink}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-file" />
                          </span>
                          <span className="btn-inner--text">
                            View My Resume
                          </span>
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </Col>
                <Col lg="6">
                  <motion.div
                    style={{ width: "100%" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <GreetingLottie animationPath="/lottie/greeting.json" />
                  </motion.div>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Greetings;
