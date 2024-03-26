import './style.scss'
export const Carusel = () => {
	return (
			<div className='Carusel-container'>
				<div className="Carusel-wrapper">
					<div>
						<div className='Carusel-text'>
							<p>Agriculture</p>
							<p>& Organic
								Market</p>
						</div>
						<div className='Carusel-button'>
							<button>Show Now</button>
						</div>
					</div>
					<div className='Carusel-button__select'>
						<img src="/assets/select-2.svg"/>
						<img src="/assets/select-1.svg"/>
					</div>
				</div>
				<div className='Carusel-info'>
					<div className='Carusel-info-container'>
						<div className='Carusel-info-container__img'>
							<img src="/assets/carusel-1.svg"/>
						</div>
						<div>
							<p>Return Policy</p>
							<span>Money Back Guarantee</span>
						</div>
					</div>
					<div className='Carusel-info-container Carusel-info-container__center'>
						<div className='Carusel-info-container__img'>
							<img src="/assets/carusel-2.svg"/>
						</div>
						<div>
							<p>Free Shipping</p>
							<span>On All Orders Over $45.00</span>
						</div>
					</div>
					<div className='Carusel-info-container'>
						<div className='Carusel-info-container__img'>
							<img src="/assets/carusel-3.svg"/>
						</div>
						<div>
							<p>Store Locator</p>
							<span>Find Your Nearest Store</span>
						</div>
					</div>
				</div>
			</div>
	)
}
