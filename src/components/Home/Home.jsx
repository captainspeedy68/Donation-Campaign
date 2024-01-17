import CategoryContextProvider from '../../Context/CategoryContextProvider';
import DisplayDonations from '../DisplayDonations/DisplayDonations';
import Search from '../Search/Search';

const Home = () => {
    
    return (
        <div>
            <CategoryContextProvider>
                <div>
                <Search></Search>
                <DisplayDonations></DisplayDonations>
                </div>
            </CategoryContextProvider>

        </div>
    );
};

export default Home;