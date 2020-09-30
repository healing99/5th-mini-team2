import React from 'react';

function QuestionInfo(props) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-1 test">CLASS</div>
          <div className="col-2 info class-name">{props.class || '기본 이름'}</div>
          <div className="col-1 test">시험 종목</div>
          <div className="col info test-name">{props.testName || '기본 시험지'}</div>
          <div className="col-1 test">시험 시간</div>
          <div className="col-1 info test-time">{props.testTime || '기본 시간'}</div>
        </div>
      </div>

      <style jsx>{`
            
            .test{
                width: 120px;
                height: 47px;
                border-radius: 24px;
                background-color: #ffffff;
                
                padding: 10px 0px;
                // font-family: NotoSansCJKkr;
                font-size: 24px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.21;
                letter-spacing: normal;
                text-align: center;
                color: #6c6c6c;
            }
            .info{
                width: 441px;
                height: 38px;
                padding: 5px 10px;
                // font-family: NotoSansCJKkr;
                font-size: 26px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.46;
                letter-spacing: -1.3px;
                text-align: left;
                color: #ffffff;
            }
        }
        `}</style>
    </div>
  );
}

export default QuestionInfo;
