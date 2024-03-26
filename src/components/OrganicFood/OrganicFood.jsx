import './style.scss'
export const OrganicFood = () => {
	return (
			<div className="OrganicFood-container">
				<div className="OrganicFood-img">
					<img src="/assets/organic-food.png"/>
				</div>
				<div className="OrganicFood-text">
					<div className="OrganicFood-text__title">
						<p>Quality Products</p>
						<p>Only Organic Food</p>
						<span>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word.</span>
					</div>
					<div className="OrganicFood-text__farm-container">
						<div className="OrganicFood-text__farm">
							<div>
								<img src="/assets/organicFood-1.png"/>
							</div>
							<div className="OrganicFood-text__farm__text">
								<p>Professional Farmers</p>
								<span>There are many variation of passages of lorem ipsum.</span>
							</div>
						</div>
						<div className="OrganicFood-text__farm">
							<div>
								<img src="/assets/organicFood-2.png"/>
							</div>
							<div className="OrganicFood-text__farm__text">
								<p>Solution for Farming</p>
								<span>There are many variation of passages of lorem ipsum.</span>
							</div>
						</div>
					</div>
					<div className="OrganicFood-text__button">
						<button>Start Shopping Now</button>
					</div>
				</div>
			</div>
	)
}
