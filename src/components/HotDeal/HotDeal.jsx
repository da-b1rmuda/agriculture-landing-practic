import './style.scss'
import {CardProduct} from "../Products/CardProduct.jsx";
import {CardDeal} from "./CardDeal.jsx";

const deals = [
	{
		title: 'Grapes',
		price: '100',
		img: '/assets/hotDeal-1.png'
	},
	{
		title: 'Onion',
		price: '20',
		img: '/assets/hotDeal-2.png'
	},
	{
		title: 'Apples',
		price: '50',
		img: '/assets/hotDeal-3.png'
	},
	{
		title: 'Bananas',
		price: '20',
		img: '/assets/hotDeal-4.png'
	},
]
export const HotDeal = () => {
	return (
			<div className="HotDeal-container">
				<div className="HotDeal-text">
					<p>Special Offers</p>
					<p>Today's Hot Deal</p>
				</div>
				<div className="HotDeal-cards">
					{deals.map((item, key) => {
						return (
								<div>
									<CardDeal key={key} title={item.title} price={item.price} img={item.img}/>
								</div>
						)
					})}
				</div>
			</div>
	)
}
