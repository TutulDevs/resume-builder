import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className="bg-gray-50 w-full min-h-screen font-mont">
      <Header />

      <main className="w-11/12 min-h-83 mx-auto">{props.children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
