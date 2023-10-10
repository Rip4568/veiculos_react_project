import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Hero() {
	return (
		<div
			data-draggable="true"
			className=""
			style={{ position: "relative" }}
			draggable="false"
		>
			{/* <!----><!----> */}
			<section draggable="false" className="container pt-5" data-v-271253ee="">
				<section className="mb-10">
					{/* <!-- Background image --> */}
					<div
						className="p-5 text-center bg-image"
						style={{
							backgroundImage: "url('https://wallpapercave.com/wp/wp4097750.jpg')",
							height: "500px",
							backgroundSize: "cover",
							backgroundPosition: "50% 50%",
							backgroundColor: "rgba(0, 0, 0, 0)"
						}}
						aria-controls="#picker-editor"
					></div>
					{/* <!-- Background image --> */}
					<div
						className="card mx-4 mx-md-5 text-center shadow-5-strong"
						style={{
							marginTop: "-170px",
							background: "hsla(0, 0%, 100%, 0.7)",
							backdropFilter: "blur(30px)"
						}}
					>
						<div className="card-body px-4 py-5 px-md-5">
							<h1 className="display-3 fw-bold ls-tight mb-4">
								<span>O carro dos seus sonhos</span> <br />
								<span className="text-secondary">Você encontra aqui</span>
							</h1>

							<NavLink
								className="btn btn-primary btn-lg py-3 px-5 mb-2 me-2"
								to="/buy"
								role='button'
								aria-controls='#picker-editor'
								draggable="false"
								>
								Ver Carros
							</NavLink>
							<NavLink
								to="/about"
								className="btn btn-link btn-lg py-3 px-5 text-secondary mb-2 me-2"
								role="button"
								aria-controls="#picker-editor"
								draggable="false"
								>
								Sobre nós
							</NavLink>
						</div>
					</div>
				</section>
			</section>
			{/* <!----> */}
		</div>
	)
}
