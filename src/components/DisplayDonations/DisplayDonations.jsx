import { useEffect, useState } from "react";
import { useCategoryContext } from "../../Context/CategoryContextProvider";
import IndividualDonation from "../../IndividualDonation/IndividualDonation";

const DisplayDonations = () => {
    const [donations, setDonations] = useState([]);
    const { category } = useCategoryContext();
    const [categorizedDonations, setCategorizedDonations] = useState([]);

    useEffect(() => {
        fetch("donations.json")
            .then((res) => res.json())
            .then((data) => setDonations(data));
        setCategorizedDonations(donations);
    }, [donations]);
    //   const c = donations.find(donation => donation.);
    useEffect(() => {
        if (category === "Food" || category === "Health" || category === "Clothing" || category === "Education") {
            if (category) {
                const filteredDonations = donations.filter(
                    (donation) => donation.category === category
                );
                setCategorizedDonations(filteredDonations);
            }
        }
        else {
            setCategorizedDonations(donations);
        }
    }, [category, donations]);

    return (
        <div>
            {/* <h1>{c}</h1> */}
            <div className="md:grid md:grid-cols-3 gap-8 ">
                {categorizedDonations.map((donation) => (
                    <IndividualDonation key={donation.id} donation={donation} />
                ))}
            </div>
        </div>
    );
};

export default DisplayDonations;
