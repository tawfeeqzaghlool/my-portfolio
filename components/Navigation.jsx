import React, { useState, useEffect } from "react";
import Headroom from "headroom.js";
import Link from "next/link";
import { motion } from "framer-motion";
import { greetings, socialLinks } from "../portfolio";
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
    Row,
    Col,
} from "reactstrap";

const Navigation = () => {
    const [collapseClasses, setCollapseClasses] = useState("");
    const onExiting = () => setCollapseClasses("collapsing-out");
    const onExited = () => setCollapseClasses("");

     useEffect(() => {
		let headroom = new Headroom(document.getElementById("navbar-main"));
		// initialise
		headroom.init();
	});
    return (
        <>
            <header className="header-global">
                <Navbar
                    className="navbar-main navbar-transparent navbar-light headroom"
                    expand="lg"
                    id="navbar-main"
                >
                    <Container>
                        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }}>
                            <NavbarBrand href="/" className="mr-lg-5">
                                <h2 className="text-white" id="nav-title">
                                    {greetings.name}
                                </h2>
                            </NavbarBrand>
                        </motion.div>
                        <button
                            className="navbar-toggler"
                            aria-label="navbar_toggle"
                            id="navbar_global"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <UncontrolledCollapse
                            toggler="#navbar_global"
                            navbar
                            className={collapseClasses}
                            onExiting={onExiting}
                            onExited={onExited}
                        >
                            <motion.div initial={{ opacity: 0, x: "-100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "-100%" }}>
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                            <h3 className="text-black" id="nav-title">
                                                {greetings.name}
                                            </h3>
                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button
                                                className="navbar-toggler"
                                                id="navbar_global"
                                                aria-label="Close menu"
                                            >
                                                <span />
                                                <span />
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                            </motion.div>
                            <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                {socialLinks.github && (
                                <motion.div whileHover={{ scale: 1.1 }}> {/* Wrap social link elements */}
                                    <NavItem>
                                    <Link
                                        rel="noopener"
                                        aria-label="Github"
                                        className="nav-link-icon"
                                        href={socialLinks.github}
                                        target="_blank"
                                    >
                                        <i className="fa fa-github" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">Github</span>
                                    </Link>
                                    </NavItem>
                                </motion.div>
                                )}

                                {socialLinks.linkedin && (
                                <motion.div whileHover={{ scale: 1.1 }}> {/* Wrap social link elements */}
                                    <NavItem>
                                    <Link
                                        rel="noopener"
                                        aria-label="Linkedin"
                                        className="nav-link-icon"
                                        href={socialLinks.linkedin}
                                        target="_blank"
                                    >
                                        <i className="fa fa-linkedin" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">Linkedin</span>
                                    </Link>
                                    </NavItem>
                                </motion.div>
                                )}

                            </Nav>
                        </UncontrolledCollapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Navigation;
