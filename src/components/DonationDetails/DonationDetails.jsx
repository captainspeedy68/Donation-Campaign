import { useLoaderData, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationApplication } from '../../Utility/LocalStorage';

const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt)
    const { picture, price, description, title, text_button_bg } = donation;
    // console.log(id)
    const style = {
        backgroundColor: text_button_bg
    }
    const handleDonate = () => {
        saveDonationApplication(idInt);
        toast("Donation Complete");
    }
    return (
        <div >
            <div>
                <div className='ml-16'>
                    <div className='relative'>
                        <div className=''>
                            <img src={picture} className="w-11/12 h-3/6 " alt="" />

                        </div>
                        <div className='absolute bottom-0 left-0 right-0 bg-[#0B0B0B80] w-11/12 h-1/5 items-center inline-flex'>
                            <button className='btn text-white items-center ml-14 rounded-none border-none w-28' onClick={handleDonate} style={style}>Donate {price}</button>

                        </div>

                    </div>
                </div>
                <div className='font-extrabold text-4xl mx-12 my-5'>{title}</div>
                <div className='font-normal text-base mx-12 my-5'>{description}</div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default DonationDetails;