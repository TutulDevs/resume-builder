import { useEffect, useState } from "react";
import Layout from "./components/layout/Layout";
import useViewport from "./hooks/useViewport";
import Modal from "./components/UI/Modal";
import Form from "./components/Form.js/Form";
import { Page, Text, View, Document } from "@react-pdf/renderer";

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

  console.log(resumeData);

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

  return (
    <>
      {showModal && (
        <Modal onClick={hideModalHandler}>
          {lessViewportContent || "no data"}
        </Modal>
      )}

      <Layout>
        <h1>Width: {width}px</h1>
        <Form onSubmitForm={submitFormHandler} />

        <button
          onClick={showModalHandler}
          className='border p-2 my-4 bg-indigo-300'>
          Modal
        </button>

        <section id='section'></section>
      </Layout>
    </>
  );
}

export default App;
