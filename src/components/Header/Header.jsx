import './style.scss'
export const Header = () => {
	return (
			<div className='Header-container'>
				<div className='Header-top'>
					<div className='Header-top__wrapper'>
						<div className='Header-top__info'>
							<img src="/assets/Header-place.svg"/>
							<span>88 Road Broklyn Golden Street. New York</span>
						</div>
						<div className='Header-top__info'>
							<img src="/assets/Header-email.svg"/>
							<span>support@agrios.com</span>
						</div>
					</div>
					<div className='Header-top__link'>
						<img src="/assets/Link-twitter.svg"/>
						<img src="/assets/Link-facebook.svg"/>
						<img src="/assets/Link-pinteres.svg"/>
						<img src="/assets/Link-instagram.svg"/>
					</div>
				</div>
				<div className='Header-bottom'>
					<div className='Header-bottom__container'>
						<div className='Header-bottom__logo'>
							<img src="/assets/logo.png"/>
						</div>
						<div className='Header-bottom__navbar'>
							<div className='Header-bottom__navbar__links'>
								<div>
									<span>Home</span>
									<img src="/assets/colapse.svg"/>
								</div>
								<div>
									<span>About</span>
								</div>
								<div>
									<span>Services</span>
									<img src="/assets/colapse.svg"/>
								</div>
								<div>
									<span>Projects</span>
									<img src="/assets/colapse.svg"/>
								</div>
								<div>
									<span>News</span>
									<img src="/assets/colapse.svg"/>
								</div>
								<div>
									<span>Shop</span>
									<img src="/assets/colapse.svg"/>
								</div>
								<div>
									<span>Contact</span>
								</div>
							</div>
							<div className='Header-bottom__navbar__buttons'>
								<img src="/assets/search.svg"/>
								<img src="/assets/cart.svg"/>
							</div>
						</div>
					</div>
				</div>
			</div>
	)
}
