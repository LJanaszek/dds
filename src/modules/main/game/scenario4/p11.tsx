import style from './style.module.scss';
import taskImg from '../../../../assets/scenarios/scen_online.png'
import trueImg from "../../../../assets/icons/right.png"
import falseImg from "../../../../assets/icons/wrong.png"
import pdf from "../../../../assets/icons/pdf.png"
import link from "../../../../assets/icons/link.png"
import { useEffect, useState } from 'react';
import video from "../../../../assets/videos/kontakty online.mp4"
import { getHomeRoute } from '../../../../routes';
import { Link } from 'react-router-dom';

export default function P11() {
    const [clickedElement, setClickedElement] = useState<HTMLParagraphElement | null>(null);
    let userAnswers = [];
    let repeat = 0
    if (localStorage.getItem('userAnswers') && userAnswers.length === 0) {
        userAnswers = JSON.parse(localStorage.getItem('userAnswers')!);
    }
    useEffect(() => {
        let allListDivs = document.getElementsByClassName(style.list) as HTMLCollectionOf<HTMLDivElement>;
        for (let i = 0; i < allListDivs.length; i++) {
            allListDivs[i].style.display = "none";
        }
        if (clickedElement) {
            hideAndShow(clickedElement);
        }
    }, [repeat, clickedElement])
    useEffect(() => {
        let allListDivs = document.getElementsByClassName(style.list) as HTMLCollectionOf<HTMLDivElement>;
        allListDivs[0].style.display = "grid";
    }, [])

    let points = 0
    let values: string[][] = []
    Object.keys(userAnswers).map((key, index) => {
        values.push(Object.values(userAnswers[index]));
        return key
    });
    console.log(values)
    for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
            if (JSON.stringify(values[i]) === JSON.stringify(values[j])) {
                values.splice(j, 1);
                j--;
            }
        }
    }
    values.map((key, index) => {
        if (!key[key.length - 1].endsWith(",false")) {
            points++
        }
        else {
            points--
        }
        return key
    });

    const hideAndShow = (e: any) => {
        let div = e.nextSibling as HTMLDivElement;
        if (div.style.display !== "grid") {
            div.style.display = "grid";
        }
        else {
            div.style.display = "none !important";
        }
    }
    return (
        <div className={style.summary}>
            <div className={style.main}>
                <div className={style.card}>
                    <div className={style.top}>
                        <img src={taskImg} alt="" />
                        <h2>Kontakty online</h2>
                        <p>
                            podsumowanie
                        </p>
                    </div>
                    <div className={style.middle}>
                        <h3>twój wynik</h3>
                        <p>
                            {points}/24
                        </p>
                    </div>
                    <div className={style.bottom}>

                        <p>
                            Gratulacje, udało Ci się ukończyć rozgrywkę. Klikając w sformułowania po prawej stronie sprawdzisz, które rozwiązania dla danej sytuacji rekomenduje Fundacja Dajemy Dzieciom Siłę. Poniżej znajdziesz film z komentarzem do scenariusza oraz bazę wiedzy, dzięki której zdobędziesz jeszcze więcej informacji. Zachęcamy do zmierzenia się z kolejnym scenariuszem gry!
                        </p>
                    </div>
                </div>
                <div className={style.answers}>
                    <h2>prawidłowe odpowiedzi</h2>
                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                            // setClickedElement(e.currentTarget);
                        }}>
                            Nauczyciel wysyła głosówkę i pociesza Elę.
                        </p>

                        <div className={style.list}>
                            <p className={style.true}>
                                Przypominasz nauczycielowi o zasadach bezpiecznych relacji personel – dziecko dotyczących kontaktów online z uczniami. Jeśli uczennica szuka wsparcia, to należy kontaktować się z nią, zachowując jawność takich kontaktów i informując o tym innego dorosłego (uczennica musi o tym wiedzieć). Jeśli możliwości wsparcia się wyczerpią, należy skierować sprawę do profesjonalisty.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Prosisz nauczyciela, żeby przeprowadził rozmowę z Elą, podczas której wytłumaczy jej, z zachowaniem jakich zasad są możliwe kontakty pomiędzy nauczycielami i uczniami, a także wskaże, jakie działania wspierające ją podejmie we współpracy ze specjalistami.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Opracowujesz notatkę służbową z przeprowadzonych działań i rozpoznania sprawy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Sprawdzasz, czy Ela ma zapewnione profesjonalne wsparcie psychologiczne.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Jako bezpieczny i zaufany dorosły angażujesz się w tworzenie planu wsparcia Eli.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nie reagujesz – nic wielkiego się nie stało.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Składasz wniosek do sądu o wgląd w sytuację rodziny i informujesz o tym Elę.
                                <img src={trueImg} alt="" />
                            </p>
                        </div>
                    </div>
                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Nauczyciel zabrał Tymka własnym samochodem i mocno wyściskał..
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Przypominasz nauczycielowi, dlaczego nie jest wskazane przewożenie uczniów własnym samochodem, i pokazujesz alternatywne sposoby zachowania się w tej sytuacji (np. zamówienie taksówki).
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Przypominasz nauczycielowi, w jakich sytuacjach dozwolony jest kontakt fizyczny z osobą uczącą się.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Prosisz psychologa szkolnego o zwrócenie uwagi na relacje między Tymkiem a nauczycielem.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Rozmawiasz z Tymkiem i przypominasz o procedurach interwencji i możliwości zgłoszenia przekroczenia granic.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Dyskretnie upewniasz się u innych osób uczących się, czy czują się bezpiecznie w relacji z Pawłem.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Rozmawiasz indywidualnie lub grupowo z osobami, które śmiały się z sytuacji Tymka. Starasz się pokazać im, jak mogą wesprzeć kolegę.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zgłaszasz sprawę policji.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nie podejmujesz działań – nie chcesz, żeby nauczyciel zrezygnował z pracy.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false} >
                                Zgłaszasz potrzebę odizolowania nauczyciela od Tymka.
                                <img src={falseImg} alt="" />
                            </p>
                        </div>
                    </div>
                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Nauczycielka plotkowała o innych nauczycielkach i dzieciach.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Wyjaśniasz nauczycielce, czym jest mobbing.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Odwołujesz się do etyki zawodowej nauczyciela.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Przypominasz nauczycielce zasady bezpiecznych relacji obejmujące kontakty z uczniami poza godzinami pracy, podkreślasz znaczenie poufności.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Prosisz psycholożkę, aby przyjrzała się relacjom między osobami uczącymi się w obu klasach 5.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Uświadamiasz nauczycielce, że jej decyzje z życia osobistego mogą wpływać na życie zawodowe, zwłaszcza w małym miasteczku.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nie podejmujesz działań – w końcu nie zdarzyło się nic nadzwyczajnego.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Organizujesz zajęcia integracyjne dla rady pedagogicznej.
                                <img src={falseImg} alt="" />
                            </p>

                            <p className={style.false}>
                                Wnioskujesz o odizolowanie nauczycielki od osób uczących się.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zakazujesz nauczycielce kontaktów prywatnych z rodzinami jej uczniów.
                                <img src={falseImg} alt="" />
                            </p>
                        </div>
                    </div>

                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Nauczyciel komentuje zdjęcia uczniów i przesyła swoje zdjęcia.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Prosisz psychologa szkolnego o zwrócenie uwagi na relacje między osobami uczącymi się a nauczycielem.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Wyjaśniasz nauczycielowi, jakimi kanałami oraz w jakim zakresie ma prawo kontaktować się z młodzieżą.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Przypominasz nauczycielowi, że w zasadach bezpiecznych relacji są określone zachowania dotyczące kontaktów w mediach społecznościowych (nauczyciel może używać ich tylko w  celach służbowych, a na takiej grupie powinno znajdować się co najmniej dwóch dorosłych).
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zgłaszasz sprawę policji.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nie podejmujesz działań – nie chcesz, żeby nauczyciel zrezygnował z pracy.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zgłaszasz potrzebę odizolowania nauczyciela od osób uczących się.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Poruszasz z uczniami i uczennicami temat niebezpieczeństw związanych z wysyłaniem swoich zdjęć w internecie (szczególnie w strojach kąpielowych).
                                <img src={trueImg} alt="" />
                            </p>
                        </div>
                    </div><div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Uczniowie i uczennice mają nauczycielkę wśród znajomych w mediach społecznościowych.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                W rozmowie z nauczycielką odwołujesz się do apolityczności osoby wykonującej zawód zaufania publicznego.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Organizujesz szkolenie dla rady pedagogicznej z przeciwdziałania mowie nienawiści.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Wyjaśniasz nauczycielce, jakimi kanałami oraz w jakim zakresie ma prawo kontaktować się z młodzieżą.

                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Odwołujesz się do zasad bezpiecznych relacji dotyczących kontaktów personelu z dziećmi w mediach społecznościowych. Przypominasz na radzie pedagogicznej, z czego wynikają te zapisy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zgłaszasz sprawę policji.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nie podejmujesz działań – nie chcesz, żeby nauczycielka zrezygnowała z pracy.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zgłaszasz potrzebę odizolowania nauczycielki od osób uczących się.
                                <img src={falseImg} alt="" />
                            </p>
                        </div>
                    </div>
                </div>


            </div>
            <div className={style.video}>
                <h2>podsumowanie scenariusza</h2>
                <video src={video} title='video' controls></video>
            </div>
            <div className={style.moreInfo}>
                <h2>więcej wiedzy</h2>
                <div className={style.links}>
                    <a href="https://standardy.fdds.pl/baza-wiedzy" target='blank'>
                        <img src={link} alt="" />
                        Baza wiedzy – broszury, ulotki, podręczniki o standardach ochrony dzieci
                    </a>
                    <a href="https://youtube.com/playlist?list=PLfRXTVmpnYfCKjlLzkB_jtawqI3-o0SE1&si=aaYA_e7kzItSWS6M" target='blank'>
                        <img src={link} alt="" />
                        Playlista Standardy ochrony dzieci:
                    </a>
                    <a href="https://www.gov.pl/web/sprawiedliwosc/zespol-do-spraw-ochrony-maloletnich" target='blank'>
                        <img src={link} alt="" />
                        Zespół ds. Ochrony Małoletnich
                    </a>
                    <a href="https://edukacja.fdds.pl/" target='blank'>
                        <img src={link} alt="" />
                        Platforma edukacyjna Fundacji Dajemy Dzieciom Siłę
                    </a>
                </div>

            </div>
            <div className={style.back}>
                <Link to={getHomeRoute()} className={style.backLink}>Wróć do wyboru scenariusza</Link>
            </div>
        </div>
    );
}