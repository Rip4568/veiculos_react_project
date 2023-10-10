import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Features() {
	return (
		<section draggable="false" className="container pt-5" data-v-271253ee="">
			<section className="mb-10 text-center">
				<div className="d-flex justify-content-center">
					<div className="text-center" style={{ maxWidth: "700px" }}>
						<h2 className="fw-bold mb-4 text-center">
							<span className="me-2">Veja</span><NavLink to="/buy" className={"text-primary"}>Mais</NavLink>
						</h2>
						<p className="text-muted mb-5">
							Minus fuga aliquid vero facere ducimus quos, quisquam nemo?
							Molestias ullam provident vitae error aliquam dolorum
							temporibus? Doloremque, quasi
						</p>
					</div>
				</div>
				<div className="row gx-lg-5">
					<div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
						<div
							className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4"
						>
							<i
								className="fas fa-headset fa-lg text-white fa-fw"
								aria-controls="#picker-editor"
							></i>
						</div>
						<h5 className="fw-bold mb-3">Support 24/7</h5>
						<p className="text-muted mb-0">
							Laudantium totam quas cumque pariatur at doloremque hic quos
							quia eius. Reiciendis optio minus mollitia rerum labore
						</p>
					</div>
					<div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
						<div
							className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4"
						>
							<i
								className="fas fa-shield-alt fa-lg text-white fa-fw"
								aria-controls="#picker-editor"
							></i>
						</div>
						<h5 className="fw-bold mb-3">Safe and solid</h5>
						<p className="text-muted mb-0">
							Eum nostrum fugit numquam, voluptates veniam neque quibusdam
							ullam aspernatur odio soluta, quisquam dolore animi
						</p>
					</div>
					<div className="col-lg-3 col-md-6 mb-5 mb-md-0">
						<div
							className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4"
						>
							<i
								className="fas fa-shipping-fast fa-lg text-white fa-fw"
								aria-controls="#picker-editor"
							></i>
						</div>
						<h5 className="fw-bold mb-3">Extremely fast</h5>
						<p className="text-muted mb-0">
							Enim cupiditate, minus nulla dolor cumque iure eveniet
							facere ullam beatae hic voluptatibus dolores exercitationem
						</p>
					</div>
					<div className="col-lg-3 col-md-6 mb-5 mb-md-0">
						<div
							className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4"
						>
							<i
								className="fas fa-chart-pie fa-lg text-white fa-fw"
								aria-controls="#picker-editor"
							></i>
						</div>
						<h5 className="fw-bold mb-3">Live analytics</h5>
						<p className="text-muted mb-0">
							Illum doloremque ea, blanditiis sed dolor laborum
							praesentium maxime sint, consectetur atque ipsum ab adipisci
						</p>
					</div>
				</div>
			</section>
		</section>
	)
}
