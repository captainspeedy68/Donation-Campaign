import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonationIds } from '../../Utility/LocalStorage';
import AppliedDonationDisplay from '../AppliedDonationDisplay/AppliedDonationDisplay';

const Donation = () => {
    const storedDonations = useLoaderData();
    if (storedDonations === undefined) {
        
        return <div>Loading...</div>;
    }

    if (!Array.isArray(storedDonations)) {
        
        return <div>Error: Unable to fetch donations</div>;
    }
    const [donations, setDonations] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    const [showButton, setShowButton] = useState(true);
    // const [isIdsArray, setIsIdsArray] = useState(true);
    const handleShowAllClick = () => {
        setDataLength(donations.length);
        setShowButton(false);
    };
    useEffect(() => {
        const donationsAppliedIds = getStoredDonationIds();
        // setIsIdsArray(Array.isArray(donationsAppliedIds));
        // console.log(isIdsArray);
        if (donationsAppliedIds.length > 0) {
            const appliedDonations = [];
            for (const id of donationsAppliedIds) {
                const storedDonation = storedDonations.find(donation => donation.id === id);
                if (storedDonation) {
                    appliedDonations.push(storedDonation);
                }
            }
            setDonations(appliedDonations);
        }
    }, [storedDonations])

    return (
        <div>
            {/* {isIdsArray} */}
            <div className='md:grid md:grid-cols-2 gap-5 my-10'>
                {
                    donations.length > 0 &&
                    donations.slice(0, dataLength).map(donation => <AppliedDonationDisplay key={donation.id} donation={donation}></AppliedDonationDisplay>)
                }
            </div>
            <div className="flex justify-center">
                {
                    donations.length > 4 && <button className={`btn btn-success text-white ${(showButton ? '' : 'hidden')}`} onClick={handleShowAllClick}>Show All</button>

                }
                
            </div>
        </div>

    );
};

export default Donation;