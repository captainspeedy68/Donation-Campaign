import { useEffect } from "react";
import { useState } from "react";

const DisplayDonations = () => {
    const [donations, setDonations] = useState([]);
    useEffect(() => {
        fetch("donations.json")
        .then(res => res.json())
        .then(data => setDonations(data));
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default DisplayDonations;