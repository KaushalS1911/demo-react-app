import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Field, Form, Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const RegistrationForm = ({ vendor_category }) => {
    const notify = () => toast.success("Registered successfully :smiley:");
    const navigate = useNavigate();
    const initialValues = {
        address: "",
        commodity: "",
        contact_person: "",
        district: "",
        gst_number: "",
        milling_type: "",
        name: "",
        pan_number: "",
        phone_number: "",
        pincode: "",
        quantity: "",
        state: "",
    };
    return (
        <div>
            <ToastContainer />
            <div className="registerForm ">
                <div className="w-100">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            const payload = {
                                ...values,
                                vendor_category,
                                mode: "test",
                            };
                            axios
                                .post(
                                    "http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/channel_sales_partner",
                                    payload
                                )
                                .then((response) => {
                                    notify();
                                    setTimeout(() => {
                                        navigate("/login");
                                    }, 1500);
                                });
                        }}
                    >
                        {({ errors, touched, setFieldValue, values }) => (
                            <Form>
                                <div className="bg-white p-5">
                                    <div className="heading px-3 py-1 mb-3 text-green">
                                        Basic Information
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6 col-12">
                                            {" "}
                                            <div className="form-group my-3">
                                                <label className="form-label">
                                                    Name : <span className="text-danger">*</span>
                                                </label>
                                                <Field
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">
                                                    Milling type :<span className="text-danger">*</span>
                                                </label>
                                                <Field
                                                    as="select"
                                                    name="milling_type"
                                                    className="form-control"
                                                >
                                                    <option value="">---Select Milling Type---</option>
                                                    <option value="dry">Dry</option>
                                                    <option value="wet">Wet</option>
                                                    <option value="both">Both</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">
                                                    Commodity: <span className="text-danger">*</span>
                                                </label>
                                                <Field
                                                    as="select"
                                                    name="commodity"
                                                    className="form-control"
                                                >
                                                    <option value="">---Select Commodity Type---</option>
                                                    <option value="rice">Rice</option>
                                                    <option value="wheat">Wheat</option>
                                                    <option value="oats">oats</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">
                                                    Quantity: <span className="text-danger">*</span>
                                                </label>
                                                <Field
                                                    name="quantity"
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row my-sm-3">
                                        <div className="col-lg-3 col-sm-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">
                                                    Contact Person :{" "}
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <Field
                                                    name="contact_person"
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">
                                                    Phone Number : <span className="text-danger">*</span>
                                                </label>
                                                <Field
                                                    name="phone_number"
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">
                                                    Pan No. : <span className="text-danger">*</span>
                                                </label>
                                                <Field
                                                    name="pan_number"
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">
                                                    GST No. : <span className="text-danger">*</span>
                                                </label>
                                                <Field
                                                    name="gst_number"
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="text-green border-bottom py-3">
                                        Address of Proposed Rice Mill Premises
                                    </h5>
                                    <div className="row mt-2">
                                        <div className="form-group col-12 my-3">
                                            <label className="form-label">
                                                Address <span className="text-danger">*</span>
                                            </label>
                                            <Field
                                                name="address"
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="form-group col-sm-4 mb-3">
                                            <label className="form-label">
                                                District <span className="text-danger">*</span>
                                            </label>
                                            <Field
                                                as="select"
                                                name="district"
                                                className="form-control"
                                            >
                                                <option value="">---Select District---</option>
                                                <option value="bhavnagar">Bhavanagar</option>
                                                <option value="amareli">Amareli</option>
                                            </Field>
                                        </div>
                                        <div className="form-group col-sm-4 mb-3">
                                            <label className="form-label">
                                                State <span className="text-danger">*</span>
                                            </label>
                                            <Field as="select" name="state" className="form-control">
                                                <option value="">---Select District---</option>
                                                <option value="surat">Surat</option>
                                                <option value="ahemdabad">Ahemdabad</option>
                                            </Field>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <label className="form-label">
                                                Pin Code <span className="text-danger">*</span>
                                            </label>
                                            <Field
                                                name="pincode"
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-success mt-3">
                                        SUBMIT
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};
export default RegistrationForm;