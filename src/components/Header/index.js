import MenuMobile from '../MenuMobile/index'
import MenuDesktop from '../MenuDesktop/index'

import logo from '../../svg/logo.svg'

function Header() {
    return (
        <div className='navbar bg-base-100'>
            <MenuMobile />
            <div className='btn btn-ghost'>
                <img src={logo} className='h-6' alt='logo' />
                <a className='normal-case text-xl'>AIBooks</a>
            </div>
            <MenuDesktop />
            <div className='navbar-end'>
                <a className='btn btn-sm'>Ver Ofertas</a>
            </div>
        </div>
    )
}

export default Header
