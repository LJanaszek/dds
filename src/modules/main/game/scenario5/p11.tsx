import style from './style.module.scss';
import taskImg from '../../../../assets/scenarios/scen_oboz.png'
import trueImg from "../../../../assets/icons/right.png"
import falseImg from "../../../../assets/icons/wrong.png"
import pdf from "../../../../assets/pdfs/Komentarz do rozgrywki OBÓZ WAKACYJNY.pdf"
import link from "../../../../assets/icons/link.png"
import { useEffect, useState } from 'react';
import video from "../../../../assets/videos/wakacyjny obóz.mp4"
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
                        <h2>Obóz wakacyjny</h2>
                        <p>
                            podsumowanie
                        </p>
                    </div>
                    <div className={style.middle}>
                        <h3>twój wynik</h3>
                        <p>
                            {points}/28
                        </p>
                    </div>
                    <div className={style.bottom}>

                        <p>
                            Gratulacje, udało Ci się ukończyć rozgrywkę. Klikając w sformułowania po prawej stronie sprawdzisz, które rozwiązania dla danej sytuacji rekomenduje Fundacja Dajemy Dzieciom Siłę (są oznaczone ikonką <img src={trueImg} alt="" style={{ width: "20px", display:"inline-block", verticalAlign:"middle" } }/>). Poniżej znajdziesz film z komentarzem do scenariusza oraz bazę wiedzy, dzięki której zdobędziesz jeszcze więcej informacji. Zachęcamy do zmierzenia się z kolejnym scenariuszem gry!
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
                            Wychowawca kąpie się nago w jeziorze i zaprasza do tego wychowanki.
                        </p>

                        <div className={style.list}>
                            <p className={style.true}>
                                Sporządzasz notatkę z rozmowy z Mateuszem.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Zmieniasz procedurę przygotowania kadry do rozpoczynającego się wypoczynku. Zawsze na pierwszej odprawie przed rozpoczęciem wypoczynku przypominasz zasady bezpiecznych relacji kadra – dziecko i zobowiązujesz kadrę do ich przestrzegania.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Upewniasz się, że uczestnicy obozu wiedzą, gdzie szukać pomocy w sytuacji kryzysowej.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Informujesz kierownika obozu o zaistniałej sytuacji i prosisz o zbadanie czy wystąpił w niej kontekst seksualny oraz o rozmowę z Mateuszem.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Odsuwasz Mateusza od pracy z osobami uczestniczącymi w obozie.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Informujesz uczestniczki, dlaczego nie wolno im oddalać się od miejsca zakwaterowania  bez zgody wychowawcy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Przeprowadzasz rozmowę z dziewczynami, podczas której informujesz o podjętych krokach wobec wychowawcy i zapewniasz o możliwości porozmawiania z Tobą na ten temat.
                                <img src={trueImg} alt="" />
                            </p>
                        </div>
                    </div>
                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Wychowawczyni dowiedziała się, że tata stosuje przemoc fizyczną i emocjonalną wobec Karoliny.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Sporządzasz notatkę z rozmowy z Agnieszką i Karoliną.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Przypominasz wychowawcom procedury interwencji w sytuacji podejrzenia wystąpienia przemocy domowej wpisane w politykę ochrony dzieci. Procedury uwzględniają sytuację przemocy domowej.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Ponownie rozmawiasz z Agnieszką o roli bezpiecznego dorosłego w sytuacji ujawnienia przez dziecko, że jest krzywdzone – informujesz, jakie możliwości skutecznego reagowania ma wychowawca.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Upewniasz się, że uczestnicy obozu wiedzą, gdzie szukać pomocy w sytuacji kryzysowej.Informujesz szkołę o uzyskanych informacjach.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Składasz wniosek do sądu o wgląd w sytuację rodziny Karoliny.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Powiadamiasz Ośrodek Pomocy Społecznej właściwy dla miejsca zamieszkania Karoliny o stwierdzonej przemocy domowej.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zawiadamiasz policję.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Odsuwasz Agnieszkę od pracy z osobami uczestniczącymi w obozie.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false} >
                                Nic nie robisz – organizator obozów nie może reagować na przemoc, która nie ma miejsca podczas wypoczynku.
                                <img src={falseImg} alt="" />
                            </p>
                        </div>
                    </div>
                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Opiekun położył się w samych bokserkach obok chłopca.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Upewniasz się, że uczestnicy obozu wiedzą, gdzie szukać pomocy w sytuacji kryzysowej.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Przypominasz wychowawcom zasady utrzymywania kontaktu z osobami uczestniczącymi w obozie. Odwołujesz się do zasad bezpiecznych relacji kadra – wychowankowie, które określają taką sytuację. Prosisz wychowawców, aby w takich momentach nie kładli się z dzieckiem do łóżka, tylko siadali obok, zawsze byli odpowiednio ubrani i informowali innego wychowawcę o tym, że idą do pokoju wychowanków w takim celu, oraz zostawiali uchylone drzwi.                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zawiadamiasz policję.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Odsuwasz Michała od pracy z osobami uczestniczącymi w obozie.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nic nie robisz – Michał chciał dobrze, w sumie pomógł chłopcom.
                                <img src={falseImg} alt="" />
                            </p>
                        </div>
                    </div>

                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Opiekunowie nie sprawdzają, co kupują młodzi, oraz nie reagują na przemocowe komentarze chłopców.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Sporządzasz notatkę z rozmowy z wychowawcami.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Podczas odprawy dla kadry odwołujesz się do zasad bezpiecznych relacji i procedur interwencji zawartych w polityce ochrony dzieci.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Upewniasz się, że uczestnicy obozu wiedzą, gdzie szukać pomocy w sytuacji kryzysowej.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Rozmawiasz z uczestnikami obozu na temat wzajemnego szacunku (odwołujesz się do zasad bezpiecznych relacji dziecko – dziecko).
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zawiadamiasz policję.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Uruchamiasz ścieżkę interwencji na wypadek przemocy rówieśniczej.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Rozmawiasz ze Staśkiem – opracowujesz i uruchamiasz plan wsparcia.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Rozmawiasz z Julkiem, zwracając uwagę na to, czy sam nie doświadcza przemocy, oraz opracowujesz i uruchamiasz plan naprawczy.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Odsuwasz Maćka i Pawła od pracy z osobami uczestniczącymi w obozie.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Umawiasz się z kierownikiem obozu, że porozmawiacie z rodzicami Stasia i Julka o zaistniałej sytuacji w czasie odbioru dzieci z parkingu.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nic nie robisz – został już tylko jeden dzień, nie warto roztrząsać sprawy.
                                <img src={falseImg} alt="" />
                            </p>
                        </div>
                    </div><div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Opiekunowie wymierzyli nadmiarową karę, niewynikającą z rzeczywistych konsekwencji działań chłopców.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Sporządzasz notatkę z rozmowy z opiekunami.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Odwołujesz się do zasad bezpiecznych relacji zawartych w polityce ochrony dzieci.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Upewniasz się, że uczestnicy obozu wiedzą, gdzie szukać pomocy w sytuacji kryzysowej.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Sprawdzasz w regulaminie zasady dotyczące nagradzania osób uczestniczących w obozie oraz wyciągania konsekwencji. Dokonujesz ich weryfikacji razem z wychowawcami, prowadząc krótką rozmowę edukacyjną na temat bezpiecznego egzekwowania zasad od dzieci.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zawiadamiasz policję.
                                <img src={falseImg} alt="" />
                            </p>

                            <p className={style.false}>
                                Odsuwasz opiekunów od pracy z osobami uczestniczącymi w obozie.
                                <img src={falseImg} alt="" />
                            </p><p className={style.false}>
                                Izolujesz dzieci od grupy, nie chcesz, żeby konflikt się zaostrzył.
                                <img src={falseImg} alt="" />
                            </p><p className={style.false}>
                                Nic nie robisz – nie warto roztrząsać sprawy.
                                <img src={falseImg} alt="" />
                            </p><p className={style.true}>
                                Uruchamiasz procedury interwencji dotyczące podejrzenia przemocy rówieśniczej.
                                <img src={trueImg} alt="" />
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
                    <a href={pdf} target='blank'>
                        <img src={link} alt="" />
                        Komentarz do rozgrywki Obóz Wakacyjny
                    </a>
                    
                </div>

            </div>
            <div className={style.back}>
                <Link to={getHomeRoute()} className={style.backLink}>Wróć do wyboru scenariusza</Link>
            </div>
        </div>
    );
}