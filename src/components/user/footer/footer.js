import React from "react";
import './footer.css'

export class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="footer-content">
                    <h3>Plagiarism Checker</h3>
                    <p>This tool is used to check for the plagiarism that
                    is in your document, before you submit them</p>
                </div>
                <div className="footer-bottom"> </div>

            </footer>
        )
    }
}

