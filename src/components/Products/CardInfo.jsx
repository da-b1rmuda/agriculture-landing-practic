import './style.scss'
export const CardInfo = (props) => {
	return (
			<div className="CardInfo-container" style={{backgroundImage: `url(${props.img})`}}>
				<div className="CardInfo-text">
					<span>100% ORGANIC</span>
					<p>{props.title}</p>
				</div>
				<div className="CardInfo-button">
					<button>Order Now</button>
				</div>
			</div>
	)
}
