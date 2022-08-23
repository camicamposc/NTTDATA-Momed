import React, { useState, useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext';
import Search from '../components/Search/Search';

const Profesionales = () => {

  const { professional, getProfessional, process, getProcess } = useContext(DataContext)

  useEffect(() => {
    getProcess();
    getProfessional();
  }, [])

  return (
    <>

      <h1>Profesionales</h1>
      <Search />
    </>
  );
};

export default Profesionales;
