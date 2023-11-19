import "./Footer.scss";
import cat from "../../assets/images/cat.png";
import Logo from "../../assets/images/Logo-white.png";
const Footer = () => {
  return (
    <div className="footer">
      <img className="catImg" src={cat} alt="cat" />
      <div className="container">
        <img  className="logo" src={Logo} alt="Logo" />
        <div className="menu">
          <p className="list-title"> menu</p>
          <div className="list-container">
            <ul className="list-group">
              <li>
                <a href="/#">首頁</a>
              </li>
              <li>
                <a href="#activity">最新活動</a>
              </li>
              <li>
                <a href="#contact">民眾服務信箱</a>
              </li>
            {/*</ul>
             <ul className="list-group"> */}
              <li>
                <a href="#main">候選人主張</a>
              </li>
              <li>
                <a href="#policy">政策議題</a>
              </li>
              <li>
                <a href="#donate">小額捐款</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="office-information">
          <p className="list-title">Office Information</p>
          <ul className="office-information">
            <li>地址：台北市喵星區毛茸茸大道88號喵喵大樓3樓</li>
            <li>電話：(02) 888-5678 </li>
            <li>郵件：meowoffice@linmeow.tw</li>
          </ul>
        </div>
      </div>
      <section className="copyright">
      版權聲明：© 2023 喵立翰（Miao Li-Han） 版權所有。
      </section>
    </div>
  );
};

export default Footer;
