import React from 'react';

function CurrentRemainQuestion(props) {
  return (
    <div className="remain-wrapper">
      <span className="current">현재 {props.current || '00'}문제 </span>
      <span className="dash remaining">|</span>
      <span className="remaining">남은 {props.remain || '00'}문제 </span>

      <style jsx>{`
        .remain-wrapper {
          padding: 8px 16px;
          background-color: #b0d5e5;
        }
        .current {
          color: #fff;
        }
        .remaining {
          color: #6c6c6c;
        }
        .dash {
          padding: 0px 8px;
        }
      `}</style>
      {/* <style jsx>
        {`
                .current{
                    padding: 0px 10px 0px 5px;
                    width: 69px;
                    height: 20px;
                    //font-family: NotoSansCJKkr;
                    font-size: 14px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.43;
                    letter-spacing: -0.7px;
                    text-align: left;
                    color: #ffffff;
                }
                .remain{
                    padding: 0px 10px 0px 0px;
                    width: 62px;
                    height: 20px;
                    //font-family: NotoSansCJKkr;
                    font-size: 14px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.43;
                    letter-spacing: -0.7px;
                    text-align: left;
                    color: #6c6c6c;
                `}
      </style> */}
    </div>
  );
}

export default CurrentRemainQuestion;
