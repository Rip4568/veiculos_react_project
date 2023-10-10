import React from 'react'
import SideBar from '../../components/SideBar/SideBar';

function Buy() {
  return (
    <div className="d-flex">
      <SideBar className="ml-auto" />
      <div className="mr-auto py-4">
        <h1>Nossos Carros</h1>
        {/* Outro conteúdo vai aqui */}
      </div>
    </div>
  );
}

export default Buy;