import React from 'react'
import ErrorImg from '@/assets/images/Error.svg';


export const NotFound = ({ history }) => {
  return (
    <div className="container notfound">
      <img src={ErrorImg} />
      <h3>페이지를 찾을 수 없습니다</h3>
      <p>
        존재하지 않는 주소를 입력하셨거나,<br />
        요청하신 페이지의 주소가 변경,삭제되어 찾을 수 없습니다.
      </p>

      <button onClick={() => history.push('/')} className="btn btn-outline-secondary rounded-pill">
        홈으로 이동
      </button>
      <style jsx>{`
        .notfound {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100%;
          flex-direction: column;
          color: #565656;
        }

        .notfound h3 {
          font-weight: bold;
          padding-top: 16px;
        }  
        
        .notfound p {
          text-align: center;
        }

        .notfound button {
          margin-top: 16px;
        }
      `}</style>
    </div>
  )
}

export default NotFound;       