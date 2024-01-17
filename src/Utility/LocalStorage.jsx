const getStoredDonationIds = () => {
    const storedDonationsId = localStorage.getItem("donation-applications");
    if (storedDonationsId){
        return JSON.parse(storedDonationsId);
    }
    else return [];
}

const saveDonationApplication = id => {
    const storedIds = getStoredDonationIds();
    const exists = storedIds.find(storedId => storedId === id);
    if (!exists){
        storedIds.push(id);
        localStorage.setItem("donation-applications",JSON.stringify(storedIds));
    }
}
export {saveDonationApplication, getStoredDonationIds}