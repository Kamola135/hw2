import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page5 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Страница 5</h1>
      <button onClick={() => navigate('/')}>Перейти на Страницу 1</button>
    </div>
  );
};

export default Page5;
