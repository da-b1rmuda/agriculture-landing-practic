import './style.scss'
export const Footer = () => {
	return (
			<div className="Footer-container">
				<div className="Footer-up">
					<div className="section-one">
						<img src="/assets/logo-2.png" />
						<p>There are many variations of passages of lorem ipsum available, but the majority suffered.</p>
						<div>
							<img src="/assets/Link-twitter-1.png"/>
							<img src="/assets/Link-facebook-1.png"/>
							<img src="/assets/Link-pinteres-1.png"/>
							<img src="/assets/Link-instagram-1.png"/>
						</div>
					</div>
					<div className="section-two">
						<p>Explore</p>
						<img src="/assets/divider.png"/>
						<div className="section-two__links">
							<div>
								<img src="/assets/leaf.png"/>
								<span>About</span>
							</div>
							<div>
								<img src="/assets/leaf.png"/>
								<span>Services</span>
							</div>
							<div>
								<img src="/assets/leaf.png"/>
								<span>Our Projects</span>
							</div>
							<div>
								<img src="/assets/leaf.png"/>
								<span>Meet the Farmers</span>
							</div>
							<div>
								<img src="/assets/leaf.png"/>
								<span>Latest News</span>
							</div>
							<div>
								<img src="/assets/leaf.png"/>
								<span>Contact</span>
							</div>
						</div>
					</div>
					<div className="section-three">
						<p>News</p>
						<img src="/assets/divider.png"/>
						<div className="section-three__news">
							<div>
								<p>Bringing Food Production
									Back To Cities</p>
								<span>July 5, 2022</span>
							</div>
							<div>
								<p>The Future of Farming,
									Smart Irrigation Solutions</p>
								<span>July 5, 2022</span>
							</div>
						</div>
					</div>
					<div className="section-four">
						<p style={{color: 'white'}}>Contact</p>
						<img src="/assets/divider.png"/>
						<div className="section-four__contact">
							<div>
								<img src="/assets/phone.png"/>
								<span>666 888 0000</span>
							</div>
							<div>
								<img src="/assets/email.png"/>
								<span>needhelp@company.com</span>
							</div>
							<div className='section-four__contact__spec'>
								<img src="/assets/location.png"/>
								<p>80 broklyn golden street line New York, USA</p>
							</div>
						</div>
						<div className="section-four__input">
							<input type="text" placeholder="Your Email Address"/>
							<img src="/assets/message.png"/>
						</div>
					</div>
				</div>
				<div className="Footer-down">
					<div className="Footer-down__copyrigth">
						<span>© All Copyright 2024 by shawonetc Themes</span>
					</div>
					<div className="Footer-down__policy">
						<span>Terms of Use</span>
						<span>Privacy Policy</span>
					</div>
				</div>
			</div>
	)
}
