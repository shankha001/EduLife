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
    <div style={{ height: '90vh' }}>
      <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
        Edulife - Hackccelarate 2020 🚀
      </h1>
      <Lottie options={defaultOptions} height={500} width={800} />
    </div>
  );
}

export default Home;
