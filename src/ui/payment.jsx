import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: none;
  
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.7);
  /* backdrop-filter: blur(0.4px); */

  .modal {
    width: 400px;
    height: 500px;
    margin: auto;
    margin-top: 75px;
    background: white;
    border-radius: 8px;
    box-shadow: 2px 1px 8px rgba(0, 0, 0, 0.4);
  }
`;

const Payment = (props) => {
  return (
    <Wrapper>
      <div className="modal">
      </div>
    </Wrapper>
  );
}

export default Payment;