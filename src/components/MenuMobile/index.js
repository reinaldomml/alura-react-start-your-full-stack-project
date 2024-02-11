import perfil from '../../svg/perfil.svg'
import sacola from '../../svg/sacola.svg'

const icons = [perfil, sacola]

function MenuMobile() {
    return (
        <div className='navbar-start'>
            <div className='dropdown'>
                <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h8m-8 6h16'
                        />
                    </svg>
                </label>
                <ul
                    tabIndex={0}
                    className='menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                >
                    <li>
                        <a href='/category'>Categoria</a>
                        <a href='/estante'>Minha estante</a>
                        <a href='/favorites'>Favoritos</a>
                    </li>
                    {/* <li>
                            <a>Parent</a>
                            <ul className='p-2'>
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li> */}
                    <ul>
                        {icons.map((icon, index) => (
                            <li key={index}>
                                <img
                                    className='btn btn-ghost hover:bg-secondary mt-1'
                                    src={icon}
                                    alt='icon'
                                />
                            </li>
                        ))}
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default MenuMobile
