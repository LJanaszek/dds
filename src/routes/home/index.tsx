import { Link } from "react-router-dom";

import style from "./style.module.scss"
import { getGameRoute, PAGES } from "..";

export default function HomePage() {
    return (
        <div className={style.homePageView}>
            <h1>Wybierz scenariusz</h1>
            <nav className={style.nav}>
                <Link to={getGameRoute(PAGES.p12)} className={style.link}>
                    <div className={style.lekarz}></div>
                    <p>
                        Ochrona zdrowia
                    </p>
                    <span>
                        Sprawdź &gt;
                    </span>
                </Link>
                <Link to={getGameRoute(PAGES.p2)} className={style.link}>
                    <div className={style.oboz}></div>
                    <p>
                        Wakacyjny obóz
                    </p>
                    <span>
                        Sprawdź &gt;
                    </span>
                </Link>
                <Link to={getGameRoute(PAGES.p2)} className={style.link}>
                    <div className={style.trening}></div>
                    <p>
                        Klub sportowy
                    </p>
                    <span>
                        Sprawdź &gt;
                    </span>
                </Link>
                <Link to={getGameRoute(PAGES.p2)} className={style.link}>

                    <div className={style.lesson}></div>
                    <p>
                        Szkoła
                    </p>
                    <span>
                        Sprawdź &gt;
                    </span>
                </Link>
                <Link to={getGameRoute(PAGES.p2)} className={style.link}>

                    <div className={style.teacher}></div>
                    <p>
                        Kontakty online
                    </p>
                    <span>
                        Sprawdź &gt;
                    </span>
                </Link>
            </nav>
        </div>
    );
}