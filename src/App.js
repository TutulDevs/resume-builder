//import React, { useState } from "react";
import './App.css';

function App() {
  //const [resumeData, setResumeData] = useState(null);
  // const submitFormHandler = (data) => setResumeData(data);
  // console.log(resumeData);

  // url setup for puppeteer
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const resumeOnlyMode = params.get('resumeonly');

  console.log(params);
  console.log(resumeOnlyMode);

  return (
    <div className="App">
      {!resumeOnlyMode && <div id="other-body-stuff">Hi stuff goes here</div>}

      <div id="pdf" className="mx-auto my-6">
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
