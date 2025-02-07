import style from './style.module.scss';
import taskImg from '../../../../assets/scenarios/scen_przych.png'
import trueImg from "../../../../assets/icons/right.png"
import falseImg from "../../../../assets/icons/wrong.png"
import pdf from "../../../../assets/pdfs/Komentarz do rozgrywki OCHRONA ZDROWIA.pdf"
import link from "../../../../assets/icons/link.png"
import { useCallback, useEffect, useState } from 'react';
import video from "../../../../assets/videos/ochrona zdrowia.mp4"
import { getHomeRoute, getRulesPageRoute } from '../../../../routes';
import { Link } from 'react-router-dom';
import miniaturka from "../../../../assets/miniatury/ochrona zdrowia.png"
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
                        <h2>Ochrona zdrowia</h2>
                        <p>
                            podsumowanie
                        </p>
                    </div>
                    <div className={style.middle}>
                        <h3>twój wynik</h3>
                        <p>
                            {points}/17
                        </p>
                    </div>
                    <div className={style.bottom}>

                        <p>
                            Gratulacje, udało Ci się ukończyć rozgrywkę. Klikając w sformułowania po prawej stronie sprawdzisz, które rozwiązania dla danej sytuacji rekomenduje Fundacja Dajemy Dzieciom Siłę (są oznaczone ikonką <img src={trueImg} alt="" style={{ width: "20px", display: "inline-block", verticalAlign: "middle" }} />). Poniżej znajdziesz film z komentarzem do scenariusza oraz bazę wiedzy, dzięki której zdobędziesz jeszcze więcej informacji. Zachęcamy do zmierzenia się z kolejnym scenariuszem gry!
                        </p>
                    </div>
                </div>
                <div className={style.answers}>
                    <h2>prawidłowe odpowiedzi (żeby zobaczyć pozostałe odpowiedzi, kliknij na tytuł konkretnej sytuacji)</h2>
                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                            // setClickedElement(e.currentTarget);
                        }}>
                            Rejestratorka głośno komentuje zachowanie i diagnozę pacjenta.
                        </p>

                        <div className={style.list}>
                            <p className={style.true}>
                                Sporządzasz notatkę z przeprowadzonego rozpoznania sprawy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Informujesz rodziców o wnioskach z rozpoznania sprawy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Planujesz szkolenie dla personelu rejestracji z zakresu obsługi klienta z uwzględnieniem klientów małoletnich.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Na podstawie Karty Praw Pacjenta i przyjętych Standardów Ochrony Dzieci opracowujesz ściągawkę dla personelu. Zaznaczasz w niej najważniejsze kwestie związane z rejestracją i obsługą pacjentów.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Wnioskujesz do władz przychodni o zmianę zakresu obowiązków rejestratorki.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Informujesz policję o możliwości popełnienia przestępstwa.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nic nie robisz – rejestratorka miała dobre intencje, a rodzice Pawła nie wnieśli skargi.
                                <img src={falseImg} alt="" />
                            </p>

                        </div>
                    </div>
                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Ojciec stosuje przemoc wobec Adama. Wyzywa i popycha syna.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Opracowujesz notatkę z przeprowadzonego rozpoznania sprawy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Organizujesz szkolenie z rozpoznawania przemocy wobec małoletnich.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Przypominasz pracownikom zasady podejmowania interwencji w przypadkach podejrzenia lub zaobserwowania przemocy domowej.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Wnioskujesz do kierownictwa przychodni o zmianę zakresu obowiązków pielęgniarki.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zawiadamiasz policję informując o możliwości popełnienia przestępstwa.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nic nie robisz – takie sytuacje często mają miejsce w przychodni.
                                <img src={falseImg} alt="" />
                            </p>
                        </div>
                    </div>
                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Lekarka oceniająco i bezosobowo zwraca się do dziecka.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Sporządzasz notatkę z przeprowadzonego rozpoznania sprawy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Przeprowadzasz ankietę wśród rodziców pacjentów na temat jakości pracy przychodni.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Organizujesz obowiązkowe szkolenie z komunikacji z młodym pacjentem i jego rodzicami.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Na podstawie Karty Praw Pacjenta i przyjętych Standardów Ochrony Dzieci opracowujesz ściągawkę dla personelu. Zaznaczasz w niej najważniejsze kwestie związane z rejestracją i obsługą pacjentów.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Wnioskujesz do kierownictwa przychodni o zwolnienie lekarki.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zawiadamiasz policję o możliwości popełnienia przestępstwa.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nic nie robisz – rozumiesz wyjaśnienia pani doktor.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nic więcej nie robisz – lekarka zachowała się w tych warunkach pracy profesjonalnie.
                                <img src={falseImg} className={style.false} alt="" />
                            </p>
                        </div>
                    </div>

                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Dziecko ma ślady mogące świadczyć o samookaleczaniu.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Sporządzasz notatkę z przeprowadzonego rozpoznania powyższej sprawy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Organizujesz obowiązkowe szkolenie z reagowania na podejrzenie zagrożenia zdrowia dziecka.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Kontaktujesz się z mamą Eryka i rozmawiasz o swoich podejrzeniach – chcesz sprawdzić, czy jest świadoma tego, co się dzieje z chłopcem, i czy nie potrzebuje jakiegoś wsparcia w tej sytuacji, np. kontaktu do psychologa.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Wnioskujesz do kierownictwa przychodni o zwolnienie pielęgniarki.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nic nie robisz – przyjmujesz wyjaśnienia lekarza i pielęgniarki.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                W zaistniałej sytuacji, zawiadamiasz policję o możliwości popełnienia przestępstwa
                                <img src={falseImg} alt="" />
                            </p>
                        </div>
                    </div><div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            W trakcie badania Marta zauważa na ciele dziecka wiele siniaków, a także kilka łysych placków na głowie.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Sporządzasz notatkę z przeprowadzonego rozpoznania sprawy Marty.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Organizujesz obowiązkowe szkolenie z reagowania na podejrzenie zagrożenia zdrowia dziecka.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Wnioskujesz do kierownictwa przychodni o zwolnienie pielęgniarki.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Zawiadamiasz policję z uwagi na możliwości popełnienia przestępstwa.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nic nie robisz – przyjmujesz wyjaśnienia pielęgniarki.
                                <img src={falseImg} alt="" />
                            </p>
                        </div>
                    </div>
                </div>


            </div>
            <div className={style.video}>
                <h2>podsumowanie scenariusza</h2>
                <video src={video} title='video' controls poster={miniaturka}></video>
            </div>
            <div className={style.moreInfo}>
                <h2>więcej wiedzy</h2>
                <div className={style.links}>
                    <a href="https://standardy.fdds.pl/standardy-w-dzialaniu/medyczne" target='blank'>
                        <img src={link} alt="" />
                        Standardy ochrony dzieci w placówkach medycznych

                    </a>
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
                    <a href={pdf} target='blank'>
                        <img src={link} alt="" />
                        Komentarz do rozgrywki Ochrona Zdrowia
                    </a>
                </div>
            </div>
            <div className={style.back}>
                <Link to={getHomeRoute()} className={style.backLink}>Wróć do wyboru scenariusza</Link>
            </div>
        </div>
    );
}