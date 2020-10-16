import React from 'react';
import toggle from '@/hoc/toggle';

const Loading = () => {
  return (
    <div className="loading">
      <div className="wrap">
        <div className="spinner" />
        <p>로딩중</p>
      </div>

      <style jsx scoped>{`
        .loading {
          background: rgba(0, 0, 0, 0.3) no-repeat;
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 99999;
        }
        .loading .spinner {
          border: 8px solid #3d7a9b;
          border-top: 8px solid #fff;
          border-radius: 50%;
          width: 42px;
          height: 42px;
          animation: spin 1.4s linear infinite;
          display: inline-block;
        }
        .loading .wrap {
          display: inline-block;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          position: fixed;
          text-align: center;
        }

        .loading p {
          color: #fff;
          font-weight: bold;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default toggle(Loading);
