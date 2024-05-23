import React from "react";
import background from "../images/loginbgnew.png";
import user from "../images/small.png";
import {useNavigate} from "react-router-dom";
const HomePage =
    () => {
        const navigate = useNavigate()
        return (
            <>
                <div>
                    <section>
                        <div
                            className="main"
                            style={{
                                backgroundImage: `url(${background})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "100%",
                                minHeight: "100vh",
                                display: "flex",
                                justifyContent: "center",
                                overflow: "hidden",
                                // alignItems: "center",
                            }}
                        >
                            <div className="mt-lg-4 w-100 ">
                                <div className="w-100 mt-lg-5 pt-5 h-100 ">
                                    <div className="px-4 px-md-5  my-2 m-md-0 w-100 h-100">
                                        <div className="box my-5 m-md-0 bg-light p-md-5 p-3  d-flex align-items-center">
                                            <div className="row m-0 align-items-center w-100">
                                                <div className="col-md-6 order-md-1 order-2">
                                                    {" "}
                                                    <div className="details">
                                                        Apply For Provisional Permission for New Rice
                                                        Mill
                                                        <button className="Sidebutton my-2 m-md-2 m-0  d-block d-md-inline-block">
                                                            VIEW INSTRUCTIONS
                                                        </button>
                                                    </div>
                                                    <div className="details">
                                                        Fixation/Enhancement of Capacity of Rice Mill
                                                        <button className=" ms-2 Sidebutton my-2 m-md-2 m-0 d-block d-md-inline-block">
                                                            VIEW INSTRUCTIONS
                                                        </button>
                                                    </div>
                                                    <div className="details">
                                                        Final Registration of New Rice Mill
                                                        <button className=" ms-2 Sidebutton my-2 m-md-2 m-0 d-block d-md-inline-block">
                                                            VIEW INSTRUCTIONS
                                                        </button>
                                                    </div>
                                                    <div className="details">
                                                        Change in Constitution of already Registered
                                                        Rice Mill
                                                        <button className=" ms-2 Sidebutton my-2 m-md-2 m-0 d-block d-md-inline-block">
                                                            VIEW INSTRUCTIONS
                                                        </button>
                                                    </div>
                                                    <div className="details">
                                                        Application for Allotment of Rice Mill
                                                        <button className=" ms-2 Sidebutton my-2 m-md-2 m-0 d-block d-md-inline-block">
                                                            VIEW MILLING POLICY
                                                        </button>
                                                    </div>
                                                    <div className="mt-4 d-flex align-items-center">
                                                        <div
                                                            className="me-2"
                                                            style={{ height: "60px", width: "46px" }}
                                                        >
                                                            <img src={user} alt="logo" />
                                                        </div>
                                                        <div>
                                                            <div>
                                                                Helpdesk 24/7 | 9 AM to 7 PM
                                                                <br />
                                                                <div className="color1 ">
                                                                    77430-11156 | 77430-11157 | 77430-11158 |
                                                                    77430-11159
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mt-3 order-md-2 order-1 position-relative">
                                                    <div className="d-flex align-items-center">
                                                        <div className="ak-login-devider d-md-block d-none "></div>
                                                        <div className="ps-md-5 p-0 d-md-flex align-items-center w-100 justify-content-around">
                                                            <div className="text-md-center">
                                                                <h5>If already registered?</h5>
                                                                <button
                                                                    className="btn aqua-back"
                                                                    onClick={() => navigate("/login")}
                                                                >
                                                                    LOGIN
                                                                </button>
                                                            </div>
                                                            <div className="my-4 text-md-center">
                                                                <h5>For New Registration</h5>
                                                                <button
                                                                    className="btn button"
                                                                    onClick={() => navigate("/register")}
                                                                >
                                                                    Registration
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    };
export default HomePage;