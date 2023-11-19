import "./Main.scss";
import candidateImg from "../../assets/images/candidateImg.png";
import sloganEng from "../../assets/images/slogan-eng.png";
const Main = () => {
  return (
    <div className="main" id="main">
      <div className="container">
        <div className="main-section">
          <section>
            <p className="sub-title">2023 THE F2E 立委競選</p>
            <p className="main-title">
              從<span className="highlight">喵</span>的眼中
              <br />
              看見台灣
            </p>

            <p className="text-horizontal">Miao Li-Han</p>
          </section>

          <p className="text-vertical">喵立翰</p>
        </div>

        <div className="political-opinions-container">
          <img className="candidate" src={candidateImg} alt="candidate" />

          <img className="sloganEng" src={sloganEng} alt="sloganEng" />
          <h1 className="political-opinions-title">
            護航台灣幸福經濟 從照顧每一隻貓咪開始
          </h1>
          <h4 className="political-opinions-description">
            我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
            GDP 經濟帶來巨大效益。
            <br />
            <br />
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Main;
