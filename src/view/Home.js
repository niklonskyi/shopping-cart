import Header from "../components/Header";
import '../styles/home.sass';

function Home() {
    return (
        <div  className={'home background'}>
            <Header></Header>
            <main className={'padding'}>
                <div>
                    <div className="center_heading">
                        <h2>"Why are we having this conversation?"</h2>
                    </div>
                    <div className="content">
                        <div className="article">
                            <h3>You have one new message! <br/>
                                *BEEP*</h3>
                            <br/>
                            <p>Oh, I see... <br/>
                            You need <b><i>new equipment</i></b>, right? <br/>
                            Check out our store. <br/>
                            Hope you find something for your needs. <br/>
                            </p>
                            <br/>
                            <h3>... <br/>
                                *CLICK*</h3>
                        </div>
                        <div className="shop_link">
                            <div className="link">
                                <a href="/shop">SHOP</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;