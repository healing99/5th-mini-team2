import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cut } from '@/utils/array';
import { formatAnswer } from '@/utils/format';

const getQuestionCnt = (rowIdx, qIdx) => rowIdx * 4 + qIdx + 1;

const ResultTable = ({ gradedQuestions = [] }) => {
  const tableList = () => {
    const rows = cut(gradedQuestions, 4);

    return rows.map((row, rowIdx) => (
      <tr key={rowIdx}>
        {row.map((question, qIdx) => (
          <React.Fragment key={qIdx}>
            <td className="number">{getQuestionCnt(rowIdx, qIdx)}</td>
            <td>{formatAnswer(question.type, question.answer)}</td>
            <td className={classNames(question.isCorrect ? 'correct' : 'incorrect')}>
              {formatAnswer(question.type, question.correct)}
            </td>
          </React.Fragment>
        ))}
      </tr>
    ));
  };

  return (
    <table className="result-table table table-bordered">
      <thead>
        <tr>
          <th scope="col">NO</th>
          <th scope="col">나의답</th>
          <th scope="col">정답</th>
          <th scope="col">NO</th>
          <th scope="col">나의답</th>
          <th scope="col">정답</th>
          <th scope="col">NO</th>
          <th scope="col">나의답</th>
          <th scope="col">정답</th>
          <th scope="col">NO</th>
          <th scope="col">나의답</th>
          <th scope="col">정답</th>
        </tr>
      </thead>
      <tbody>{tableList()}</tbody>
      <style jsx global>{`
        .result-table {
          text-align: center;
          width: 100%;
          color: #707070;
        }
        .result-table thead th {
          background-color: #f2f2f2;
        }
        .result-table .correct {
          background-color: #d2ebf0;
        }
        .result-table .incorrect {
          background-color: #f7e1e8;
        }
        .result-table .number {
          width: 5%;
          font-weight: bold;
        }
        .result-table td {
          width: 10%;
        }
      `}</style>
    </table>
  );
};

ResultTable.propTypes = {
  gradedQuestions: PropTypes.array,
};

export default ResultTable;
