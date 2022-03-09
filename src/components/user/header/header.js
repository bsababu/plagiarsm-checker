import React from "react";
import './header.css';


export class HeaderUp extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {term:''}
   

    render() {
        return (
            <div className="SearchBar">
                <div className="P-title">
                    <h1>Plagiarism checker</h1>
                </div>
                <div className="menu-li-up">
                    <ul>
                        <li>About</li>
                        <li>Contact us</li>
                        <button type="button" className="btn btn-dark" 
                        data-mdb-toggle="modal" data-mdb-target="#exampleModal">Login</button>
                    </ul>
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Use the credentials</h5>
                                <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            
                            <input type="email" id="typeEmail" placeholder="Your Email" className="form-control" />
                            <input type="password" id="typePassword" placeholder="Your password" className="form-control" />
                            
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-outline-dark">Login</button>
                            </div>
                            </div>
                        </div>
                        </div>
            </div>

            
        )
    }
}
