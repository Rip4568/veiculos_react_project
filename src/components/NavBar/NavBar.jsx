import styles from './NavBar.module.css'
import React, { useState } from 'react'
import { BrowserRouter, Router, Route, NavLink, Link } from 'react-router-dom'

export default function NavBar() {
	return (
		<div data-draggable="true" className="" style={{ position: "relative" }}>
			{/* <!----><!----> */}
			<section
				draggable="false"
				className="overflow-hidden pt-0"
				data-v-271253ee=""
			>
				{/* <!-- Navbar --> */}
				<section className="" style={{ paddingBottom: "1px" }}>
					{/* <!-- Navbar --> */}
					<nav
						className="navbar navbar-expand-lg navbar-light bg-white shadow-2"
					>
						{/* <!-- Container wrapper --> */}
						<div className="container-fluid">
							<div className="d-flex">
								{/* <!-- Toggle button --> */}
								<button
									className="navbar-toggler"
									type="button"
									data-mdb-toggle="collapse"
									data-mdb-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<i className="fas fa-bars"></i>
								</button>
								{/* <!-- Navbar brand --> */}
								<Link
									className='navbar-brand text-primary'
									to="/"
									aria-controls='#picker-editor'>
									Home
								</Link>
							</div>
							{/* <!-- Collapsible wrapper --> */}
							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								{/* <!-- Left links --> */}
								<ul
									className="navbar-nav me-auto mb-2 ms-2 ps-1 ms-lg-0 ps-lg-0 mb-lg-0">
									<li className="nav-item">
										<NavLink
											className="nav-link"
											to="/sell"
											aria-controls='#picker-editor'
										>
											Vender Carro
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											to="/buy"
											className="nav-link"
											aria-controls='#picker-editor'
										>
											Comprar Carros
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											to="/about"
											aria-controls='#picker-editor'
											className="nav-link"
										>
											Sobre nós
										</NavLink>
									</li>
									{/* <span className="input-group-text" id="basic-addon1">
										<input type="search" className="form-control" placeholder="Pesquise..." aria-label="Search" />
										<i className="fas fa-search"></i>
									</span> */}
									<div className="input-group">
										<input
											type="text"
											className="form-control"
											placeholder="Pesquise"
											aria-label="Pesquise"
											aria-describedby="basic-addon2"
											style={{
												width: "10px"
											}}
										/>
										<div className="input-group-append">
											<button 
											className="input-group-text p-2 btn btn-white"
											id="basic-addon2"
											>
												<i className="fas fa-search"></i>
											</button>
										</div>
									</div>
								</ul>
								{/* <!-- Left links --> */}
							</div>
							{/* <!-- Collapsible wrapper --> */}
							{/* <!-- Right elements --> */}
							<div className="d-flex align-items-center">
								<button
									type="button"
									className="btn btn-link px-3 mb-1 me-2"
									aria-controls="#picker-editor"
								>
									Entrar
								</button>
								<button
									type="button"
									className="btn btn-primary mb-1 me-lg-3"
									aria-controls="#picker-editor"
								>
									Registrar
								</button>
							</div>
							{/* <!-- Right elements --> */}
						</div>
						{/* <!-- Container wrapper --> */}
					</nav>
					{/* <!-- Navbar --> */}
				</section>
			</section>
			{/* <!----> */}
		</div>
	)
}
