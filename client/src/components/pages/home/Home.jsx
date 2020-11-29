import React from "react";
import { Link } from "react-router-dom";
import { ASSETS } from "utils/api";
import { Row, Col, Button } from "components/shared";

import "./styles.scss";

const Home = () => {
    return (
        <Row className="home center-contents">
            <Col
                xs={4}
                lg={3}
                className="d-md-flex align-items-center profile-pic-container"
            >
                <img
                    src={`${ASSETS}/img/zach-home-circle.png`}
                    className="profile-pic"
                    alt="Zach standing."
                />
            </Col>
            <Col xs={12} md={8} lg={7} className="center-contents">
                <div className="ml-md-5">
                    <div className="big-header center-contents justify-content-md-start">
                        <span>Hi, I'm Zach!</span>
                    </div>
                    <p className="text-center text-md-left">
                        I'm a software developer based in Bellingham, WA. I
                        currently work for Faithlife Corporation.
                    </p>
                    <div className="center-contents flex-wrap justify-content-md-start">
                        <Link to="/portfolio">
                            <Button size="lg">View Portfolio</Button>
                        </Link>
                        <Link to="/contact">
                            <Button
                                size="lg"
                                variant="outline-secondary"
                                className="m-2"
                            >
                                Get In Touch
                            </Button>
                        </Link>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Home;
