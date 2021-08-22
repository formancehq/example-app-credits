import "regenerator-runtime/runtime.js";
import './global.css';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Navbar from './navbar.jsx';
import Catalog from './catalog.jsx';
import axios from "axios";
import { getUserId } from "./auth.js";
import Payment from './payment.jsx';
import { init as initConfetti } from './confetti';

initConfetti();

axios.defaults.headers.common['x-user-id'] = getUserId();

const Wrapper = styled.div`
  font-family: 'Inter', Helvetica, sans-serif;

  .flex {
    display: flex;
    align-items: center;
  }

  .flex-1 {
    flex: 1;
  }

  .right {
    text-align: right; 
  }

  h1 {
    font-weight: 700;
  }

  &.container, .container {
    max-width: 960px;
    margin: auto;
  }

  padding-bottom: 100px;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper className="container">
        <Payment></Payment>
        <Navbar></Navbar>
        <Catalog></Catalog>
      </Wrapper>
    );
  }
}

const container = document.querySelector('#app');
ReactDOM.render(React.createElement(App), container);