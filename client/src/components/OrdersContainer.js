import React from 'react';
import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import { Order, Loading, PageBtnContainer } from './index';
import Wrapper from '../assets/wrappers/JobsContainer';

const OrdersContainer = () => {
  const {
    getOrders,
    orders,
    isLoading,
    page,
    totalOrders,
    search,
    sort,
    numOfPages,
  } = useAppContext();
  useEffect(() => {
    getOrders();
    // eslint-disable-next-line
  }, [search, sort, page]);

  if (isLoading) {
    return <Loading center />;
  }
  if (orders.length === 0) {
    return (
      <Wrapper>
        <h2>No orders to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalOrders} order{orders.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {orders.map((order) => {
          return <Order key={order._id} {...order} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default OrdersContainer;
