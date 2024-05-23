import React from "react";
import {Field, Form, Formik} from "formik";
import logo from "../images/header/mobile-logo.jpg";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer, toast} from "react-toastify";
import Header from "../components/Navbar"

function Login() {

    const handleOpenNewTab = () => {
        window.open('/user', '_blank');
    };
    const notify = () => toast.success("Login successfully :smiley:");
    const notifyError = () => toast.error("Invalid Credential");
    const initialValues = {
        phone_number: "",
        password: "",
        vendor_category: "",
    };

    return (
        <>
            <Header />
        <div>
            <ToastContainer/>
            <section
                className="bg-light p-3 p-md-4 p-xl-5  d-flex justify-content-center align-items-center"
                style={{height: "100%", minHeight: "100vh"}}
            >
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-12 mt-4">
                            <div className="card border-light-subtle shadow-sm mt-5">
                                <div className="row g-0 py-4">
                                    <div className="col-12 d-flex align-items-center justify-content-center">
                                        <div className="col-12 col-lg-11 col-xl-10">
                                            <div className="card-body ">
                                                <div className="row ">
                                                    <div className="col-12 text-center">
                                                        <div className="mb-5">
                                                            <div className="d-flex justify-content-center">
                                                                <div className="text-center mb-4 w-25 mt-3">
                                                                    <a href="#">
                                                                        <img
                                                                            src={logo}
                                                                            alt="BootstrapBrain Logo"
                                                                            width={15}
                                                                            height={35}
                                                                        />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <h6 className="text-center text-secondary">
                                                                Most powerful ReactJS admin panel
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Formik
                                                    initialValues={initialValues}
                                                    onSubmit={(values) => {
                                                        axios
                                                            .post(
                                                                "http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/vendor_login",
                                                                values
                                                            )
                                                            .then((response) => {
                                                                console.log(response);
                                                                if (response.data.status === "200") {
                                                                    notify();

                                                                    setTimeout(() => {
                                                                        handleOpenNewTab()
                                                                    }, 1500);
                                                                }
                                                                else {
                                                                   notifyError()
                                                                }
                                                            });
                                                    }}
                                                >
                                                    {({errors, touched, setFieldValue, values}) => (
                                                        <Form>
                                                            <div className="row gy-3 overflow-hidden">
                                                                <div className="col-12">
                                                                    <div className="form-floating mb-3">
                                                                        <Field
                                                                            type="phone_number"
                                                                            className="form-control"
                                                                            name="phone_number"
                                                                            id="phone_number"
                                                                            placeholder="name@example.com"
                                                                            required
                                                                        />
                                                                        <label className="form-label">
                                                                            Phone Number
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="form-floating mb-3">
                                                                        <Field
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="password"
                                                                            id="password"
                                                                            placeholder="name@example.com"
                                                                            required
                                                                        />
                                                                        <label className="form-label">
                                                                            Password
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div
                                                                        className="d-lg-flex d-unset align-items-center fw-bold mb-4">
                                                                        <div className=" col-lg-3 col-12 ">
                                                                            <div className="form-check">
                                                                                <Field
                                                                                    className="form-check-input "
                                                                                    type="radio"
                                                                                    name="vendor_category"
                                                                                    id="flexRadioDefault2"
                                                                                    value={"miller"}
                                                                                />
                                                                                <label
                                                                                    className="form-check-label "
                                                                                    htmlFor="flexRadioDefault2"
                                                                                >
                                                                                    Miller
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3 col-12">
                                                                            <div className="form-check">
                                                                                <Field
                                                                                    className="form-check-input"
                                                                                    type="radio"
                                                                                    name="vendor_category"
                                                                                    value="Distributor"
                                                                                    id="flexRadioDefault3"
                                                                                />
                                                                                <label
                                                                                    className="form-check-label"
                                                                                    htmlFor="flexRadioDefault3"
                                                                                >
                                                                                    Distributor
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className=" col-lg-3 col-12">
                                                                            <div className="form-check">
                                                                                <Field
                                                                                    className="form-check-input"
                                                                                    type="radio"
                                                                                    value={"Miller & Distributor"}
                                                                                    name="vendor_category"
                                                                                    id="flexRadioDefault4"
                                                                                />
                                                                                <label
                                                                                    className="form-check-label text-nowrap"
                                                                                    htmlFor="flexRadioDefault4"
                                                                                >
                                                                                    Miller & Distributor
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="form-check">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultValue
                                                                            name="remember_me"
                                                                            id="remember_me"
                                                                        />
                                                                        <label
                                                                            className="form-check-label text-secondary"
                                                                            htmlFor="remember_me"
                                                                        >
                                                                            Keep me logged in
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 mb-5">
                                                                    <div className="d-grid">
                                                                        <button
                                                                            style={{padding: "12px 0"}}
                                                                            className="btn btn-dark"
                                                                            type="submit"
                                                                        >
                                                                            Sign In
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </Form>
                                                    )}
                                                </Formik>
                                                <form action="#!">
                                                    <div className="row gy-3 overflow-hidden"></div>
                                                </form>
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
}

export default Login;