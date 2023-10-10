import React from 'react'

function SideBar() {
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
								<i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Expanded menu</span>
							</a>
							{/* <!-- Collapsed content --> */}
							<ul id="collapseExample1" className="collapse show list-group list-group-flush">
								<li className="list-group-item py-1">
									<a href="" className="text-reset">Link</a>
								</li>
								<li className="list-group-item py-1">
									<a href="" className="text-reset">Link</a>
								</li>
								<li className="list-group-item py-1">
									<a href="" className="text-reset">Link</a>
								</li>
								<li className="list-group-item py-1">
									<a href="" className="text-reset">Link</a>
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
								<i className="fas fa-chart-area fa-fw me-3"></i><span>Collapsed menu</span>
							</a>
							{/* <!-- Collapsed content --> */}
							<ul id="collapseExample2" className="collapse list-group list-group-flush">
								<li className="list-group-item py-1">
									<a href="" className="text-reset">Link</a>
								</li>
								<li className="list-group-item py-1">
									<a href="" className="text-reset">Link</a>
								</li>
								<li className="list-group-item py-1">
									<a href="" className="text-reset">Link</a>
								</li>
								<li className="list-group-item py-1">
									<a href="" className="text-reset">Link</a>
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