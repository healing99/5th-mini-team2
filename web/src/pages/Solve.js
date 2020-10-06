import React, { useState } from 'react';
import ExamInfo from '@/components/ExamInfo';
import ExamRemaining from '@/components/ExamRemaining';
import ExamImage from '@/components/ExamImage';
import OMR from '@/components/OMR';
import connectStore from '@/hoc/connectStore';
import OMRModal from '@/components/OMRModal';

const Solve = ({ exam }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="solve">
      <ExamInfo info={exam.info} />
      <main className="container">
        <div className="row">
          <div className="col-9 remain-root">
            <ExamRemaining current={12} remain={6} />
          </div>
        </div>
        <div className="row question-input">
          <div className="col-9 question-img">
            <ExamImage />
          </div>
          <div className="col-3 omr">
            <OMR exam={exam} openModal={openModal} />
          </div>
        </div>
        <div className="row button-wrapper">
          <div className="col-9">
            <button type="button" className="btn btn-outline-primary rounded-pill">
              이전
            </button>
            <button type="button" className="btn btn-primary rounded-pill">
              다음
            </button>
          </div>
          <div style={{ margin: 0, paddingLeft: 0 }} className="col">
            <button style={{ margin: 0 }} type="button" className="btn btn-primary rounded-pill btn-block">
              답안지 전송
            </button>
          </div>
        </div>
      </main>

      <OMRModal isModalOpen={isModalOpen} closeModal={closeModal} />

      <style jsx global>{`
        .solve {
          height: 100vh;
        }
        .solve .omr {
          height: 100%;
        }
        .solve main {
          height: calc(100% - 70px);
          display: flex;
          flex-direction: column;
          padding-top: 48px;
        }
        .solve .question-input {
          flex: 1;
          padding: 16px 0px;
          min-height: 0;
        }
        .solve .button-wrapper {
          text-align: center;
          padding: 16px 0px 62px 0px;
        }
        .solve .button-wrapper * {
          margin: 0px 8px;
        }
        .solve .remain-root {
          display: flex;
          justify-content: flex-end;
          padding: 0;
        }
        .solve .question-img {
          border: solid 1px #707070;
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
};

export default connectStore(Solve);
