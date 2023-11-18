import './Portfolio-Card.css'

const Portfolio_Card = () => {

    return (
        <div className="portfolio-card">
            <div className="portfolio-card_header">
                <img src="images/port-4.png" alt="" />
                <div className="portfolio-image-links">
                    <a href="#">#</a>
                    <a href="#">#</a>
                </div>
            </div>
            <div className="portfolio-card_body">

                <h4>
                    <a href="">
                        طراحی گرافیکی
                    </a>
                </h4>

                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    از صنعت چاپ و طراحان گرافیک است.
                </p>

            </div>

        </div>
    )

}


export default Portfolio_Card