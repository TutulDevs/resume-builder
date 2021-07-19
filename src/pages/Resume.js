import './Resume.css';

const Resume = () => {
  return (
    <div id="pdf" className="my-6 mx-4 mx-auto bg-white font-mont shadow-lg">
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
            <a href="https://linkedin.com/in/william-w-kwok">william-w-kwok</a>
          </div>
          <div>
            <a href="https://williamk.info/?q=resexample">williamk.info</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
