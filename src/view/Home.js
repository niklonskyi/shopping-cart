import Header from "../components/Header";
import '../styles/home.sass';
import { TypeAnimation } from 'react-type-animation';
import FullHeight from "react-full-height";

function Home(props) {
    return (
        <div  className={'home background'}>
            <main className={'padding'}>
                <div>
                    <div className="center_heading">
                        <h2>"Why are we having this conversation?"</h2>
                    </div>
                    <div className="content">
                        <div className="article">
                            <TypeAnimation
                                sequence={[
                                    'You have one new message!',
                                    1000,
                                    'You have one new message! \n *BEEP*'
                                ]}
                                wrapper='h3'
                                cursor={true}
                                style={{whiteSpace: 'pre-line'}}
                            />
                            <br/>
                            <TypeAnimation
                                sequence={[
                                    5000,
                                    'Oh, I see.',
                                    500,
                                    'Oh, I see..',
                                    500,
                                    'Oh, I see...',
                                    500,
                                    'Oh, I see... \n You need new equipment, right?',
                                    1000,
                                    'Oh, I see... \n You need new equipment, right? \n Check out our store.',
                                    1000,
                                    'Oh, I see... \n You need new equipment, right? \n Check out our store. \n Hope you find something for your needs.'
                                ]}
                                wrapper='p'
                                cursor={true}
                                style={{whiteSpace: 'pre-line'}}
                            />
                            <br/>
                            <TypeAnimation
                            sequence={[
                                19000,
                                '...'
                            ]}
                            wrapper='h3'/>
                            <br/>
                            <a href="/shop" style={{width: '100px'}}>
                                <TypeAnimation
                                    sequence={[
                                        20000,
                                        '*CLICK*'
                                    ]}
                                    wrapper='h3'/>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;