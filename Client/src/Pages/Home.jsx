import React from 'react';
import Lottie from 'react-lottie';
import Classes from '../Assets/class.json';

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Classes,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
        Edulife - Hackccelerate 2020 🚀
      </h1>
      <Lottie options={defaultOptions} style={{ width: '100%' }} />
    </div>
  );
}

export default Home;
