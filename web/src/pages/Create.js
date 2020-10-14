import React, { useState } from 'react';
import CreateExamForm from '@/components/CreateExamForm';
import Question from '@/components/Question';
import Modal from '@/components/Modal';
import connectStore from '@/hoc/connectStore';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Create = ({ questions, actions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
  };

  return (
    <div className="create">
      <CreateExamForm openModal={openModal} />
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

      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />

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
