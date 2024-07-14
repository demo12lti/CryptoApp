import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrices } from '../action';

const TableComponent = ({ symbol }) => {
  const dispatch = useDispatch();
  const prices = useSelector((state) => state.prices);

  useEffect(() => {
    dispatch(fetchPrices(symbol));
  }, [dispatch, symbol]);

  if (!Array.isArray(prices)) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {prices.map((price, index) => (
          <tr key={index}>
            <td>{new Date(price[0]).toLocaleString()}</td>
            <td>{price[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
