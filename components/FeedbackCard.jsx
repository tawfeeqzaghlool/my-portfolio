import React from "react";
import { Card, CardBody } from "reactstrap";

import { Fade } from "react-awesome-reveal";
import { useTypingEffect } from "../hook/useTypingEffect";

const FeedbackCard = ({ data }) => {
// Use the useTypingEffect hook to simulate typing effect
  const typedText = useTypingEffect(data.feedback, 30);
	return (
		<Fade bottom duration={2000} >
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">{data.name}</h5>
							<p className="description mt-3 text-justify font-italic">
							{typedText}
							</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default FeedbackCard;
