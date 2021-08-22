import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { purchase } from './payment';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, auto);

  .item {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    min-height: 100px;
    border: solid 1px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }

  .item-img {
    width: 100%;
    height: 160px;
    background: magenta;
    border-radius: 8px;
  }

  p {
    margin-top: 0;
  }

  button {
    font-weight: 500;
    font-size: 16px;
    padding: 10px 16px;
    border: none;
    border-radius: 20px;
    background: blue;
    color: white;
    cursor: pointer;
  }
`;

const Catalog = (props) => {
  const [data, setData] = React.useState({
    items: [],
  });

  React.useEffect(() => {
    (async () => {
      const res = await axios.get('/api/store/catalog');
      setData({
        items: res.data.items,
      });
    })();
  }, []);

  return (
    <Wrapper>
      {data.items.map(item => {
        return (
          <div key={item.id} className="item">
            <div className="item-img"></div>
            <div className="flex">
              <h3 className="flex-1">{item.title}</h3>
              <span>{item.price[1]}</span>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
            <div className="flex">
              <button onClick={() => {
                purchase(item.id);
              }}>Buy now</button>
            </div>
          </div>
        );
      })}
    </Wrapper>
  )
}

export default Catalog;