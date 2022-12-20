import React from 'react';
import InputForm from '../components/create/InputForm';
import Header from '../components/Header';
function Update() {
  return (
    <>
      <Header />
      <InputForm isCreate={false} />;
    </>
  );
}

export default Update;
