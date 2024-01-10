import { useEffect } from "react";
import { useState } from "react";
import IndividualDonation from "../../IndividualDonation/IndividualDonation";

const DisplayDonations = () => {
    const [donations, setDonations] = useState([]);
    useEffect(() => {
        fetch("donations.json")
        .then(res => res.json())
        .then(data => setDonations(data));
    }, [])
    return (
        <div className="grid grid-cols-3 gap-8">
            {
                donations.map(donation => <IndividualDonation key={donation.id} donation = {donation}></IndividualDonation>)
            }
        </div>
    );
};

export default DisplayDonations;