import {Navbar,Header,Features,Download,Subscribe,Faq,Footer} from './components/index';
import {FaChevronUp} from 'react-icons/fa';
function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features />
      <Download />
      <Subscribe />
      <Faq />
      <Footer />
      <a href="#">
        <FaChevronUp/>
      </a>
    </main>
  );
}

export default App;
