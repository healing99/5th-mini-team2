import React, { useState } from 'react';
import CreateExamForm from '@/components/CreateExamForm';
import Question from '@/components/Question';
import QuestionModal from '@/components/QuestionModal';
import connectStore from '@/hoc/connectStore';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Create = ({ questions, actions }) => {
  const [info, setInfo] = useState({
    className: '',
    examName: '',
    limitTime: '',
  });

  const onDragEnd = (result) => {
    // 리스트 밖으로 드랍한 경우
    if (!result.destination) {
      return;
    }

    actions.reorderQuestion(result.source.index, result.destination.index);
  };

  //Draggable 추가
  const questionList = () => {
    return questions.map((question, idx) => (
      <Draggable key={question.id} draggableId={question.id} index={idx}>
        {(provided, snapshot) => (
          <div>
            <div ref={provided.innerRef} {...provided.draggableProps}>
              <Question idx={idx} key={question.id} question={question} provided={provided} />
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    ));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { className, examName, limitTime } = info;
    if (!className || !examName || !limitTime) {
      alert('시험지 정보를 입력해주세요.');
      return;
    }

    let flagQuestion = false;
    Object.entries(questions).forEach(([_, question]) => {
      const { image, answer } = question;
      if (!image || !answer.length) flagQuestion = true;
    });
    if (flagQuestion) {
      alert('잘못된 질문 형식입니다.');
      return;
    }

    actions.createExam(info, questions);
  };

  const handleInfo = (id, value) => {
    setInfo({
      ...info,
      [id]: value,
    });
  };

  return (
    <div className="create">
      <CreateExamForm handleChange={handleInfo} info={info} handleSubmit={handleSubmit} />
      <div className="pad" />

      <main className="container">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => <div ref={provided.innerRef}>{questionList()}</div>}
          </Droppable>
        </DragDropContext>
        <div className="add-button">
          <button onClick={() => actions.addQuestion()} type="button" className="btn btn-outline-primary rounded-pill">
            + 문제 추가
          </button>
        </div>
      </main>

      <QuestionModal />

      <style jsx global>{`
        .create {
          min-height: 100vh;
        }
        .create .container {
          padding-bottom: 64px;
        }
        .create .pad {
          padding-top: 64px;
        }
        .create .add-button {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default connectStore(Create);
