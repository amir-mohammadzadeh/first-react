import './Portfolio.css'
import SectionTitle from '../SectionTitle'
import Portfolio_Card from './Portfolio-Card'

const Portfolio = () => {
    return (
        <section className="portfolio-section">

            <SectionTitle key='Portfolio' id='headerOfProtifo' />

            <div className="portfolio-filters">
                <ul className="portfolio-filters_content">
                    <li className="filter-item filter_active">تمام پروژه ها </li>
                    <li className="filter-item">برندینگ</li>
                    <li className="filter-item">بازاریابی</li>
                    <li className="filter-item">برنامه ریزی</li>
                    <li className="filter-item">تحقیقاتی</li>
                </ul>
            </div>

            <div className="portfolio-content">
                <Portfolio_Card />
                <Portfolio_Card />
                <Portfolio_Card />
                <Portfolio_Card />
                <Portfolio_Card />
                <Portfolio_Card />

            </div>
        </section>
    )
}

export default Portfolio