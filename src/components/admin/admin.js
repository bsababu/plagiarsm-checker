import React from 'react';
import './admin.css';

class Admin extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='add-header'>
                <button type="button" class="btn btn-outline-info btn-rounded" data-mdb-ripple-color="dark">Add +</button>
                </div>
                <div className='table-table'>
                    <table className="table table-hover">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Option</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>🗑️ | ✏️</td>
                        </tr>
                    </table>
                </div>




                {/* modals */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Save the document</h5>
                            <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            
                            

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Name</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Document name"
                                aria-label="Name"
                                aria-describedby="basic-addon1"
                            />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Description</span>
                                <textarea className="form-control" placeholder="Description" aria-label="With textarea"></textarea>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Author</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Author"
                                    aria-label="author"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div class="input-group mb-3">
                                <input type="file" class="form-control" id="inputGroupFile02" />
                                <label class="input-group-text" for="inputGroupFile02">Upload</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                            <button type="Submit" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Admin;