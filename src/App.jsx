import {Header} from "./components/Header/Header.jsx";
import {Carusel} from "./components/Carusel/Carusel.jsx";
import {Products} from "./components/Products/Products.jsx";
import {ShopNow} from "./components/ShopNow/ShopNow.jsx";
import {HotDeal} from "./components/HotDeal/HotDeal.jsx";
import {OrganicFood} from "./components/OrganicFood/OrganicFood.jsx";
import {BlackFrame} from "./components/BlackFrame/BlackFrame.jsx";
import {TheySay} from "./components/TheySay/TheySay.jsx";
import {NewsArticles} from "./components/NewsArticles/NewsArticles.jsx";
import {Footer} from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header/>
      <Carusel/>
      <Products/>
      <ShopNow/>
      <HotDeal/>
      <OrganicFood/>
      <BlackFrame/>
      <TheySay/>
      <NewsArticles/>
      <Footer/>
    </>
  )
}

export default App
