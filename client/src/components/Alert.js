import React from 'react';
/* import { useAppContext } from '../context/appContext'; */

const Alert = () => {
  /* const { alertType, alertText } = useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>; */
  return <div className={`alert alert-danger`}>alert Goes here</div>;
};

export default Alert;
