import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../menu/header';
import LeftNav from '../menu/leftnav';
import axios from 'axios';
import './answer.css';

export default function Answer() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    axios.get(`/api/questions/${id}`)
      .then(response => {
        setQuestion(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    axios.get(`/api/answers/${id}`)
      .then(response => {
        setAnswer(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <Header />
      <LeftNav />
      <div className="something">
        <h1>Answers</h1>
      </div>
      <div className="middle-nav">
        <div className="questions">
          <div className="que">
            <div className="name">{question?.user?.name}</div>
            <div className="q">{question?.title}</div>
            <div className="statement">{question?.description}</div>
            <div className="statement">{question?.expectation}</div>
          </div>
        </div>
      </div>

      <div className="answerit">
        <form>
          <textarea placeholder='Type your answer' name="" id="" cols="30" rows="10"></textarea>
          <input type="submit" />
        </form>
        <div className="answers">
          {/* <div className="ans">
            <div className="name">{answer?.user?.name}</div>
            <div className="statement">{answer?.description}</div>
          </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
}
