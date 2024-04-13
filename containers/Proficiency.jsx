import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";

import { Fade, Reveal } from "react-awesome-reveal";

import GreetingLottie from "../components/DisplayLottie";

const Proficiency = () => {
	return SkillBars && (
		<Container className="section section-lg">
			<Fade bottom duration={2000} >
				<Row>
					<Col lg="6">
						<h1 className="h1">Proficiency</h1>
						{SkillBars.map((skill, index) => {
							return (
								<Reveal key={skill.Stack} cascade duration={1000} damping={0.5} triggerOnce>
									<div className="progress-info">
										<div className="progress-label">
											<span>{skill.Stack}</span>
										</div>
										<div className="progress-percentage">
											<span>{skill.progressPercentage}%</span>
										</div>
										<Progress
											max="100"
											value={skill.progressPercentage}
											color="info"
											role="progressbar"
											aria-label={skill.Stack}
											aria-valuenow={skill.progressPercentage}
											className="progress-bar-animated"
										/>
									</div>
								</Reveal>
							);
						})}
					</Col>
					<Col lg="6">
						<GreetingLottie animationPath="/lottie/build.json" />
					</Col>
				</Row>
			</Fade>
		</Container>
	);
};

export default Proficiency;
