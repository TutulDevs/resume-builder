import React, { useEffect, useState } from "react";
import Layout from "./components/layout/Layout";
import useViewport from "./hooks/useViewport";
import Modal from "./components/UI/Modal";
import Form from "./components/Form.js/Form";
import PDF from "react-to-pdf";

const ref = React.createRef();

function App() {
  const [showModal, setShowModal] = useState(false);
  const [resumeData, setResumeData] = useState(null);
  const width = useViewport();

  const showModalHandler = () => setShowModal(true);
  const hideModalHandler = () => setShowModal(false);

  const lessViewportContent =
    width < 640 ? (
      <h1 className='text-center text-xl mt-2'>
        Too small viewport! <br /> {"<=640px"}{" "}
      </h1>
    ) : null;

  useEffect(() => {
    if (width < 640) {
      setShowModal(true);
    }

    return () => setShowModal(false);
  }, [width]);

  const submitFormHandler = (data) => setResumeData(data);

  const options = {
    orientation: "portrait",
    unit: "in",
    format: [11.7, 8.3],
  };

  let resumeContent = <h1>No Content</h1>;
  if (resumeData)
    resumeContent = (
      <div ref={ref} className='border border-green-500 p-1'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>{resumeData.fullName}</h1>
          <h2 className='text-xl'>{resumeData.jobTitle}</h2>
          <a href='www.google.com' className='text-blue-500 hover:underline'>
            Google
          </a>
        </div>
      </div>
    );

  return (
    <>
      {showModal && (
        <Modal onClick={hideModalHandler}>
          {lessViewportContent || resumeContent}
        </Modal>
      )}

      <Layout>
        <h1>Width: {width}px</h1>

        <Form onSubmitForm={submitFormHandler} />

        {resumeData && (
          <PDF
            targetRef={ref}
            filename={`${resumeData.fullName.split(" ").join("")}_Resume.pdf`}
            options={options}>
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className='p-2 text-white bg-indigo-400 block'>
                Gimme My Resume
              </button>
            )}
          </PDF>
        )}

        <button
          onClick={showModalHandler}
          className='border p-2 my-4 bg-indigo-300'>
          Modal
        </button>
      </Layout>

      <div className='my-2 border border-red-500'>{resumeContent}</div>
    </>
  );
}

export default App;

/*

import { Page, Text, View, Document } from "@react-pdf/renderer";

  const MyResume = (data = resumeData) => {
    <Document>
      <Page>
        <View>
          <Text>{data.fullName}</Text>
          <Text>{data.jobTitle}</Text>
        </View>
      </Page>
    </Document>;
  };

  const Test = () => (
    <Document>
      <Page>
        <View>
          <Text>Full Name</Text>
          <Text>Job Title</Text>
        </View>
      </Page>
    </Document>
  );

*/
