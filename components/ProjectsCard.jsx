import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Button, Col, Card, CardBody, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

const ProjectsCard = ({ data }) => {
  const [flippedCardId, setFlippedCardId] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const handleClick = (cardId) => {
    setFlippedCardId(flippedCardId === cardId ? null : cardId);
  };

  const toggleVideoModal = () => {
    setVideoModalOpen(!videoModalOpen);
  };

  const toggleImageModal = () => {
    setImageModalOpen(!imageModalOpen);
  };

  return (
    <Col lg="6">
      <Fade bottom duration={2000}>
        <ReactCardFlip isFlipped={flippedCardId === data.id} flipDirection="horizontal">
          {/* Front Side */}
          <Card
            className={`shadow-lg--hover shadow mt-4 card-container`}
            onClick={() => handleClick(data.id)}
            title="Click for details"
          >
            <CardBody>
              <div className="d-flex px-3">
                <div className="pl-4">
                  <h3>{data.name}</h3>
                  <p className="description mt-3">{data.desc}</p>
                  <p className="mt-3" onClick={() => handleClick(data.id)} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>Learn More</p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Back Side */}
          <Card
            className={`shadow-lg--hover shadow mt-4 card-container`}
            onClick={() => handleClick(data.id)}
          >
            <CardBody>
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  {data.video && (
                    <div className="mb-3 modal-cursor">
                      <video
                        width="100%"
                        height="auto"
                        controls
                        onClick={toggleVideoModal}
                        sizes="(max-width: 768px) 100vw, (max-width: 991px) 60vw, 440px"
                      >
                        <source src={data.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  {data.photo && (
                    <div className="mb-3 modal-cursor" onClick={toggleImageModal}>
                      <Image
                        src={data.photo}
                        alt={data.name}
                        width={440}
                        height={200}
                        unoptimized={false}
                        loading="lazy"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  )}
                </div>
                <div className="text-center">
                  {data.link && (
                    <Button
                      className="btn-icon justify-content-end"
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={data.linkLabel || 'Project Link'}
                    >
                      <span className="btn-inner--text">{data.linkLabel || 'Project Link'}</span>
                    </Button>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        </ReactCardFlip>
      </Fade>

      {/* Video Modal */}
      <Modal isOpen={videoModalOpen} toggle={toggleVideoModal} size="lg">
        <ModalHeader className="text-center" toggle={toggleVideoModal}>{data.name}</ModalHeader>
        <ModalBody className="text-center">
          {data.video && (
            <video
              width="90%"
              height="auto"
              controls
              src={data.video}
              type="video/mp4"
              sizes="(max-width: 768px) 100vw, (max-width: 991px) 60vw, 440px"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </ModalBody>
      </Modal>

      {/* Image Modal */}
      <Modal isOpen={imageModalOpen} toggle={toggleImageModal} size="lg">
        <ModalHeader toggle={toggleImageModal}>{data.name}</ModalHeader>
        <ModalBody className="text-center">
          {data.photo && (
            <Image
              src={data.photo}
              alt={data.name}
              width="600"
              height="500"
              unoptimized={false}
              loading="lazy"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              style={{
                width: '90%',
                height: 'auto',
              }}
            />
          )}
        </ModalBody>
      </Modal>
    </Col>
  );
};

export default ProjectsCard;
