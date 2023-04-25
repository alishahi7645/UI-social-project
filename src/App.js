import { useEffect, useState } from 'react';
import {Navbar,Header,Features,Download,Subscribe,Faq,Footer} from './components/index';
import {FaChevronUp} from 'react-icons/fa';
function App() {
  const [showbtn , setShowBtn] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', function(){
      if(this.window.pageYOffset > 400){
        setShowBtn(!showbtn)
      }else{
        setShowBtn(false)
      }
    })
  },[])
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
      <a href="#" className={showbtn ? 'to-top active' : 'to-top'}>
        <FaChevronUp/>
      </a>
    </main>
  );
}

export default App;
