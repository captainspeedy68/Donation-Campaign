import { Link } from 'react-router-dom';

const AppliedDonationDisplay = ({ donation }) => {
    const { id, picture, title, price, text_button_bg, category, category_bg, card_bg } = donation;
    const styles = {
        backgroundColor: text_button_bg,
        card: {
            backgroundColor: card_bg
        },
        text: {
            color: text_button_bg
        },
        category: {
            backgroundColor: category_bg
        }
    }
    return (
        <div className='max-sm:m-10'>
            <div className="md:card md:card-side md:h-56 bg-base-100 shadow-xl " style={styles.card}>
                <figure className='md:w-56 overflow-hidden'><img className='w-full h-full object-cover' src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <div className="md:flex md:justify-center text-sm w-20 text-center" style={{ ...styles.category, ...styles.text }}>
                        <p className='text-sm font-normal' >{category}</p>
                    </div>

                    <h2 className="font-semibold text-2xl">{title}</h2>
                    <p className='text-base font-semibold' style={styles.text}>{price}</p>
                    <div className="card-actions">
                        <Link to={`/donation/${id}`}><button className="btn border-none btn-primary text-white" style={styles}>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedDonationDisplay;