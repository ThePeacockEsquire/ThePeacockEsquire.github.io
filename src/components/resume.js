import React, { Component } from 'react';
import './component.css';


class Resume extends Component {
    state = {
        file: './resume.pdf'
    }

  render() {
    const { file } = this.state;
    return (
        <div>
            <object height="950" data={file} type="application/pdf" width="860">
            <p>It appears you don't have a PDF plugin for this browser.
                No biggie... you can <a href="resume.pdf">click here to
                download the PDF file.</a>
            </p>
            </object>
            
        </div>
    );
  }
}

export default Resume;
