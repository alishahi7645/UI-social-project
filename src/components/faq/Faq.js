import React, { useState , useEffect} from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { questions } from "./data";
import "./Faq.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Faq() {
  useEffect(()=>{
    AOS.init({
      duration:1000
    });
  },[])
  const [showAnswer, setShowAnswer] = useState(false);
  const toggleanswer = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <section id="faq">
      <div className="container faq">
        <div className="faq-title" data-aos="fade-up">
          <MdOutlineLibraryBooks color="orangered" size={25} />
          <h2>سوالات متداول</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ . با
            استافاده از
          </p>
        </div>
        <div className="questions">
          {questions.map((question) => {
            return (
              <div className="container question" key={question.id}>
                <div className="question-title">
                  <h3>{question.title}</h3>
                  <button onClick={() => setShowAnswer(!showAnswer)}>
                    {showAnswer ? <AiOutlineMinus color="#1f93ff" /> : <AiOutlinePlus color="#1f93ff" />}
                  </button>
                </div>
                <div className="question-answer">
                  {showAnswer && <p>{question.answe}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
