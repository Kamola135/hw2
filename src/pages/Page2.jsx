import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Страница 2</h1>
      <button onClick={() => navigate('/page3')}>Перейти на Страницу 3</button>
    </div>
  );
};

export default Page2;
