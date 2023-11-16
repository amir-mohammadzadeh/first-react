import './Team.css'

import SectionTitle from '../SectionTitle'

const Team = () => {

    const test = (f) => {
        console.log(f)
    }

    return (
        <section className="team-section">
            <div className="team-content">

                <SectionTitle key={'Team'} id={'headerOfTeam'} />

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