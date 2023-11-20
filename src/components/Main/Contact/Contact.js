import './Contact.css'

const Contact = () => {
    return (
        <section id='ContactUs' className="contact-section">
            <div className="contact-section_container">
                <div className="contact-right">
                    <div className="contact-right_content">
                        <Right_Card key={'Call_Info'} name="call" />
                        <Right_Card key={'Compani_Address'} name="address" />
                        <Right_Card key={'Answer_Time'} name="time" />
                    </div>
                </div>
                <div className="contact-left">
                    <div className="contact-left_content">
                        <Left_Card key={'Contact_Form'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact


const Right_Card = (prop) => {
    let icon, title, body;
    switch (prop.name) {
        case 'call':
            icon = "bi bi-telephone";
            title = " تماس ";
            body = <div className='caed-1-text_body'>
                09149718819
                <a href="#">
                    amir.code98@gmail.com
                </a>
            </div>
            break

        case 'address':
            icon = "bi bi bi-geo-alt";
            title = " آدرس ";
            body = <div className='caed-1-text_body'>
                ایران ، خیابان نادری
                خیابان یاس ، نبش فروشگاه ارغوان
            </div>
            break

        case 'time':
            icon = "bi bi-alarm";
            title = " زمان پاسخگویی ";
            body = <div className='caed-1-text_body'>
                24 ساعته / 7 روز هفته
                <br />
                زمان کاری: 10 صبح - 5:30 عصر
            </div>
            break
    }

    return (
        <div className="contact-card-1">
            <div className="card-1_content">
                <div className="caed-1-text">
                    <div className="card-1-icon">
                        <i className={icon}></i>
                    </div>
                    <h4>
                        {title}
                    </h4>
                </div>

                {body}

            </div>
        </div>
    )
}

const Left_Card = () => {
    return (
        <div className="contact-card-2">
            <div className="card-2_heder">
                <span>
                    در تماس باشید
                </span>
                <h2>
                    آماده برای شروع
                </h2>
                <p>
                    لورم ایپسوم متن ساختگی با
                    تولید سادگی نامفهوم از صنعت چاپ و با
                    استفاده از طراحان گرافیک چاپگرها است.
                </p>
            </div>
            <div className="card-2_container">
                <form action="" className="contact-form">
                    <input name="Name" id='contact-name' type="text" placeholder='نام' />
                    <input name="Email" id='contact-email' type="email" placeholder=' ایمیل ' />
                    <input name="Phone" id='contact-phone' type="tel" placeholder=' تلفن ' />
                    <input name="Subject" id='contact-subject' type="text" placeholder=' موضوع ' />
                    <textarea name="message" id="contact-message" cols="30" rows="5" placeholder=' پیام خود را بنویسید '>
                    </textarea>
                    <button type="submit">
                        ارسال پیام
                    </button>
                </form>
            </div>
        </div>
    )
}