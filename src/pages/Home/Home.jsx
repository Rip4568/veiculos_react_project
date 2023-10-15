import React, { useState } from 'react'
import Hero from '../../assets/layouts/Hero/Hero'
import Card from '../../components/Card/Card'
import Features from '../../assets/layouts/Features/Features'
import { NavLink } from 'react-router-dom'
import { getCars } from '../../assets/js/axios/cars/carsServices'

function Home() {
	const [cars, setCars] = useState([])
	function loadCars() {
		getCars().then((response) => {
			setCars(response.data.results)
		})
	}
	loadCars()
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
							{cars.map((car) => (
								<Card titulo={car.modelo.nome} imageURL={car.imagens[0]} resumo={car.preco}/>
							))}
							<Card titulo={"Volkswagen Golf"} imageURL={"https://th.bing.com/th/id/R.183a7dba17aa4ab3100663610543f59b?rik=wVJaHXqDr2Pm9w&riu=http%3a%2f%2fperformancedrive.com.au%2fwp-content%2fuploads%2f2017%2f04%2f2017-Volkswagen-Golf-R-1280x834.jpg&ehk=%2bp6Evl4nm0BLCbamF0zzHGFA109P1RFpxllAs06avSo%3d&risl=&pid=ImgRaw&r=0"} resumo={"R$20.000"} />
							<Card titulo={"Peugeot 208"} imageURL={"https://media.autoexpress.co.uk/image/private/s--HQ4B6C4W--/v1587553881/autoexpress/2020/04/Peugeot%20208%202020%20UK%20pictures-29.jpg"} resumo={"R$35.500,75"} />
							<Card titulo={"Lamborghini Urus"} imageURL={"https://media.autoexpress.co.uk/image/private/s--bVqsOvXj--/v1562246223/autoexpress/2018/04/gialloauge_road_dynamic_10.jpg"} resumo={"R$480.900,35"} />
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