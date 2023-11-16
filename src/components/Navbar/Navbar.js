import logo from "../../assets/images/Logo.png";
import iconDonation from "../../assets/images/donation.png";
import "./Navbar.scss"
const Navbar = () => {
  // RENDER
  return (
    <nav className="nav">
     
      {/* <Container></Container> */}
      <div className="container">
        {/* <a href="#"> */}
          <img className="logo" src={logo} alt="logo" />
        {/* </a> */}

        <ul>
            <li><a href="#main">候選人主張</a></li>
            <li><a href="#activity">最新活動</a></li>
            <li><a href="#policy">政策議題</a></li>
            <li><a href="#contact">民眾服務信箱</a></li>
            <li><div className="button">
                <img src={iconDonation} alt="logo" />
                小額捐款</div></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
