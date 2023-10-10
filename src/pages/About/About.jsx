import React from 'react'

export default function About() {
	return (
		<div id="preview" className="preview">
			<div style={{ display: "none" }}></div>
			<div>
				<div data-draggable="true" className="" style={{ position: "relative" }}>
					<section draggable="false" className="container pt-5" data-v-271253ee="">
						<section className="mb-10">
							<div className="card mb-3">
								<div className="row g-0 d-flex align-items-center">
									<div className="col-lg-6 col-xl-8">
										<div className="card-body px-4 py-5 px-md-5">
											<h2 className="fw-bold">Quem és o criador dessa pagina ?</h2>
											Parceria com: <p className="text-uppercase text-danger fw-bold mb-4"><span> <i className='fas fa-heart'></i> MDBoostrap</span></p>
											<p className="mb-0">
												Olá, o criador da pagina sou eu, Jonathas David. Um mero estudante de computação que ama programação (apesar de não ser o melhor)
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>
					</section>
				</div>
			</div>
		</div>
	)
}
