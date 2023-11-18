import './Tariffs.css'
import SectionTitle from '../SectionTitle'


const Tariffs = () => {

    return (
        <section className="tariff-section">
            <SectionTitle key="Tariffs" id="HeaderOfTariffs" />
            <div className="tariffs-section_content">
                <Tariff_Card key= {1} mode="1"  />
                <Tariff_Card key={2}  mode="2" />
                <Tariff_Card key={3}  mode="3" />
            </div>
        </section>
    )
}

export default Tariffs



const Tariff_Card = (mode) => {
    let bg ;
    mode.mode == '2' ? bg = 'btn-bg' : bg= '' ;

    return (
        <div className="tariff-card">
            <div className="tariff-card_content">
                <div>
                    <h6 className={ 'tariff-title ' + bg }>
                        ساده
                    </h6>
                    <p className='tariff-text'>
                        لورم ایپسوم متن ساختگی با تولید
                        سادگی نامفهوم از صنعت چاپ است.
                    </p>
                </div>
                <div className="tariff-price">
                    <span className="price-r">
                        تومان
                    </span>
                    <span className="price-p">
                        190
                    </span>
                    <span className="price-l">
                        /ماهیانه
                    </span>
                </div>
                <div className={"tariff-btn " + bg }>
                    <a href="#">
                        آزمایشی رایگان شروع کنید
                    </a>
                </div>

                <div className="tariff-property">
                    <ul>
                        <li>
                            <i className="fa">i</i>
                            1 گیگابیت فضای هاست
                        </li>
                        <li>
                            <i className="fa">i</i>
                            درگاه پرداخت بانکی
                        </li>
                        <li>
                            <i className="fa">i</i>
                            اپبیکیشن موبایل
                        </li>
                        <li>
                            <i className="fa">i</i>
                            درگاه پرداخت ارزی

                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}