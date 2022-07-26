import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Ups! Page Not found</h3>
        <p>We can't seem to find the page you are looking for.</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};

/* const Error = () => {
  return (
    <div className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>text</h3>
        <p>text</p>
        <Link to='/'>back home</Link>
      </div>
    </div>
  );
}; */

export default Error;
