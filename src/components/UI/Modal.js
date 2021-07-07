import ReactDom from "react-dom";

const Overlay = (props) => {
  return (
    <div className='modal fixed inset-0 w-screen h-screen z-20 bg-header bg-opacity-50'>
      <div className='modalContent absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-11/12 max-w-lg min-h-15 bg-white rounded-xl p-4 pb-10'>
        {props.children}

        <button
          onClick={props.onClick}
          className='absolute bottom-2 right-4 border border-red-400 rounded-lg py-0 px-2 focus:ring focus:ring-red-300'>
          Close
        </button>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("modal-overlay");

const Modal = (props) => {
  return ReactDom.createPortal(
    <Overlay onClick={props.onClick}>{props.children}</Overlay>,
    portalElement
  );
};

export default Modal;
