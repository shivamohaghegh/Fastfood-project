import './header.css'
import headerImg from '../../images/header.jpg'
const Header = () => {
    return (
        <div className="header">
            <img src={headerImg} alt="pizza-header"  className='header-img'/>
        </div>
    )
}

export default Header