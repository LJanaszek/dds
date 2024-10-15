import { Link } from "react-router-dom";
import { getGameRoute, PAGES } from "..";

export default function HomePage() {
    return (
        <div>
            <h1>Wybierz scenariusz</h1>
            <Link to={getGameRoute(PAGES.P1a)} onClick={()=>{}}>Wizyta u lekarza</Link>
            <button>Obóz wakacyjny</button>
            <button>Trening piłkarski</button>
            <button>Lekcja w szkole</button>
            <button>Kontakt z nauczycielem poza szkołą, online</button>
        </div>
    );
}