import { ReactComponent as LogoIcon } from './images/logo.svg'
import { ReactComponent as UserIcon } from './images/user.svg'
import AvatarImage from './images/avatar.jpg'

import './header.scss'

const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <LogoIcon className="header__logo"/>
                    <label className="header__search">
                        <input placeholder="Найти..." type="text"/>
                    </label>
                    <div className="header__profile profile">
                        <span className="profile__name">Константин</span>
                        <img className="profile__image" src={AvatarImage} alt="user avatar image"/>
                        <UserIcon className="profile__icon"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export { Header }