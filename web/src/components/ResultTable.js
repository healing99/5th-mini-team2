import React from 'react';
import classNames from 'classnames';
import { cut } from '@/utils/array';
import { toCircledNum } from '@/utils/format';

const tempData = Array(50).fill(0);

const ResultTable = () => {
  const tableList = () => {
    const rows = cut(tempData, 4);

    return rows.map((row, idx) => (
      <tr>
        {row.map((item, idx) => (
          <React.Fragment key={idx}>
            <td className="number">{1}</td>
            <td>{toCircledNum((idx % 5) + 1)}</td>
            <td className={classNames(idx % 2 === 1 ? 'correct' : 'incorrect')}>{toCircledNum((idx % 5) + 1)}</td>
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

export default ResultTable;
