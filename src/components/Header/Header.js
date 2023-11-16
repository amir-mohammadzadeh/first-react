
import './Header.css'

const Header = () => {

    return (
        <header className='header'>
            <div className="header-content">
                <div className="header-right">
                    <div className="header-right_content">

                        <h1> راه انداری سایت هلی شرکتی و تجاری کسب وکار</h1>
                        <p>
                            ما یک آژانس دیجیتالی هستیم که به برندها کمک می کنیم تا به نتایج تجاری خود برسند.
                            ما تکنولوژی را ابزاری برای خلق چیزهای شگفت انگیز می بینیم.
                        </p>
                        <div className="buttonGroup">
                            <a className='btn start' href='#'>
                                شروع کنید
                            </a>
                            <a className='play' href='#'>
                                <span className="btn icon-btn">
                                    k
                                </span>
                                <span className="text"> تماشای ویدئو </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="header-left">
                    <img src="images/hero-image.jpg" alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header 