import { Link } from "react-router-dom";
import { getGameRoute, PAGES } from "..";

export default function HomePage() {
    return (
        <div>
            <h1>Wybierz scenariusz</h1>
            <Link to={getGameRoute(PAGES.pb1)}>Wizyta u lekarza</Link>
            <Link to={getGameRoute(PAGES.pb2)}>Obóz wakacyjny</Link>
            <button>Trening piłkarski</button>
            <button>Lekcja w szkole</button>
            <button>Kontakt z nauczycielem poza szkołą, online</button>
        </div>
    );
}