import "./Contact.scss";

const Contact = ()=>{
    return(
        <div className="contact">
             <div className="container">

                <div className="service">
                    <p className="title">民眾服務信箱</p>
                    <p className="description">您的聲音，我們的行動！
    親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！</p>
                </div>

                <div className="form">
                <input 
                type="text"
                name="name"
                placeholder="您的姓名" />
            <input
                type="text"
                name="email"
                placeholder="您的email"/>
            <input
                type="text"
                name="phone"
                placeholder="您的手機" />
            <textarea
                rows={4}
                name="advise"
                placeholder="您的建言"></textarea>
            <input type="submit" className="send-message-button" value="送出意見"/>
                
            
                </div>
            </div>
        </div>
    )
}
export default Contact;