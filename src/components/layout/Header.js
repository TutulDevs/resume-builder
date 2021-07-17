const Header = () => {
  return (
    <header className="bg-header">
      <div className="w-11/12 min-h-10 mx-auto text-white flex justify-between items-center">
        <h1 className="font-bold text-2xl md:text-3xl">
          <a href="/">Resume</a>
        </h1>

        <button className="darkMode">DM</button>
      </div>
    </header>
  );
};

export default Header;

// add Link from router for not reloading
