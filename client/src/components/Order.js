import React from 'react';
import moment from 'moment';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/Job';
import OrderInfo from './OrderInfo';

const Order = ({ _id, order, company, createdAt }) => {
  const { setEditOrder, deleteOrder } = useAppContext();

  let date = moment(createdAt);
  date = date.format('MMM Do, YYYY');

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>{company}</h5>
          <p>{order}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content'>
          <div className='content-center'>
            <OrderInfo icon={<FaCalendarAlt />} text={date} />
          </div>
          {/* footer content */}
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/add-order'
              onClick={() => setEditOrder(_id)}
              className='btn edit-btn'
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteOrder(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Order;
