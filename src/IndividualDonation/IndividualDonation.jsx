const IndividualDonation = ({ donation }) => {
    const { picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation;
    // const d = donation;
    // const bg_color = "#FF8C00";
    const cardBg = {
        backgroundColor: card_bg,
    };
    const categoryBg = {
        backgroundColor: category_bg,
    };
    // const bgCategory = category_bg.toLowerCase();
    const textButtonBackground = { color: text_button_bg };
    return (
        <div>
            <div className={`card card-compact shadow-xl w-fit h-fit`} style={cardBg}>
                <figure className=""><img src={picture} alt="" /></figure>
                <div className={`card-body`}>
                    <div className="flex justify-center w-20" style={{...categoryBg}}>
                        <h2 className="text-sm font-medium" style={{ ...textButtonBackground}}>{category}</h2>
                    </div>

                    <p className="font-semibold text-xl" style={textButtonBackground}>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default IndividualDonation;