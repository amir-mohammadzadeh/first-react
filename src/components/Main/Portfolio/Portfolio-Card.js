import './Portfolio-Card.css'

const Portfolio_Card = (prop) => {
    const data = prop.values

    const [image , title , body , linke_1 , linke_2 ] = [data.image, data.title, data.body , data.linke_1 , data.linke_2 ]

    return (
        <div className="portfolio-card">
            <div className="portfolio-card_header">
                <img src={ 'images/' + image } alt={title} />
                <div className="portfolio-image-links">
                    <a href={linke_1}>
                       <i className="bi bi-zoom-in"></i> 
                    </a>
                    <a href={linke_2}>
                       <i className="bi bi-link-45deg"></i>                     
                    </a>
                </div>
            </div>
            <div className="portfolio-card_body">

                <h4>
                    <a href="">
                        {title}
                    </a>
                </h4>

                <p>
                    {body}
                </p>

            </div>

        </div>
    )

}


export default Portfolio_Card