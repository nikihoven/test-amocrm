import _1 from './images/1.jpg'
import _2 from './images/2.jpg'
import _3 from './images/3.jpg'
import _4 from './images/4.jpg'
import _5 from './images/5.jpg'
import _6 from './images/6.jpg'
import _7 from './images/7.jpg'

import './content.scss'

const arr = [
    _1, _2, _3, _4, _5, _6, _7
]

const Content = () => {

    return (
        <main className="content">
            <div className="container">
                <div className="content__container">
                    <h1 className="content__title">Наши партнёры</h1>
                    <ul className="content__list">
                        {arr.map((el, i) =>
                            <li key={i} className="content__card card">
                                <img className="card__image" src={el} alt=""/>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export { Content }