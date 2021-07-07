import Layout from "./components/layout/Layout";
import useViewport from "./hooks/useViewport";
import Modal from "./components/UI/Modal";
import { useEffect, useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
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

  return (
    <>
      {showModal && (
        <Modal onClick={hideModalHandler}>
          {lessViewportContent || "Modal"}
        </Modal>
      )}

      <Layout>
        <h1>Width: {width}px</h1>

        <button onClick={showModalHandler} className='border p-2 bg-indigo-300'>
          Modal
        </button>
      </Layout>
    </>
  );
}

export default App;
