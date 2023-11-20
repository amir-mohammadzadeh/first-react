
import './Services.css'
import SectionTitle from '../SectionTitle'

const Services = () => {
    const data = Data();
    const cards_list = [];

    data.forEach(i => {
        cards_list.push(<Service_Card
            key={'Service-Card_' + i.id}
            icon={i.icon}
            title={i.title}
            body={i.body}
        />)
    })

    return (
        <section id='Services' className="service-section">

            <SectionTitle key={'Services'} id={'headerOfServices'} />

            <div className="services-body">
                <div className="services-body_content">

                    {cards_list}

                </div>

            </div>

        </section>
    )

}

export default Services

const Service_Card = (prop) => {

    const [icon, title, body] = [prop.icon, prop.title, prop.body];

    return (
        <div className="service-card">
            <div className="icon-content">
                <i className={icon}></i>
            </div>

            <h4>
                {title}
            </h4>

            <p>
                {body}
            </p>
        </div>
    )
}

const Data = () => {

    const obj = [
        {
            id: 1,
            icon: 'bi bi-person-arms-up',
            title: 'طراحی باطراوت',
            body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها است. ',
        },
        {
            id: 2,
            icon: 'bi bi-bootstrap',
            title: 'بر پایه بوت استرپ',
            body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها است. ',
        },
        {
            id: 3,
            icon: 'bi bi-code-slash',
            title: 'کامپوننت های مجزا',
            body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها است. ',
        },
        {
            id: 4,
            icon: 'bi bi-speedometer2',
            title: 'سرعت بهینه',
            body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها است. ',
        },
        {
            id: 5,
            icon: 'bi bi-stack-overflow',
            title: 'کاملا سفارشی',
            body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها است. ',
        },
        {
            id: 6,
            icon: 'bi bi-arrow-repeat',
            title: 'آپدیت های منظم',
            body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها است. ',
        },

    ]

    return obj
}