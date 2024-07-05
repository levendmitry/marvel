
import Button from '../button/Button';

import './randomCharacterBanner.scss';

const RandomCharacterBanner = () => {

    return(
        <div>
            <div>
                Блок с информацией по чару
                <img alt="Random char"></img>
                <div>
                    Описание рандомного чела
                    <p>Thor</p>
                    <p>
                        As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
                    </p>
                    <div>Блок с кнопками
                        <Button/>
                        <Button/>
                    </div>
                    <img alt="mjolnir"/>
                </div>
            </div>
            <div>
                Блок со статичным баннером
                <p>
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p>
                    Or choose another one
                </p>
                <Button/>
            </div>
        </div>
    )
}

export default RandomCharacterBanner;