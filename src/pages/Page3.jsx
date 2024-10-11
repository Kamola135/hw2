import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page3 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Страница 3</h1>
      <button onClick={() => navigate('/page4')}>Перейти на Страницу 4</button>
    </div>
  );
};

export default Page3;
