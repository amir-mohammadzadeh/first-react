import './OurTeam.css'
import SectionTitle from '../SectionTitle'

const OurTeam = () => {
    const data = Data();
    const members_list = [];

    data.map(item => {
        members_list.push(
            <Teame_cards
                key={'Member-' + item.id}
                values={item}
            />
        )
    }) ;

    return (
        <section className="ourTeam-section">
            <SectionTitle key="OurTeam" id='headerOfOurTeam' />

            <div className="ourTeam-section_content">
                {members_list}
            </div>
        </section>
    )
}

export default OurTeam


const Teame_cards = (prop) => {
    const data = prop.values;
    const [image, name, job, sociale_linkes] = [data.image, data.name, data.job, data.socials];

    return (
        <div className="members-card">
            <div className="members-card_container">
                <div className="card-img_content">
                    <img src={"images/" + image} alt={name + ' - ' + job} />
                </div>
                <div className="card-name">
                    <div className="card-name_content">
                        <span>
                            {name}
                        </span>
                        <span>
                            {job}
                        </span>
                        <div className="team-social">
                            <ul>
                                <li>
                                    <a href={sociale_linkes.github}>
                                        <i className="bi bi-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={sociale_linkes.linkedin}>
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={sociale_linkes.facebook}>
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={sociale_linkes.twitter}>
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


const Data = () => {

    const obj = [
        {
            id: 1,
            image: 'micasa.jpg',
            name: 'میکاسا',
            job: ' عشق ارن ',
            socials: {
                facebook: '#',
                linkedin: '#',
                twitter: '#',
                github: '#',
            }
        },
        {
            id: 2,
            image: 'eren.jpg',
            name: ' ارن یگر ',
            job: ' غول مبارز ',
            socials: {
                facebook: '#',
                linkedin: '#',
                twitter: '#',
                github: '#',
            }
        },
        {
            id: 3,
            image: 'armin.jpg',
            name: ' آرمین ',
            job: ' غول عظیم الجسه ',
            socials: {
                facebook: '#',
                linkedin: '#',
                twitter: '#',
                github: '#',
            }
        },
    ]
    return obj
}