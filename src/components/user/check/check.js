import React from "react";
import './check.css'


export const Check = (props) => {

    const saveChanges = (e) => {
        e.preventDefault();
        //.......
    }

    return (
        <div className="middle">
            <form onSubmit={saveChanges}>
                <div id="check-first">
                    <label className="form-label" for="customFile">Upload the PDf file to check</label>
                    <input type="file" className="form-control" id="customFile" />
                </div>
                <h5>Or paste below the contents to check for the plagiarism</h5>
                <textarea cols="100" rows="22"></textarea>
                <div className="check-buttons">
                    <button type="button" className="btn btn-outline-success md" data-mdb-toggle="modal" data-mdb-target="#exampleModal2" data-mdb-ripple-color="dark">Check</button>
                    <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark">Cancel</button>
                </div>



                <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Result</h5>
                            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Checking: 40%, Your document contains the same contents we have on our repo</p><br/>
                            <p>Checking: 20%, Go ahead and Submit the document</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

