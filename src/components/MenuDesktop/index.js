import perfil from '../../svg/perfil.svg'
import sacola from '../../svg/sacola.svg'

const icons = [perfil, sacola]

function MenuDesktop() {
    return (
        <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>
                <li>
                    <a href='/category'>Categoria</a>
                </li>
                <li>
                    <a href='/estante'>Minha estante</a>
                </li>
                <li>
                    <a href='/favorites'>Favoritos</a>
                </li>
                {/* <li tabIndex={0}>
                        <details>
                            <summary>Parent</summary>
                            <ul className='p-2'>
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </details>
                    </li> */}
            </ul>
            <ul className='menu menu-horizontal px-1'>
                {icons.map((icon, index) => (
                    <li key={index}>
                        <img
                            className='btn btn-ghost ml-1 max-h-10 hover:bg-secondary'
                            src={icon}
                            alt='icon'
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MenuDesktop
