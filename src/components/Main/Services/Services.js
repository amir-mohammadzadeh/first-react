
import './Services.css'
import SectionTitle from '../SectionTitle'

const Services = () => {


    return (
        <section className="service-section">

            <SectionTitle key={'Services'} id={'headerOfServices'} />

            <div className="services-body">
                <div className="services-body_content">

                    <Service_Card />
                    <Service_Card />
                    <Service_Card />
                    <Service_Card />
                    <Service_Card />
                    <Service_Card />

                </div>

            </div>

        </section>
    )

}

export default Services



const Service_Card = () => {

    return (
        <div className="service-card">
            <div className="icon-content">

            </div>

            <h4>
                عنوان سرویس
            </h4>

            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است.
            </p>
        </div>
    )
}
