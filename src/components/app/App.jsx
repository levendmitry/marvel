
import Header from '../header/Header';
import RandomCharacterBanner from '../randomCharactersBanner';


import './app.scss';


const App = () => {
    return (
        <div className="app">
            <Header/>
            <main>
                <RandomCharacterBanner/>
                <div className="char__content">
                    <CharList/>
                    <CharInfo/>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}
export default App;