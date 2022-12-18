import '../styles/header.sass'

function Header() {
    return (
        <header className={'header padding'}>
            <div className="logo">
                <h1>Hotline Shop</h1>
            </div>
            <div  className="navbar">
                <nav>
                    <ol>
                        <li className="nav_link"><a href="/">Home</a></li>
                        <li className="nav_link"><a href="/shop">Shop</a></li>
                        <li className="nav_link"><a href="#">About</a></li>
                        <li className="nav_link"><a href="">Cart</a></li>
                    </ol>
                </nav>
            </div>
        </header>
    )
}

export default Header;