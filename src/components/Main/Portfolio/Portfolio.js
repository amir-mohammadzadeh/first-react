import './Portfolio.css'
import SectionTitle from '../SectionTitle'
import Portfolio_Card from './Portfolio-Card'

const Portfolio = () => {

    const data = Data() ;
    const cards_list = [] ;

    data.forEach(i =>{
        cards_list.push(
            <Portfolio_Card 
            key={'Portfolio-' + i.id}
            values= {i}
            />
        )
    })

    return (
        <section id='Portfolios' className="portfolio-section">

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
                {cards_list}
            </div>
        </section>
    )
}

export default Portfolio


const Data = () => {

    const obj = [
        {
            id: 1,
            image: 'port-1.png',
            title: 'طراحی باطراوت',
            body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها است. ',
            linke_1: '#',
            linke_2: '#'
        },
        {
            id: 2,
            image: 'port-2.png',
            title: 'بر پایه بوت استرپ',
            body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها است. ',
            linke_1: '#',
            linke_2: '#'
        },
        {
            id: 3,
            image: 'port-4.png',
            title: 'کامپوننت های مجزا',
            body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها است. ',
            linke_1: '#',
            linke_2: '#'
        },
        {
            id: 4,
            image: 'port-3.png',
            title: 'سرعت بهینه',
            body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها است. ',
            linke_1: '#',
            linke_2: '#'
        },
        {
            id: 5,
            image: 'port-4.png',
            title: 'کاملا سفارشی',
            body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها است. ',
            linke_1: '#',
            linke_2: '#'
        },
        {
            id: 6,
            image: 'port-5.png',
            title: 'آپدیت های منظم',
            body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها است. ',
            linke_1: '#',
            linke_2: '#'
        },

    ]

    return obj
}