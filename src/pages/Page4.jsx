import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page4 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Страница 4</h1>
      <button onClick={() => navigate('/page5')}>Перейти на Страницу 5</button>
    </div>
  );
};

export default Page4;
