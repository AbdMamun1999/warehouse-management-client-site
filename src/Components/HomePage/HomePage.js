import Banner from '../Banner/Banner';
import Farmers from '../Farmers/Farmers';
import Footer from '../Footer/Footer';
import Inventories from '../Inventories/Inventories';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Farmers></Farmers>
            <Footer></Footer>

        </div>
    );
};

export default HomePage;