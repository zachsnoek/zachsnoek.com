import React from "react";
import { Link } from "react-router-dom";
import { ASSETS } from "utils/api";
import "./styles.scss";
import { Row, Col, Button } from "components/shared";

const Home = () => {
    return (
        <Row className="home center-contents">
            <Col xs={4} lg={3} className="d-none d-md-flex align-items-center">
                <img
                    src={`${ASSETS}/img/zach-home.jpg`}
                    className="profile-pic"
                    alt="Zach standing."
                />
            </Col>
            <Col xs={12} md={8} lg={7} className="center-contents">
                <div className="ml-md-5">
                    <div className="big-header center-contents justify-content-md-start">
                        <span>Hi, I'm Zach!</span>
                    </div>
                    <p>
                        I'm a software developer based in Bellingham, WA. I
                        currently work for Faithlife Corporation.
                    </p>
                    <div className="center-contents flex-wrap justify-content-md-start">
                        <Link to="/portfolio">
                            <Button size="lg" className="m-2">
                                View Portfolio
                            </Button>
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
