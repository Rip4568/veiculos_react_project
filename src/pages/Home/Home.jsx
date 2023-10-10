import React from 'react'
import Hero from '../../assets/layouts/Hero/Hero'
import Card from '../../components/Card/Card'
import Features from '../../assets/layouts/Features/Features'
import { NavLink } from 'react-router-dom'

function Home() {
	return (
		<div>
			<Hero />
			<div
				data-draggable="true"
				className=""
				style={{ position: "relative" }}
				draggable="false"
			>
				{/* <!----><!----> */}
				<section draggable="false" className="container pt-5" data-v-271253ee="">
					<section className="mb-10 text-center">
						<h2 className="fw-bold mb-5">
							<span>Veja alguns dos nossos</span> <NavLink to="/buy" className={"text-primary"}>carros</NavLink>
						</h2>
						<div className="row gx-lg-5">
							<Card titulo={"João"} imageURL={"https://mdbootstrap.com/img/new/avatars/6.jpg"} resumo={"CEO"} />
							<Card titulo={"Maria"} imageURL={"https://mdbootstrap.com/img/new/avatars/7.jpg"} resumo={"CTO"} />
							<Card titulo={"Pedro"} imageURL={"https://mdbootstrap.com/img/new/avatars/8.jpg"} resumo={"CTO"} />
							<Card titulo={"Pedro"} imageURL={"https://mdbootstrap.com/img/new/avatars/8.jpg"} resumo={"CTO"} />
						</div>
						<button className='btn-lg btn-primary text-center mt-5'>Ver Mais</button>
					</section>
				</section>
				{/* <!----> */}
			</div>
			<Features />
		</div>
	)
}
export default Home;