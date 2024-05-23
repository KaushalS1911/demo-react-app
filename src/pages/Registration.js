import React, {useState} from "react";
import RegistrationForm from "./RegistrationForm";
const Registration = () => {
    const [selectedVendor, setSelectedVendor] = useState();
    const handleChange = (e) => {
        setSelectedVendor(e.target.value);
    };
    return (
        <>
            <div className="">
                <div className="background">
                    <div className="p-5 mt-5 pb-0 my-4">
                        <div className="d-md-flex d-unset align-items-center fw-bold mt-5">
                            <div className="col-xl-1 col-md-2 col-12">
                                <div className="form-check">
                                    <input
                                        className="form-check-input "
                                        type="radio"
                                        name="miller"
                                        id="flexRadioDefault2"
                                        value={"miller"}
                                        onChange={handleChange}
                                    />
                                    <label
                                        className="form-check-label "
                                        htmlFor="flexRadioDefault2"
                                    >
                                        Miller
                                    </label>
                                </div>
                            </div>
                            <div className="col-xl-1 col-md-2 col-12">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="miller"
                                        value="Distributor"
                                        onChange={handleChange}
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
                            <div className="col-xl-2 col-md-4 col-12">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        onChange={handleChange}
                                        value={"Miller & Distributor"}
                                        name="miller"
                                        id="flexRadioDefault4"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexRadioDefault4"
                                    >
                                        Miller & Distributor
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="my-4 colorBlue rounded d-inline-block p-2">
                            Online application for obtaining Provisional Permission for
                            establishment for new rice mill/Final Registrations of New Mill in
                            Punjab.
                        </div>
                        <div className="mb-4 d-sm-flex col-xl-6 col-12 align-items-center justify-content-between">
                            {/* <div className="text-center mt-4 mt-md-0">
                <button className="btn button">SUBMIT</button>
              </div> */}
                        </div>
                    </div>
                    <div className="p-sm-5 py-sm-2 p-3">
                        {selectedVendor && (
                            <RegistrationForm vendor_category={selectedVendor}/>
                        )}
                        <div className="text-danger fs-11 mt-4">
                            You can only verify a Mobile number you own. You must be able to
                            receive a SMS to the Mobile number you are trying to verify.
                        </div>
                    </div>
                    0
                </div>
            </div>
        </>
    );
};
export default Registration;