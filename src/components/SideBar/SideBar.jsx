import React, { useEffect } from 'react'

function SideBar() {
	/* BUSCAR TODOS OS MODELOS E MARCAS DO BACKEND E MOSTRAR COMO OPÇÃO */
	
	return (
		<>
			{/* <!--Main Navigation--> */}
			<header>
				{/* <!-- Sidebar --> */}
				<nav id="sidebarMenu" className="bg-white">
					<div className="position-sticky">
						<div className="list-group list-group-flush mx-3 mt-4">
							{/* <!-- Collapse 1 --> */}
							<a
								className="list-group-item list-group-item-action py-2 ripple"
								aria-current="true"
								data-mdb-toggle="collapse"
								href="#collapseExample1"
								aria-expanded="true"
								aria-controls="collapseExample1"
							>
								<i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Modelos</span>
							</a>
							{/* <!-- Collapsed content --> */}
							<ul id="collapseExample1" className="collapse show list-group list-group-flush">
								<li className="list-group-item py-1">
									<a href="" className="text-reset">Modelo 1</a>
								</li>
								<li className="list-group-item py-1">
									<a href="" className="text-reset">Modelo 2</a>
								</li>
								<li className="list-group-item py-1">
									<a href="" className="text-reset">Modelo 3</a>
								</li>
								<li className="list-group-item py-1">
									<a href="" className="text-reset">modelo 4</a>
								</li>
							</ul>
							{/* <!-- Collapse 1 --> */}

							{/* <!-- Collapse 2 --> */}
							<a
								className="list-group-item list-group-item-action py-2 ripple"
								aria-current="true"
								data-mdb-toggle="collapse"
								href="#collapseExample2"
								aria-expanded="true"
								aria-controls="collapseExample2"
							>
								<i className="fas fa-chart-area fa-fw me-3"></i><span>Marcas</span>
							</a>
							{/* <!-- Collapsed content --> */}
							<ul id="collapseExample2" className="collapse list-group list-group-flush">
								<li className="list-group-item py-1">
									<a href="" className="text-reset">Volkswagem</a>
								</li>
								<li className="list-group-item py-1">
									<a href="" className="text-reset">Fiat</a>
								</li>
								<li className="list-group-item py-1">
									<a href="" className="text-reset">Peugeot</a>
								</li>
							</ul>
							{/* <!-- Collapse 2 --> */}
						</div>
					</div>
				</nav>
				{/* <!-- Sidebar --> */}
			</header>
		</>
	);
}
export default SideBar;