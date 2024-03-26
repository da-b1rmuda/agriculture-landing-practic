export const CardDeal = (props) => {
	return (
			<div className="CardDeal-container">
				<div className="CardDeal-img">
					<img src={props.img}/>
				</div>
				<div className="CardDeal-info__wrapper">
					<div className="CardDeal-info">
						<div className="CardDeal-info-title">
							<p>{props.title}</p>
						</div>
						<div className="CardDeal-info-price">
							<p>${props.price}.00</p>
						</div>
					</div>
					<div className="CardDeal-info-rate">
						<img src="/assets/SSSSS.png"/>
					</div>
				</div>
			</div>
	)
}
