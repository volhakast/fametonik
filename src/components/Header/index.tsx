function Header() {

    return (
        <header className="relative">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mt-8.5 lg:justify-between">
                <img
                    className="w-[108px] h-[46px] mt-5 mb-5 lg:hidden"
                    alt="Logo"
                    src="images/logo_sm.webp"
                    srcSet="images/logo_sm.webp images/logo_sm_2x.webp 2x"
                />
                <img
                    className="w-[173px] h-[74px] hidden lg:block"
                    alt="Logo"
                    src="images/logo_lg.webp"
                    srcSet="images/logo_lg.webp images/logo_lg_2x.webp 2x"
                />
                <nav className="hidden lg:block">
                    <ul className="lg:flex lg:items-start space-x-12">
                        <li className="leading-none"><a href="#"
                                                        className="nav-link text-main-gray text-lg leading-none">About
                            us</a></li>
                        <li className="leading-none"><a href="#"
                                                        className="nav-link text-main-gray text-lg leading-none">Contact</a>
                        </li>
                    </ul>
                </nav>

                <button className="lg:hidden text-white absolute right-1 top-1/2 -translate-y-1/2">
                    <img
                        className="w-5 h-4 mt-5 mb-5"
                        alt="Logo"
                        src="images/menu.svg"
                    />
                </button>
            </div>
        </header>
    )
}

export default Header
