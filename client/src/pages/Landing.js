import { Logo } from '../components/index';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import main from '../assets/images/main-alternative.svg';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            order <span>tracking</span> app
          </h1>
          <p>Never ever forget a order ever again!!</p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
