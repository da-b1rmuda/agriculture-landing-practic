import './style.scss'
import {CardProduct} from "./CardProduct.jsx";
import {CardInfo} from "./CardInfo.jsx";

const products = [
	{
		title: 'Onions',
		price: '20',
		img: '/assets/product-1.png'
	},
	{
		title: 'Carrot',
		price: '50',
		img: '/assets/product-2.png'
	},
	{
		title: 'Tomato',
		price: '50',
		img: '/assets/product-3.png'
	},
	{
		title: 'Red Grapes',
		price: '100',
		img: '/assets/product-4.png'
	},
	{
		title: 'Garlic',
		price: '20',
		img: '/assets/product-5.png'
	},
	{
		title: 'Lettuce',
		price: '30',
		img: '/assets/product-6.png'
	}
]

const info = [
	{
		title: 'Quality Organic Food Store',
		img: '/assets/product-card-info-1.png'
	},
	{
		title: 'Healthy Products Everyday',
		img: '/assets/product-card-info-2.png'
	}
]

export const Products = () => {
	return (
			<div className="Products-container">
				<div className="Products-text">
					<p>Recently Added</p>
					<p>Latest Products</p>
				</div>
				<div className="Products-cards">
					{products.map((item, key) => {
						return (
								<div>
									<CardProduct key={key} title={item.title} price={item.price} img={item.img}/>
								</div>
						)
					})}
				</div>
				<div className="Products-infoCards">
					{info.map((item, key) => {
						return (
								<div>
									<CardInfo key={key} title={item.title}  img={item.img}/>
								</div>
						)
					})}
				</div>
			</div>
	)
}
