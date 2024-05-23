import React from 'react'
import img from "../images/header/main-logo.jpg";
import header2 from "../images/header/header2.jpeg"
import header3 from "../images/header/header3.png"
import mobileLogo from "../images/header/mobile-logo.jpg"

const Header = () => {

    return (
        <div className="w-100 d-flex justify-content-between align-items-center py-2 bg-white px-lg-0 px-3 position-fixed z-3">
            <div className="px-2 d-lg-block d-none">
                <img
                    src={img}
                    style={{ height: "100px" }}
                    alt="logo"
                    className="img-fluid"
                />
            </div>
            <div>
                <img
                    src={mobileLogo}
                    alt="mobileLogo"
                    className="img-fluid d-lg-none d-block"
                    style={{height:"80px"}}
                />
            </div>
            <div className="ms-2 fw-bold text-wrap d-lg-flex justify-content-between align-items-center d-none">
                <div>
                    <img
                        src={header2}
                        style={{ height: "75px", width: "300px" }}
                        alt="header2"
                        className="img-fluid"
                    />
                </div>
                <div>
                    <img
                        src={header3}
                        style={{ height: "75px", width: "400px" }}
                        alt="header3"
                        className="img-fluid mx-4"
                    />
                </div>
                <div> <button
                    className="btn aqua-back me-3"
                    // onClick={() => navigate("/login")}
                >
                    LOG OUT
                </button></div>
            </div>

            <div className="d-lg-none d-block">
                <i className="fa-solid fa-bars" style={{ fontSize: "30px" }}></i>
            </div>

        </div>
    );
}
export default Header