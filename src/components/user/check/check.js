import React from "react";
import './check.css'


export class Check extends React.Component {
    render() {
        return (
            <div className="middle">
                <div id="check-first">
                    <label className="form-label" for="customFile">Upload the PDf file to check</label>
                    <input type="file" class="form-control" id="customFile" />
                </div>
                <h5>Or paste below the contents to check for the plagiarism</h5>
                <textarea cols="100" rows="22"></textarea>
                <div className="check-buttons">
                    <button type="button" class="btn btn-outline-success md" data-mdb-toggle="modal" data-mdb-target="#exampleModal2" data-mdb-ripple-color="dark">Check</button>
                    <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark">Cancel</button>
                </div>



                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Result</h5>
                            <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Checking: 40%, Your document contains the same contents we have on our repo</p><br/>
                            <p>Checking: 20%, Go ahead and Submit the document</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
