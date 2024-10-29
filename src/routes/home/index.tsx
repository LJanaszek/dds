import { Link } from "react-router-dom";
import { getGameRoute, PAGES } from "..";
import style from "./style.module.scss"

export default function HomePage() {
    return (
        <div className={style.homePageView}>
            <h1>Wybierz scenariusz</h1>
            <Link to={getGameRoute(PAGES.pa1)}>Wizyta u lekarza</Link>
            <Link to={getGameRoute(PAGES.pb2)}>Obóz wakacyjny</Link>
            <Link to={getGameRoute(PAGES.pb3)}>Trening piłkarski</Link>
            <Link to={getGameRoute(PAGES.pb4)}>Lekcja w szkole</Link>
            <Link to={getGameRoute(PAGES.pb5)}>Kontakt z nauczycielem poza szkołą, online</Link>
        </div>
    );
}