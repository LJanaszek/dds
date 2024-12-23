import style from './style.module.scss';
import taskImg from '../../../../assets/scenarios/scen_sport.png'
import trueImg from "../../../../assets/icons/right.png"
import falseImg from "../../../../assets/icons/wrong.png"
import pdf from "../../../../assets/icons/pdf.png"
import link from "../../../../assets/icons/link.png"
import { useEffect, useState } from 'react';
import video from "../../../../assets/videos/sport.mp4"
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
                        <h2>Trening piłkarski</h2>
                        <p>
                            podsumowanie
                        </p>
                    </div>
                    <div className={style.middle}>
                        <h3>twój wynik</h3>
                        <p>
                            {points}/36
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
                            Trener ośmiesza zawodników, wyżywa się na Pawle.
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
                            <p className={style.false}>
                                Sugerujesz władzom klubu odsunięcie trenera od pracy z drużyną.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Planujesz szkolenie dla trenerów klubu z komunikacji z nastolatkami.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zawiadamiasz policję o możliwości popełnienia przestępstwa.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nic nie robisz – trener miał dobre intencje, chłopcy z drużyny nie są na niego źli.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Przeprowadzasz spotkanie z dziećmi, na którym rozmawiacie o zachowaniu trenera, i dajesz jasny sygnał, że jest to niedopuszczalne.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Informujesz dzieci, że mają możliwość zgłaszania takich sytuacji do koordynatora ds. standardów ochrony dzieci wyznaczonego przez ich klub.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true} >
                                Uruchamiasz procedury interwencji przyjęte w klubie na wypadek krzywdzenia ze strony personelu.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Przeprowadzasz spotkanie lub warsztaty z trenerami, przypominając o zasadach bezpiecznych relacji obowiązujących w klubie.
                                <img src={trueImg} alt="" />
                            </p>





                        </div>
                    </div>
                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Trener regularnie krzyczy na zawodniczki.
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
                                Planujesz spotkanie z psychologiem sportu dla całej drużyny.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Sugerujesz władzom klubu odsunięcie trenera od pracy z drużyną.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Planujesz obowiązkowe szkolenie dla trenerów klubu z komunikacji z nastolatkami.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zawiadamiasz policję o możliwości popełnienia przestępstwa.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nic nie robisz – trener miał dobre intencje, dziewczyny z drużyny nie są na niego złego źli.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Informujesz dzieci, że mają możliwość zgłaszania takich sytuacji do koordynatora ds. standardów ochrony dzieci wyznaczonego przez ich klub.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true} >
                                Uruchamiasz procedury interwencji przyjęte w klubie na wypadek krzywdzenia ze strony personelu.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Zwracasz uwagę trenerowi, dając jasny sygnał, że nie zgadzasz się na takie zachowanie w Waszym klubie.
                                <img src={trueImg} alt="" />
                            </p>
                        </div>
                    </div>
                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Warunki lokalowe w szatniach.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Rozmawiasz z władzami klubu o wydzieleniu przestrzeni dla dziewcząt.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Proponujesz opracowanie grafiku dyżurów pracowników klubu w szatni.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Opracowujesz regulamin szatni uwzględniający zasady przebywania w nich rodziców.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Zwracasz uwagę mamie Łukasza, że nie powinna przebywać w szatni zawodników.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Wywieszasz informację, że przeklinanie w przestrzeni publicznej jest niekulturalne, a nawet grozi mandatem karnym.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Zamykasz szatnię, aż zostanie odpowiednio zmodernizowana.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Wywieszasz w szatni plakat dotyczący zasad bezpiecznych relacji między zawodnikami i zawodniczkami.
                                <img src={trueImg} alt="" />
                            </p>
                        </div>
                    </div>

                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Rodzice obwiniają bramkarkę za porażkę drużyny.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Wraz z trenerami wypracowujesz zasady przebywania rodziców na boisku.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Przesyłasz rodzicom poradnik, jak wspierać młodych zawodników.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Organizujesz spotkanie z rodzicami, na którym uświadamiasz ich, jakie konsekwencje wywołuje zastraszanie i poniżanie dzieci.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Wprowadzasz zakaz przebywania rodziców wokół boiska.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.false}>
                                Nic nie robisz – przecież nic się nie stało, a na meczach zawsze włączają się emocje.
                                <img src={falseImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Wyświetlasz na telebimach i wywieszasz w widocznym miejscu, w którym odbywają się zawody, plakat dotyczący bezpiecznych relacji podczas rozgrywek. Kilka najważniejszych zasad, jak kibicować, przedstawionych w przystępnej formie.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Wprowadzasz kary za niestosowanie się do zasad i stosowanie przemocy, np. wykluczenie rodziców z możliwości kibicowania na następnym meczu.
                                <img src={trueImg} alt="" />
                            </p>
                        </div>
                    </div><div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Osoby z zewnątrz fotografują zawodników.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Organizujesz spotkania dla pracowników klubu, na których przypominasz o konieczności posiadania zgód rodziców na wykorzystanie wizerunku ich dzieci. Przypominasz też o potrzebie przedstawienia zaświadczeń z KRK wszystkich osób, które w wyniku analizy ryzyka przeprowadzonej w klubie są do tego zobowiązane.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Wysyłasz wiadomość do rodziców z informacją o obowiązku posiadania zgód na rejestrowanie i przetwarzanie wizerunku dziecka.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Wywieszasz plakaty wskazujące, jak zadbać o ochronę wizerunku młodych sportowców.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Prosisz mamę Łukasza o usunięcie zdjęć zrobionych podczas oficjalnej sesji oraz tworzysz internetową przestrzeń o ograniczonym dostępie dla osób postronnych (np. grupa w mediach społecznościowych, wspólny dysk), na której będą znajdowały się pamiątkowe zdjęcia wykonane przez zatrudnionego przez klub fotografa.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Tworzysz i udostępniasz zasady ochrony wizerunku dzieci w klubie.
                                <img src={trueImg} alt="" />
                            </p>
                        </div>
                    </div>
                    <div className={style.dropList}>
                        <p className={style.listTitle} onClick={(e) => {
                            setClickedElement(e.currentTarget);
                        }}>
                            Ojciec stosuje przemoc wobec Ady.
                        </p>
                        <div className={style.list}>
                            <p className={style.true}>
                                Informujesz o sytuacji Ady ośrodek pomocy społecznej, wskazując na możliwość wystąpienia przemocy w jej rodzinie.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Składasz do sądu rodzinnego wniosek o wgląd w sytuację rodziny Ady.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Zawiadamiasz policję o możliwości popełnienia przestępstwa.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Rozmawiasz z tatą Ady o zaistniałej sytuacji. Oferujesz pomoc.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Rozmawiasz z Adą i oferujesz jej wsparcie emocjonalne.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Uruchamiasz plan wsparcia dla Ady.
                                <img src={trueImg} alt="" />
                            </p>
                            <p className={style.true}>
                                Organizujesz spotkanie z psychologiem dla dziewczyn, które domyślają się, że Ada jest krzywdzona (widziały jej siniaki).
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
                    <a href="https://google.com">
                        <img src={pdf} alt="" />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                    <a href="https://google.com">
                        <img src={link} alt="" />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                    <a href="https://google.com">
                        <img src={pdf} alt="" />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                    <a href="https://google.com">
                        <img src={link} alt="" />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                    <a href="https://google.com">
                        <img src={pdf} alt="" />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                </div>

            </div>
            <div className={style.back}>
                <Link to={getHomeRoute()} className={style.backLink}>Wróć do wyboru scenariusza</Link>
            </div>
        </div>
    );
}