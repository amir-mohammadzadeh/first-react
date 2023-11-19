
import './Navigation.css'


const Navigation = () =>{

    return(
        <nav className='navbar'>
            <div className="nav-container">
                <div className="nav-logo">
                    Logo
                    <img src="logo192.png" alt="logo" />
                </div>

                <ul className='nav-menu'>
                    <li className="nav-item">خانه</li>
                    <li className="nav-item">سرویس ها</li>
                    <li className="nav-item">نمونه کارها</li>
                    <li className="nav-item">تعرفه ها</li>
                    <li className="nav-item">تیم ما</li>
                    <li className="nav-item">تماس باما</li>
                </ul>

                <button className="collaps-btn">
                    -
                </button>
            </div>
        </nav>
    )
}

export default Navigation