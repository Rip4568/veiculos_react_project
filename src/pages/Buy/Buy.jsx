import React from 'react'
import SideBar from '../../components/SideBar/SideBar';
import Card from '../../components/Card/Card'

function Buy() {
  return (
    <div className="d-flex">
      <SideBar className="ml-auto" />
      <div className="mr-auto py-4">
        <h1>Nossos Carros</h1>
        {/* Outro conteúdo vai aqui */}
        <div className="row gx-lg-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item" aria-current="page">
              <a class="page-link" href="#">2 <span class="visually-hidden">(current)</span></a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Buy;