import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { getUserId } from './auth';
import { subscribe } from './payment';

const Wrapper = styled.div`
  .balance {
  }
`;

const Navbar = (props) => {
  const [data, setData] = React.useState({
    balances: {
      'COIN': 0,
    },
  });

  const fetchBalance = async () => {
    const res = await axios.get('/api/user/me');

    setData({
      balances: res.data.account.balances || data.balances,
    });
  };

  React.useEffect(() => {
    subscribe(() => {
      fetchBalance();
    });

    fetchBalance();
  }, []);

  return (
    <Wrapper className="flex">
      <h1 className="flex-1">Welcome, {getUserId()}</h1>
      <div className="flex-1 right">
        <div className="balance">
          <span>{data.balances['COIN']}</span>
          <span> Credits</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar;