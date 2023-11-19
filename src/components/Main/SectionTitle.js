import './SectionTitle.css'


const SectionTitle = (prop) => {

    const header = {
        'headerOfTeam': {
            tag: ' معرفی تیم ما ',
            title: ' ویدئو تبلیغاتی ما را تماشا کنید',
            body: '.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است'
        },
        'headerOfServices': {
            tag: ' سرویس ها ',
            title: ' بهترین خدمات ما ',
            body: '.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است'
        },
        'headerOfProtifo': {
            tag: ' نمونه کارها ',
            title: ' آخرین پروژه های ما ',
            body: '.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است'
        },
        'HeaderOfTariffs': {
            tag: ' تعرفه ها ',
            title: ' طرح های قیمتی',
            body: '.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است'
        },
        'headerOfOurTeam': {
            tag: ' تیم ما ',
            title: ' تیم خلاق ما ',
            body: '.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است'
        },

    }

    const [tag , title , body ] = [header[prop.id].tag  , header[prop.id].title , header[prop.id].body]

    return (
        <div className="section-title">
            <div>  {tag} </div>
            <h2> {title}  </h2>

            <p> {body}  </p>

        </div>
    )
}

export default SectionTitle