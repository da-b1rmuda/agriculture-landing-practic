export const CardProduct = (props) => {
	return (
			<div className="CardProduct-container">
				<div className="CardProduct-img">
					<img src={props.img}/>
				</div>
				<div className="CardProduct-info">
					<div className="CardProduct-info-title">
						<p>{props.title}</p>
					</div>
					<div className="CardProduct-info-price">
						<p>${props.price}.00</p>
					</div>
					<div>
						<img src="/assets/SSSSS.png" />
					</div>
				</div>
			</div>
	)
}
