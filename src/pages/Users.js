import React from "react";
import Header from "../components/Navbar2"
function Users() {
    return (
        <>
            <Header />
        <div className="container p-5">
            <h2 className="text-center mb-5">USERS</h2>
            <div className="table-responsive" >
                <table
                    id="mytable"
                    className="table table-bordered text-center table-striped align-middle table-hover"
                >
                    <thead className="table-light">
                    <tr>
                        <th>
                            <input type="checkbox" id="checkall" />
                        </th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {[...Array(4)].map((_, index) => (
                        <tr key={index}>
                            <td>
                                <input type="checkbox" className="checkthis" />
                            </td>
                            <td>Mohsin</td>
                            <td>Irshad</td>
                            <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                            <td>isometric.mohsin@gmail.com</td>
                            <td>+923335586757</td>
                            <td>
                                <p data-placement="top" data-toggle="tooltip" title="Edit">
                                    <button
                                        className="btn btn-primary btn-sm"
                                        data-title="Edit"
                                        data-toggle="modal"
                                        data-target="#edit"
                                    >
                                        <i className="fas fa-pen-to-square"></i>
                                    </button>
                                </p>
                            </td>
                            <td>
                                <p data-placement="top" data-toggle="tooltip" title="Delete">
                                    <button
                                        className="btn btn-danger btn-sm"
                                        data-title="Delete"
                                        data-toggle="modal"
                                        data-target="#delete"
                                    >
                                        <i className="fas fa-trash-can"></i>
                                    </button>
                                </p>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
            </>
    );
}
export default Users;