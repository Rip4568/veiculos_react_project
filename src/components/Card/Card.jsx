import React from 'react'

export default function Card({imageURL, titulo, resumo}) {
	return (
		<div className="col-lg-3 col-sm-6 col-md-6 mb-4 mb-lg-0 mt-4">
			<div className="card">
				<div
					className="bg-image hover-overlay ripple"
					data-ripple-color="light"
				>
					<img
						src={imageURL}
						className="w-100"
						alt=""
						aria-controls="#picker-editor"
						draggable="false"
					/>
					<svg
						className="position-absolute"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						style={{ left: 0, bottom: 0 }}
					>
						
					</svg>
				</div>
				<div className="card-body">
					<h5 className="fw-bold">{titulo}</h5>
					<p className="text-muted">{resumo}</p>
					<ul className="list-unstyled mb-0">
						<button
							className='btn btn-info btn-block'
						>Comprar</button>
						{/* <a href="#!" className="px-1" draggable="false">
							<i
								className="fab fa-github"
								aria-controls="#picker-editor"
							></i>
						</a>
						<a href="#!" className="px-1" draggable="false">
							<i
								className="fab fa-twitter"
								aria-controls="#picker-editor"
							></i>
						</a>
						<a href="#!" className="px-1" draggable="false">
							<i
								className="fab fa-linkedin-in"
								aria-controls="#picker-editor"
							></i>
						</a> */}
					</ul>
				</div>
			</div>
		</div>
	)
}
