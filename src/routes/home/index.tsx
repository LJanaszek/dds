import { Link } from "react-router-dom";

import style from "./style.module.scss"
import { getGameRoute, PAGES } from "..";
import { useEffect } from "react";
import MoreInfo from "../../components/moreInfo";

export default function HomePage() {
    return (
        <div className={style.homePageView}>
            <MoreInfo />
            <h1>Wybierz scenariusz</h1>
            <nav className={style.nav}>
                <Link to={getGameRoute(PAGES.p12)} className={style.link} onClick={()=>{localStorage.clear()}}>
                    <div className={style.lekarz}></div>
                    <p>
                        Ochrona zdrowia
                    </p>
                    <span>
                        Sprawdź &gt;
                    </span>
                </Link>
                <Link to={getGameRoute(PAGES.p42)} className={style.link} onClick={()=>{localStorage.clear()}}>
                    <div className={style.oboz}></div>
                    <p>
                        Obóz wakacyjny
                    </p>
                    <span>
                        Sprawdź &gt;
                    </span>
                </Link>
                <Link to={getGameRoute(PAGES.p2)} className={style.link} onClick={()=>{localStorage.clear()}}>
                    <div className={style.trening}></div>
                    <p>
                        Klub sportowy
                    </p>
                    <span>
                        Sprawdź &gt;
                    </span>
                </Link>
                <Link to={getGameRoute(PAGES.p22)} className={style.link} onClick={()=>{localStorage.clear()}}>

                    <div className={style.lesson}></div>
                    <p>
                        Szkoła
                    </p>
                    <span>
                        Sprawdź &gt;
                    </span>
                </Link>
                <Link to={getGameRoute(PAGES.p32)} className={style.link} onClick={()=>{localStorage.clear()}}>

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