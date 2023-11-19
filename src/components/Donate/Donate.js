import iconDonation from "../../assets/images/donation.png";
import "./donate.scss";
const Donate = ()=>{
    return(
        <div className="donate" id="donate">
            <div className="container">
                <div className="donate-info">
                    <p className="title">小額捐款</p>
                    <p className="sub-title"> 您的小筆捐款，是每隻毛孩未來的大大動力！</p>
                    <p className="description">    累積總金額</p>
                    <p className="total-amount">NT$987,655,873</p>

                    <div className="button">
                        <img src={iconDonation} alt="logo" />
                        前往捐款</div>
                </div>
            </div>
        </div>
    )
}

export default Donate;