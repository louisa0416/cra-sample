import "./Activity.scss"
const Activity =()=>{

    return(
        <div className="activity">
            <div className="container">
                <p className="title">最新活動</p> 
                <div className="wrapper-activity">
                    <div className="activity-item">
                        <img src="" alt="" />
                        <div className="activity-time">
                            <p className="date">26</p>
                            <p className="month">DEC.</p>
                        </div>
                        <p className="activity-title">
                        參與台北寵物論壇 爭取貓咪友善環境
                        </p>
                        <p className="activity-description">
                        炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
                  VIP 休憩空間。
                        </p>
                    </div>
                    <div className="session"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Activity;