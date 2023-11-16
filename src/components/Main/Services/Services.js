
import './Services.css'
import Service_Card from './Service_Card'

const Services = () => {

   

    return (
        <section className="service-section">
            <div className="services-title">
                <div className="services-title_content">
                    <h2>
                        بهترین خدمات ما
                    </h2>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                        با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است.
                    </p>
                </div>

                <div className="services-body">
                    <div className="services-body_content">

                        <Service_Card  />
                        <Service_Card  />
                        <Service_Card  />
                        <Service_Card  />
                        <Service_Card  />
                        <Service_Card  />


                    </div>


                </div>
            </div>
        </section>

    )

}

export default Services