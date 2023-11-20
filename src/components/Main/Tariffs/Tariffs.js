import './Tariffs.css'
import SectionTitle from '../SectionTitle'


const Tariffs = () => {

    const data = Data();
    const LIST = [];

    data.map(item => {
        LIST.push(
            <Tariff_Card
                key={'Tariff-' + item.id}
                values={item}
            />
        )
    });
    return (
        <section className="tariff-section">
            <SectionTitle key="Tariffs" id="HeaderOfTariffs" />
            <div className="tariffs-section_content">
                {LIST}
            </div>
        </section>
    )
}

export default Tariffs



const Tariff_Card = (prop) => {
    const data = prop.values;
    const [title, body, price, linke, propertys] = [data.title, data.body, data.price, data.linke, data.propertys];
    let bg;
    const icon_style = (p) => {
        if (p) {
            return 'bi bi-check2-circle i-active'
        } else {
            return 'bi bi-x-circle i-disable'
        }
    }

    title == 'ویژه' ? bg = 'btn-bg' : bg = '';

    return (
        <div className="tariff-card">
            <div className="tariff-card_content">
                <div>
                    <h6 className={'tariff-title ' + bg}>
                        {title}
                    </h6>
                    <p className='tariff-text'>
                        {body}
                    </p>
                </div>
                <div className="tariff-price">
                    <span className="price-r">
                        تومان
                    </span>
                    <span className="price-p">
                        {price}
                    </span>
                    <span className="price-l">
                        /ماهیانه
                    </span>
                </div>
                <div className={"tariff-btn " + bg}>
                    <a href={linke}>
                        آزمایشی رایگان شروع کنید
                    </a>
                </div>

                <div className="tariff-property">
                    <ul>
                        <li>
                            <i className={icon_style(propertys.hostSpace)}></i>
                            1 گیگابیت فضای هاست
                        </li>
                        <li>
                            <i className={icon_style(propertys.bankPay)}></i>
                            درگاه پرداخت بانکی
                        </li>
                        <li>
                            <i className={icon_style(propertys.mobileApp)}></i>
                            اپبیکیشن موبایل
                        </li>
                        <li>
                            <i className={icon_style(propertys.currency)}></i>
                            درگاه پرداخت ارزی

                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}


const Data = () => {

    const obj = [
        {
            id: 1,
            title: 'ساده',
            body: ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.  ',
            price: 0,
            linke: '#',
            propertys: {
                hostSpace: true,
                bankPay: true,
                mobileApp: false,
                currency: false,
            }
        },
        {
            id: 3,
            title: 'ویژه',
            body: ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.  ',
            price: 99,
            linke: '#',
            propertys: {
                hostSpace: true,
                bankPay: true,
                mobileApp: true,
                زurrency: false,
            }
        },
        {
            id: 3,
            title: 'پریمیوم',
            body: '  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ',
            price: 150,
            linke: '#',
            propertys: {
                hostSpace: true,
                bankPay: true,
                mobileApp: true,
                زurrency: true,
            }
        },

    ]
    return obj
}