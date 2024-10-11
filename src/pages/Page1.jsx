import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Страница 1</h1>
      <button onClick={() => navigate('/page2')}>Перейти на Страницу 2</button>
    </div>
  );
};

export default Page1;
