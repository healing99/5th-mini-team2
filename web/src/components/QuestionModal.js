import React from 'react';
import connectStore from '@/hoc/connectStore';

const QuestionModal = ({ modals: { question }, actions }) => {
  if (!question.open) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-form">
        <div className="modal-form-title">링크생성이 완료되었습니다!</div>
        <div className="modal-form-content">
          <div className="modal-form-content__link">
            <input type="text" readOnly value={question.url} className="modal-form-content__link-input" />
            <button className="modal-form-content__link-btn">X</button>
          </div>
          <button className="modal-form-content__copybtn" onClick={() => actions.closeQuestionModal()}>
            복사
          </button>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.3);
        }
        .modal-form {
          position: fixed;
          top: 50%;
          left: 50%;
          width: 40%;
          transform: translate(-50%, -50%);
          border-radius: 20px;
          background-color: white;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
          padding: 42px 49px;
        }
        .modal-form-title {
          font-size: 22px;
          font-weight: bold;
          color: rgb(96, 96, 96);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-form-content {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 16px;
        }
        .modal-form-content__link {
          position: relative;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-form-content__link-input {
          width: 100%;
          height: 42px;
        }
        .modal-form-content__link-btn {
          background: none;
          outline: none;
          border: none;
          position: absolute;
          right: 5px;
        }
        .modal-form-content__copybtn {
          margin-left: 14px;
          color: #6c6c6c;
          border: solid 1px #707070;
          box-shadow: none;
          height: 42px;
          background-color: white;
        }
      `}</style>
    </div>
  );
};
export default connectStore(QuestionModal);
