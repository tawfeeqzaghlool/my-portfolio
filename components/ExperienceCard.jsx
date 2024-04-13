import React from "react";
import Image from 'next/image';
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Col,
} from "reactstrap";

import { Fade } from "react-awesome-reveal";

const ExperienceCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade left duration={2000}>
				<Card
					style={{ flex: 1 }}
					className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
				>
					<CardBody className="">
						<Image
							src={data.companylogo}
							alt={data.companylogo}
							width={80}
							height={80}
							className="shadow mb-3 rounded-full experience-card-image" // Apply the new class
							loading="lazy"
							/>
						<CardTitle tag="h4" className="mb-2">
							{data.company}
						</CardTitle>
						<CardSubtitle tag="h5" className="mb-2">
							{data.role}
						</CardSubtitle>
						<CardSubtitle>{data.date}</CardSubtitle>
						<CardText
							tag="div"
							className="description my-3 text-justify"
						>
							<ul>
								{data.desc.map((point, index) => (
									<li key={index}>{point}</li>
								))}
							</ul>
						</CardText>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ExperienceCard;
