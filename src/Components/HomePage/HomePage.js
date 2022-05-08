import Banner from '../Banner/Banner';
import Farmers from '../Farmers/Farmers';
import Footer from '../Footer/Footer';
import Inventories from '../Inventories/Inventories';
import WhyToChooseUs from '../WhyToChooseUs/WhyToChooseUs';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <WhyToChooseUs></WhyToChooseUs>
            <Farmers></Farmers>
            <Footer></Footer>

        </div>
    );
};

export default HomePage;