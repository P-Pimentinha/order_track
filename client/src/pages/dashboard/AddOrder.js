import React from 'react';
import { Form, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddOrder = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    order,
    company,
    jobLocation,
    handleChange,
    clearValues,
    createOrder,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // while testing

    if (!order || !company) {
      displayAlert();
      return;
    }
    if (isEditing) {
      // eventually editJob()
      return;
    }
    createOrder();
  };

  const handleOrderInput = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit order' : 'add order'} </h3>
        {showAlert && <Alert />}

        {/* position */}
        <div className='form-center'>
          <Form
            type='text'
            name='company'
            value={company}
            handleChange={handleOrderInput}
          />
          <Form
            type='text'
            name='order'
            value={order}
            handleChange={handleOrderInput}
          />
          {/* company */}

          {/* location */}

          {/* job type */}

          {/* job status */}

          <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddOrder;
