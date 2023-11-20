
import './Navigation.css'


const Navigation = () => {

    const openSideMenu = () => {
        const button = document.getElementById('collaps_button');
        const sidemenu = document.getElementById('Side-Menu')
        button.classList.toggle('collaps-open');
        button.classList.length > 1 ?
            sidemenu.classList.replace('h-0' ,'h-22')
            :
            sidemenu.classList.replace('h-22' ,'h-0') ;

    }

    return (
        <nav className='navbar'>
            <div className="nav-container">
                <div className="nav-logo">
                    A.o.T
                    <img src="icon.png" alt="logo" />
                </div>

                <button id='collaps_button' className="collaps-btn" onClick={openSideMenu}>
                    <svg>
                        <line x1="0" y1="0" x2="30" y2="0" />
                    </svg>
                    <svg>
                        <line x1="0" y1="0" x2="20" y2="0" />
                    </svg>
                    <svg>
                        <line x1="0" y1="0" x2="30" y2="0" />
                    </svg>
                </button>

                <div id='Side-Menu' className="sideMenu h-0" height="unset">
                    <ul id='NavigationBar' className='nav-menu'>
                        <li className="nav-item">
                            <a href="#Header">
                                خانه
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Services">
                                سرویس ها
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Portfolios">
                                نمونه کارها
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Tariffs">
                                تعرفه ها
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#OurTeam">
                                تیم ما
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#ContactUs">
                                تماس باما
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navigation