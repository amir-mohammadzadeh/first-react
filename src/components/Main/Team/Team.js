import './Team.css'

const Team = () => {

    const test = (f) => {
        console.log(f)
    }

    return (
        <section className="team-section">
            <div className="team-content">
                <div className="team-section-title">
                    <h2>
                        ویدئو تبلیغاتی ما را تماشا کنید
                    </h2>

                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                        از طراحان گرافیک چاپگرها و متون بلکه روزنامه است.
                    </p>
                </div>

                <div className="team-video-content">
                    <video id="video" onPlay={() => test('play')} onPause={() => test('pause')} className='team-video' src="images/React.mp4" controls poster='images/image-3.png'>
                        Meat with our Team
                    </video>
                </div>
            </div>
        </section>
    )

}

export default Team