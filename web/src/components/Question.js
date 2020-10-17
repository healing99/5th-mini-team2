import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import AnswerInput from './AnswerInput';
import QuestionType from './QuestionType';
import DeleteIcon from '@/assets/images/delete.png';
import connectStore from '@/hoc/connectStore';
import DragDropButton from '@/assets/images/dragDropButton.png';

const Question = ({ idx, question, provided, actions }) => {
  const fileRef = useRef(null);

  const handleFile = ({ target: { files } }) => {
    if (!files.length) return;

    actions.addImage(files[0], idx);
  };

  const imgAttachment = () => {
    if (question.image)
      return <img className="image" src={URL.createObjectURL(question.image)} alt={`question${idx}`} />;

    return (
      <div className="pointer" onClick={() => fileRef.current.click()}>
        <span className="add">+</span>
        <p>이미지를 첨부하세요.</p>
      </div>
    );
  };

  return (
    <div className="question">
      <QuestionType idx={idx} type={question.type} />

      <div className="row">
        <div className="col-8 image-root">
          <div className="h-100 d-flex flex-column">
            <div className="title d-flex">
              <span>문제 {idx + 1}</span>
              <div className="handler" {...provided.dragHandleProps}>
                <img src={DragDropButton} />
              </div>
            </div>
            <div className="attach">
              {imgAttachment()}
              <input accept="image/*" hidden={true} onChange={handleFile} ref={fileRef} type="file" />
              <img className="delete" src={DeleteIcon} onClick={() => actions.removeQuestion(idx)} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <AnswerInput idx={idx} answer={question.answer} numChoices={question.numChoices} type={question.type} />
        </div>
      </div>

      <style jsx global>{`
        .question {
          width: 100%;
          padding: 16px 0px;
        }
        .question .pointer {
          cursor: pointer;
        }
        .image-root {
          height: 400px;
        }
        .question .handler {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .question .title {
          font-weight: 600;
          color: #707070;
          font-size: 18px;
          border: solid 1px #707070;
          border-bottom: none;
          padding: 0px 16px;
          position: relative;
          height: 50px;
          background-color: #fff;
        }
        .question .title span {
          margin: auto 0px;
        }
        .question .attach {
          width: 100%;
          height: 350px;
          background-color: #f2f2f2;
          display: flex;
          align-items: center;
          justify-content: center;
          border: solid 1px #707070;
          color: #707070;
          text-align: center;
        }
        .question .attach .add {
          font-size: 36px;
        }
        .question .attach .delete {
          position: absolute;
          right: 32px;
          bottom: 16px;
          cursor: pointer;
        }
        .question .image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

Question.propTypes = {
  idx: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
};
export default connectStore(Question);
