import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-header">
      <div className="w-11/12 min-h-10 mx-auto text-white flex justify-between items-center">
        <h1 className="font-bold text-2xl md:text-3xl">
          <Link to="/" className="text-white text-3xl">
            Resume
          </Link>
        </h1>

        <Link to="/resume" className="text-white">
          Page
        </Link>
      </div>
    </header>
  );
};

export default Header;

// add Link from router for not reloading
