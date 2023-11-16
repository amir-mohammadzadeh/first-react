
import './About.css'

const About = () => {

    return (
        <section className="about-section">
            <div className="about-content">
                <div className="about-left">
                    <div className="about-left_content">
                        <h5>

                            داستان ما
                        </h5>
                        <h2>
                            تیم ما با تجربه و دانش همراه است
                        </h2>
                        <div className="about-button_group">
                            <button className='btn btn-active'>
                                ماکی هستیم
                            </button>
                            <button className='btn'>
                                چشم انداز ما
                            </button>
                            <button className='btn'>
                                تاریخ ما
                            </button>
                        </div>

                        <div className="adout-text_content">
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نـامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                چـاپـگـرهـا و متون بلکه روزنامه و مجله در ستون
                                و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                                و کـاربردهتای متنوع بـا هـدف بهبود
                                ابـزارهـای کـاربـردی می باشـد.
                            </p>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نـامفهوم از صنعت چاپ
                                و با استفاده از طراحان گرافیک است. چـاپـگـرهـا و متون است.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="about-right">
                    <img src="images/image-2.png" alt="" />
                </div>
            </div>
        </section>
    )

}

export default About 