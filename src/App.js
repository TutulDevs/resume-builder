//import React, { useState } from "react";
import axios from 'axios';
import './App.css';

function App() {
  //const [resumeData, setResumeData] = useState(null);
  // const submitFormHandler = (data) => setResumeData(data);
  // console.log(resumeData);

  const getPDF = () => {
    return axios.get(`http://localhost:3000`, {
      responseType: 'arraybuffer',
      headers: {
        Accept: 'application/pdf',
      },
    });
  };

  const savePDF = () => {
    console.log('loading');
    return getPDF() // API call
      .then((response) => {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `your-file-name.pdf`;
        link.click();
        console.log('ready');
      });
  };

  return (
    <div className="App">
      {/* {!resumeOnlyMode && <div id="other-body-stuff">Hi stuff goes here</div>} */}

      <div id="pdf" className="my-6 mx-4 mx-auto bg-white font-mont">
        <button onClick={savePDF} className=" m-2 p-4 bg-green-300">
          Download
        </button>

        <div id="header">
          <div id="header-left">
            <div>
              <a href="mailto:email@email.com">email@email.com</a>
            </div>
            <div>
              <a href="tel:555-555-1234">(555) 555 - 1234</a>
            </div>
          </div>
          <div id="header-middle">
            <p>William Kwok</p>
          </div>
          <div id="header-right">
            <div>
              <a href="https://github.com/kwokwilliam">kwokwilliam</a>
            </div>
            <div>
              <a href="https://linkedin.com/in/william-w-kwok">
                william-w-kwok
              </a>
            </div>
            <div>
              <a href="https://williamk.info/?q=resexample">williamk.info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*

import Layout from "./components/layout/Layout";
import Form from "./components/Form.js/Form";

<Layout>
      <Form onSubmitForm={submitFormHandler} />
    </Layout>

*/

/*
React pdf managers
 * react-pdf
 * pdfkit
 * react-to-pdf
 * puppeteer
 */
