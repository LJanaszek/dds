import { Link } from "react-router-dom";

import style from "./style.module.scss"
import { getGameRoute, PAGES } from "..";

export default function HomePage() {
    return (
        <div className={style.homePageView}>
            <h1>Wybierz scenariusz</h1>
            <nav className={style.nav}>
                <Link to={getGameRoute(PAGES.p1)} className={style.link}>
                    <div className={style.lekarz}></div>
                    <p>
                        Wizyta u lekarza w przychodni
                    </p>
                    <span>
                        Sprawdź &gt;
                    </span>
                </Link>
                <Link to={getGameRoute(PAGES.p1)} className={style.link}>
                    <div className={style.oboz}></div>
                    <p>
                        Obóz wakacyjny
                    </p>
                    <span>
                        Sprawdź &gt;
                    </span>
                </Link>
                <Link to={getGameRoute(PAGES.p1)} className={style.link}>
                    <div className={style.trening}></div>
                    <p>
                        Trening piłkarski
                    </p>
                    <span>
                        Sprawdź &gt;
                    </span>
                </Link>
                <Link to={getGameRoute(PAGES.p1)} className={style.link}>

                    <div className={style.lesson}></div>
                    <p>
                        Lekcja w szkole
                    </p>
                    <span>
                        Sprawdź &gt;
                    </span>
                </Link>
                <Link to={getGameRoute(PAGES.p1)} className={style.link}>

                    <div className={style.teacher}></div>
                    <p>
                        Kontakt z nauczycielem poza szkołą, online
                    </p>
                    <span>
                        Sprawdź &gt;
                    </span>
                </Link>
            </nav>
        </div>
    );
}