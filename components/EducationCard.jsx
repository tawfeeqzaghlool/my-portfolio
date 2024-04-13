import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-awesome-reveal";

const EducationCard = ({ education }) => {
	return (
		<Fade left duration={2000} >
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">
								{education.schoolName}
							</h5>
								<h6>{education.subHeader}</h6>
							<Badge color="info" className="mr-1">
								{education.duration}
							</Badge>
							<p className="description mt-3">{education.desc}</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default EducationCard;
