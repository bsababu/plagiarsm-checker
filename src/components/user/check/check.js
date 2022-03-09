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
                    <button type="button" class="btn btn-outline-success md" data-mdb-ripple-color="dark">Check</button>
                    <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark">Cancel</button>
                </div>
            </div>
        )
    }
}
