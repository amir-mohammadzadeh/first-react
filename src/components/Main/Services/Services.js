
import './Services.css'
import Service_Card from './Service_Card'
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