import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Form from './components/Form.js/Form';
import Resume from './pages/Resume';
import axios from 'axios';

function App() {
  const [resumeData, setResumeData] = useState(null);

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
        link.download = `MyResume.pdf`;
        link.click();
        console.log('ready');
      });
  };

  const submitFormHandler = (data) => {
    setResumeData(data);
    savePDF();
  };

  console.log(resumeData);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Form onSubmitForm={submitFormHandler} />
        </Route>

        <Route path="/resume" component={Resume} />
      </Switch>
    </Layout>
  );
}

export default App;
