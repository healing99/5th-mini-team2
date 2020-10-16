import React from 'react';
import PropTypes from 'prop-types';

function Box({ items = ['test', 'test'] }) {
  const createItem = (text, last = false, key) => (
    <React.Fragment key={key}>
      <span className="text">{text}</span>
      {last === false && <span className="dash" />}
    </React.Fragment>
  );

  return (
    <div className="box">
      {items.map((item, _) => createItem(item, _ === items.length - 1, _))}
      <style jsx global>{`
        .box {
          padding: 8px 16px;
          background-color: #d2ebf9;
          font-size: 14px;
          display: inline;
        }
        .box .text {
          color: #6c6c6c;
          border: 3px;
        }
        .box .dash {
          margin: 0px 8px;
          border-left: 2px solid #6c6c6c;
        }
      `}</style>
    </div>
  );
}

Box.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Box;
