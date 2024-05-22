import React from "react";

function Users() {
    return (
        <div className="container p-5">
            <h2 className="text-center">Users</h2>
            <table id="mytable" className="table table-bordred table-striped">
                <thead>
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
                <tr>
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
                                className="btn btn-primary btn-xs"
                                data-title="Edit"
                                data-toggle="modal"
                                data-target="#edit"
                            >
                                <span className="glyphicon glyphicon-pencil" />
                            </button>
                        </p>
                    </td>
                    <td>
                        <p data-placement="top" data-toggle="tooltip" title="Delete">
                            <button
                                className="btn btn-danger btn-xs"
                                data-title="Delete"
                                data-toggle="modal"
                                data-target="#delete"
                            >
                                <span className="glyphicon glyphicon-trash" />
                            </button>
                        </p>
                    </td>
                </tr>
                <tr>
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
                                className="btn btn-primary btn-xs"
                                data-title="Edit"
                                data-toggle="modal"
                                data-target="#edit"
                            >
                                <span className="glyphicon glyphicon-pencil" />
                            </button>
                        </p>
                    </td>
                    <td>
                        <p data-placement="top" data-toggle="tooltip" title="Delete">
                            <button
                                className="btn btn-danger btn-xs"
                                data-title="Delete"
                                data-toggle="modal"
                                data-target="#delete"
                            >
                                <span className="glyphicon glyphicon-trash" />
                            </button>
                        </p>
                    </td>
                </tr>
                <tr>
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
                                className="btn btn-primary btn-xs"
                                data-title="Edit"
                                data-toggle="modal"
                                data-target="#edit"
                            >
                                <span className="glyphicon glyphicon-pencil" />
                            </button>
                        </p>
                    </td>
                    <td>
                        <p data-placement="top" data-toggle="tooltip" title="Delete">
                            <button
                                className="btn btn-danger btn-xs"
                                data-title="Delete"
                                data-toggle="modal"
                                data-target="#delete"
                            >
                                <span className="glyphicon glyphicon-trash" />
                            </button>
                        </p>
                    </td>
                </tr>
                <tr>
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
                                className="btn btn-primary btn-xs"
                                data-title="Edit"
                                data-toggle="modal"
                                data-target="#edit"
                            >
                                <span className="glyphicon glyphicon-pencil" />
                            </button>
                        </p>
                    </td>
                    <td>
                        <p data-placement="top" data-toggle="tooltip" title="Delete">
                            <button
                                className="btn btn-danger btn-xs"
                                data-title="Delete"
                                data-toggle="modal"
                                data-target="#delete"
                            >
                                <span className="glyphicon glyphicon-trash" />
                            </button>
                        </p>
                    </td>
                </tr>
                <tr>
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
                                className="btn btn-primary btn-xs"
                                data-title="Edit"
                                data-toggle="modal"
                                data-target="#edit"
                            >
                                <span className="glyphicon glyphicon-pencil" />
                            </button>
                        </p>
                    </td>
                    <td>
                        <p data-placement="top" data-toggle="tooltip" title="Delete">
                            <button
                                className="btn btn-danger btn-xs"
                                data-title="Delete"
                                data-toggle="modal"
                                data-target="#delete"
                            >
                                <span className="glyphicon glyphicon-trash" />
                            </button>
                        </p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Users;
