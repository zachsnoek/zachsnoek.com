import React from "react";
import { ASSETS } from "../utils/api";

const Home = () => {
    return (
        <div className="home row d-flex justify-content-center">
            <div className="col-4 col-lg-3 align-items-center d-none d-md-flex">
                <img
                    src={`${ASSETS}/img/zach-home.jpg`}
                    className="profile-pic"
                    alt="Zach standing."
                />
            </div>
            <div className="col-12 col-md-8 col-lg-7 d-flex align-items-center">
                <div className="ml-md-5">
                    <div className="big-header d-flex justify-content-center justify-content-md-start">
                        <span>Hi, I'm Zach!</span>
                    </div>
                    <p>
                        I'm a software developer based in Bellingham, WA. I
                        currently work for Faithlife Corporation.
                    </p>
                    <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                        <a href="/portfolio">
                            <button className="btn btn-lg btn-primary m-2">
                                View Portfolio
                            </button>
                        </a>
                        <a href="/contact">
                            <button className="btn btn-lg btn-outline-secondary m-2">
                                Get In Touch
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
