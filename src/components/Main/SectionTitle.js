import './SectionTitle.css'


const SectionTitle = (prop) => {

    const header = {
        'headerOfTeam': {
            title: ' ویدئو تبلیغاتی ما را تماشا کنید',
            body: '.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است'
        },
        'headerOfServices': {
            title: ' بهترین خدمات ما ',
            body: '.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است'
        },
        'headerOfProtifo': {
            title: ' آخرین پروژه های ما ',
            body: '.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است'
        },

    }

    const [ title , body ] = [header[prop.id].title , header[prop.id].body]

    return (
        <div className="section-title">

            <h2> {title}  </h2>

            <p> {body}  </p>

        </div>
    )
}

export default SectionTitle