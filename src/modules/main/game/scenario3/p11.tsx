import style from './style.module.scss';
import taskImg from '../../../../assets/scenarios/scen_szkola.png'
import trueImg from "../../../../assets/icons/right.png"
import falseImg from "../../../../assets/icons/wrong.png"
import pdf from "../../../../assets/icons/pdf.png"
import link from "../../../../assets/icons/link.png"
import { useEffect, useState } from 'react';
import video from "../../../../assets/videos/szkoła.mp4"
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
                        <h2>Szkoła</h2>
                        <p>
                            podsumowanie
                        </p>
                    </div>
                    <div className={style.middle}>
                        <h3>twój wynik</h3>
                        <p>
                            {points}/39
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
                            Nauczycielka krzyczy i rzuca w uczniów kredą.
                        </p>

                        <div className={style.list}>
                            <p className={style.true}>
                                Zwołujesz zespół nauczycieli uczących w klasie z udziałem psychologa. Wspólnie dzielicie się doświadczeniem w pracy z klasą i zastanawiacie się, jak zadbać o dyscyplinę pracy na lekcji.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Organizujesz szkolenie z radzenia sobie z trudnymi sytuacjami w klasie.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Zapraszasz nauczycielkę do indywidualnych rozmów z psychologiem szkolnym.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zgłaszasz sprawę policji.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Podczas rady pedagogicznej przypominasz treść zasad bezpiecznych relacji personel – dziecko i zachęcasz nauczycieli do reagowania i udzielania sobie wzajemnie wsparcia w trudnych sytuacjach.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nie podejmujesz działań – nie chcesz, żeby nauczycielka zrezygnowała z pracy.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Opracowujesz notatkę służbową z przeprowadzonych działań i rozpoznania sprawy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Uruchamiasz ścieżkę interwencji w wypadku krzywdzenia ze strony personelu i sięgasz po pierwszy środek, jakim jest upomnienie nauczycielki.
                                <img src={trueImg} alt="" />
                            </p>
                        </div>
                    </div>
                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Ojciec krzyczy na syna, poniża, wyzywa i stosuje przemoc fizyczną.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Zapraszasz matkę na rozmowę, upominasz ją i informujesz o uruchomieniu ścieżki interwencji oraz możliwościach wsparcia.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Rozmawiasz z Łukaszem, opracowujesz i uruchamiasz plan wsparcia dla niego.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Organizujesz dla pracowników szkolenie z reagowania na przemoc.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Uruchamiasz procedurę interwencji zapisaną w polityce ochrony dzieci.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Opracowujesz notatkę służbową z przeprowadzonych działań i rozpoznania sprawy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nie reagujesz – nic wielkiego się nie stało.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zawiadamiasz policję o możliwości popełnienia przestępstwa.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Informujesz wychowawcę klasy o potrzebie wszczęcia procedury „Niebieskie Karty”, a wychowawca wypełnia stosowny formularz.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true} >
                                Składasz do sądu wniosek o wgląd w sytuację rodziny.
                                <img src={trueImg} alt="" />
                            </p>
                        </div>
                    </div>
                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Zuzia jest smutna, nigdy nie ma ze sobą drugiego śniadania, a dodatkowo przejawia zachowania lękowe i ma trudności w nauce.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Zgłaszasz sprawę do ośrodka pomocy rodzinie.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Składasz wniosek do sądu o wgląd w sytuację rodziny.

                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Rozmawiasz z nauczycielką o funkcjach szkoły i zadaniach wychowawcy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Informujesz policję o sytuacji rodzinnej uczennicy.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Opracowujesz notatkę służbową z przeprowadzonych działań i rozpoznania sprawy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Prosisz psychologa szkolnego, żeby monitorował sytuację dziecka.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Rozmawiasz z Zuzią. Opracowujesz i uruchamiasz plan wsparcia dla niej.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nie podejmujesz działań – chcesz uszanować ustalenia nauczycielki z mamą.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Korzystając z listy placówek współpracujących stworzonej w ramach polityki ochrony dzieci, przekazujesz mamie kontakty do organizacji wspierających osoby uzależnione.
                                <img src={trueImg} alt="" />
                            </p>
                        </div>
                    </div>

                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Pan Robert wypytuje o chłopaków, łapie za biodra, opowiada seksistowskie dowcipy.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Opracowujesz notatkę służbową z przeprowadzonych działań i rozpoznania sprawy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Upewniasz się, że zakład pracy ma wdrożone standardy ochrony małoletnich, a pracownicy dopuszczani do pracy z dziećmi są zweryfikowani w Rejestrze Sprawców Przestępstw na Tle Seksualnym  oraz mają zaświadczenie z KRK.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Uruchamiasz ścieżkę interwencji na wypadek podejrzenia wykorzystania seksualnego.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Organizujesz kampanię informacyjną wśród uczniów i uczennic na temat tego, gdzie mogą szukać pomocy, jeśli w czasie praktyk doświadczają przemocy, i czym jest przemoc.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Informujesz policję o podejrzeniu popełnienia przestępstwa.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Informujesz pracodawcę pana Roberta o sytuacji i zrywasz współpracę z zakładem, w którym odbywają się praktyki.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nic nie robisz – nic złego się nie stało, to normalne, że dziewczęta odbywają praktyki w miejscu, w którym przebywa wielu dorosłych mężczyzn, a w Twoim mieście trudno o nowe miejsce na praktyki.
                                <img src={falseImg} alt="" />
                            </p>
                        </div>
                    </div><div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Maciek prześladuje Adama.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Opracowujesz notatkę służbową z przeprowadzonych działań i rozpoznania sprawy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Organizujesz kampanię informacyjną wśród uczniów i uczennic na temat tego, gdzie mogą szukać pomocy, jeśli doświadczają przemocy, i czym jest przemoc.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Uruchamiasz ścieżkę interwencji na wypadek przemocy rówieśniczej.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Rozmawiasz z Adamem i razem opracowujecie plan wsparcia dla niego.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Zawiadamiasz sąd rodzinny o przemocy rówieśniczej.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Rozmawiasz z Maćkiem – informujesz o podjętych krokach i opracowujesz plan naprawczy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Przeprowadzasz wraz z samorządem uczniowskim spacer badawczy, żeby zdiagnozować niebezpieczne miejsca w szkole.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Informujesz rodziców Adama i Maćka o zaistniałej sytuacji.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Informujesz policję o podejrzeniu popełnienia przestępstwa – Maciek jest osobą dorosłą, a jego zachowanie wobec Adama może stanowić przestępstwo (rozbój).
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nic nie robisz – nic złego się nie stało.
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
                    <a href="https://standardy.fdds.pl/standardy-w-dzialaniu/zlobki" target='blank'>
                        <img src={link} alt="" />
                        Standardy ochrony dzieci w placówkach oświatowych 
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
                </div>

            </div>
            <div className={style.back}>
                <Link to={getHomeRoute()} className={style.backLink}>Wróć do wyboru scenariusza</Link>
            </div>
        </div>
    );
}