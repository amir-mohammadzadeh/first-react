import './OurTeam.css'
import SectionTitle from '../SectionTitle'

const OurTeam = () => {

    return (
        <section className="ourTeam-section">
            <SectionTitle key="OurTeam" id='headerOfOurTeam' />

            <div className="ourTeam-section_content">

                <Teame_cards />
                <Teame_cards />
                <Teame_cards />

            </div>
        </section>
    )
}

export default OurTeam


const Teame_cards = () => {

    return (
        <div className="members-card">
            <div className="members-card_container">
                <div className="card-img_content">
                    <img src="images/profile.jpg" alt="" />
                </div>
                <div className="card-name">
                    <div className="card-name_content">
                        <span>
                            امیر محمدزاده
                        </span>
                        <span>
                            توسعه دهنده وب
                        </span>
                        <div className="team-social">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fa">i</i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa">i</i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa">i</i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa">i</i>
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