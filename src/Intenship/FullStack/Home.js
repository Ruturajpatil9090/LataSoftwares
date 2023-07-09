import React from 'react';
import '../../home/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (url) => {
    window.open('https://www.youtube.com/','_blank');
  };

  return (
    <>
      <div className='homeDiv'>
        <div className='frameContent'>
          <h5>Make it work, make it right, make it fast</h5>
          <h1>Make Your World Better</h1>
          <h5>Are you going to sit and type in front of that thing all day, or are you going out with us?</h5>
          <br></br>
          <button className='btn btn-primary' onClick={handleClick}>Register</button>
        </div>
        <div className='frameImg'>
          <img src='/img/homeGif.png' alt='' />
        </div>
      </div>
    </>
  );
};

export default Home;