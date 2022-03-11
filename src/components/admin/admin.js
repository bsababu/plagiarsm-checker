import './admin.css'
import React from 'react'


class Admin extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='add-header'>
                <button type="button" class="btn btn-outline-info btn-rounded" data-mdb-ripple-color="dark">Add +</button>
                </div>
                <div className='table-table'>
                    <table class="table table-hover"></table>
                </div>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Save the document</h5>
                            <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            
                            

                        <div class="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Name</span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Document name"
                                aria-label="Name"
                                aria-describedby="basic-addon1"
                            />
                            </div>

                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Description</span>
                                <textarea class="form-control" placeholder="Description" aria-label="With textarea"></textarea>
                            </div>

                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Author</span>
                                <input
                                    type="text"
                                    class="form-control"
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
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Admin;