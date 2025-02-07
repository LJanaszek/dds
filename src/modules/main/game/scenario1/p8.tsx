import { useEffect, useMemo, useState } from "react";
import styles from "../../../../components/radio/style.module.scss"
import style from "./style.module.scss"
import { Link } from "react-router-dom";
import Radio from "../../../../components/radio";
import reakcja from "../../../../assets/icons/reakcja_logo_blue.svg"
import { getGameRoute, PAGES } from "../../../../routes";
import MoreInfo from "../../../../components/moreInfo";

export const popUpContent: any = [{
    "Trener ośmiesza zawodników, wyżywa się na Pawle.":
        ["",
            "Rozmawiałeś z chłopcami. Uważają, że Paweł został potraktowany bardzo niesprawiedliwie. Trener jest zły, że ostatnio przegrywają wyścigi, i wyżywa się na nim. A to przecież całemu zespołowi słabo poszło. Chłopcy sugerują, że może trener ma jakieś własne problemy. Pawłowi jest smutno, że ostatnio nie ściga się z ekipą. Uważa, że to kara za słabe wyniki. Trener powiedział, że musi szybciej jeździć, nie może odpuszczać. No i że ma kiepską kondycję. Paweł często słyszy, że może powinien się zastanowić, czy rolki to faktycznie jego sport.",
            "Rozmawiałeś z trenerem. Uważa, że nikogo nie ośmieszał. Stwierdził: „To duzi chłopcy. Nie ma potrzeby im słodzić. Jak dobrze jeżdżą, to chwalę, a jak nawalają, to mówię prosto z mostu. Chcę być wobec nich uczciwy. A Paweł to bardzo dobrze zapowiadający się zawodnik, ale musi popracować nad kondycją i techniką jazdy, dlatego kilka ostatnich treningów spędził na bieżni”.",
            "Przypatrujesz się temu, jak inni trenerzy prowadzą swoje drużyny w klubie.",
        ],
},

{
    "Trener regularnie krzyczy na zawodniczki.":
        ["",
            "Przychodzisz na koniec treningu i zapraszasz rodziców na rozmowę. Część jest zbulwersowana zachowaniem trenera. Ich dzieci boją się, że trener przeniesie je do drugiej drużyny „za karę” Z drugiej strony mówią, że jest świetnym szkoleniowcem i nie chcą, żeby zrezygnował z trenowania dziewczyn. Zawsze jest perfekcyjnie przygotowany. Dziewczyny zrobiły olbrzymie postępy. Paru rodziców zaznacza, że nie dziwią się trenerowi – ma dużą grupę i nie ma czasu na dyscyplinowanie zawodniczek. Jeśli chcą grać, to muszą słuchać i robić, co trzeba. Poza tym sport jest po to, żeby się hartować i kształtować charakter, więc jak czasem krzyknie, to nawet lepiej. Jeśli rodzice chcą kształtować w dzieciach delikatność, to niech zapiszą je lepiej na tańce, a nie piłkę nożną.",
            "Przychodzisz na trening. Obserwujesz. Wszystko jest w porządku.",
            "Szukasz w Internecie opinii na temat trenera. Znajdujesz jego biografię – zaskakuje Cię, że uprawiał szermierkę i pracował w cukierni.",
        ],
},

{
    "Rodzice obwiniają bramkarkę za porażkę drużyny.": ["",
        "Rozmawiasz z trenerem o sytuacji, która miała miejsce podczas meczu. Szkoleniowiec mówi, że takie sytuacje się zdarzają, w szczególności podczas turniejów. Stara się nie reagować, żeby nie wzmagać bojowych nastrojów, raczej odciąga drużynę z dala od rodziców. Podkreśla, że w czasie meczu koncentruje się na dziewczynach, a nie dorosłych. Wiadomo też, że ci najbardziej zaangażowani rodzice są też sponsorami klubu, więc czasem opłaca się przymknąć oko. Nie dzieje się przecież wielka krzywda. Sport to emocje. To zrozumiałe.",
        "Oglądasz w Internecie filmik pt. „Najgorsze dopingi rodziców”. Stwierdzasz, że naprawdę z rodzicami Twojego klubu mogło być gorzej.",
        "Rozmawiasz z kumplem z innego klubu. Opowiada Ci o swoich doświadczeniach z rodzicami podczas meczów. Stwierdzasz, że z tym społeczeństwem coś jest nie tak."
    ],
},

{
    "Osoby z zewnątrz fotografują zawodników.":
        ["",
            "Dowiedziałeś się od organizatora rozgrywek, że fotograf został zatrudniony przez klub. Został sprawdzony w Rejestrze Sprawców Przestępstw na Tle Seksualnym , nie doniósł jednak zaświadczenia z Krajowego Rejestru Karnego i nie został zapoznany z zasadami bezpiecznych relacji. Podszedłeś do mamy Łukasza. Okazuje się, że nie miała zgody rodziców na robienie zdjęć. Nikt do tej pory się nie skarżył i nie informował jej o jakichkolwiek zastrzeżeniach. Wręcz przeciwnie – od części rodziców dostała podziękowania za uchwycenie pięknych momentów z życia zawodników. Zdjęcia wrzucała na grupę rodziców i przechowywała na swoim komputerze.",
            "Przeglądasz stronę internetową klubu oraz grupy dla zawodników i ich rodziców w mediach społecznościowych. Widzisz, że są tam zdjęcia wielu autorów.",
            "Wchodzisz na grupę swojej poprzedniej drużyny z innego klubu. Widzisz, że rodzice wrzucają cały czas zdjęcia dzieci. Zastanawiasz się, czy wszyscy z nich mają zgodę na takie działanie."
        ],
},

{
    "Warunki lokalowe w szatniach.":
        ["",
            "Przeprowadzasz spacer badawczy w szatniach. Wszystko, co napisali rodzice, się zgadza. Są tam też starsi chłopcy, więc słyszysz kilka dosadnych komentarzy dotyczących rywali z poprzedniego meczu. Nie dodatek w oknie jest dziura, a na ścianach grzyb. Orientujesz się, że jest gorzej, niż słyszałeś.",
            "Jedziesz do zaprzyjaźnionych klubów zobaczyć, jak u nich wyglądają szatnie. W jednym jest jeszcze gorzej, a w drugim – łazienka wygląda jak spa.",
            "Sprawdzasz w archiwum, kiedy był ostatni remont szatni. Okazuje się, że około 15 lat temu…"
        ],
},
{
    "Ojciec stosuje przemoc wobec Ady.": ["",
        "Rozmawiasz z tatą Ady. Mówi, że w młodości trenował tenis, ale musiał przerwać treningi ze względu na kontuzję kolana. Teraz bardzo chce, żeby jego córka została zawodową tenisistką. Dużo z nią ćwiczy, daje jej wskazówki. Nagrywa wszystkie mecze i je z nią omawia. Kilka razy zdarzyło się, że niezadowolony komentował jej grę.",
        "Ostatnio dziewczyny pytały się Ady, co jej się stało. Gdy przebierały się na trening, zobaczyły na jej plecach siniaki. Ada nie chce rozmawiać o tym, co dzieje się w domu. Mówi, że bardzo chce zostać tenisistką, a tata bardzo się stara, żeby jej w tym pomóc.",
        "Czytasz artykuł o Jelenie Dokić, serbskiej tenisistce. W biografii opisuje, jak po porażce w półfinale Wimbledonu w 2000 r. była przez ojca maltretowana i wyrzucona z pokoju hotelowego. Zastanawiasz się, czy tak musi wyglądać sport młodych ludzi."
    ],
}
]
export default function P8() {
    const [selectedWord, setSelectedWord] = useState("");
    const [showButton, setShowButton] = useState(false);
    const [selectedPoint, setSelectedPoint] = useState(0);
    const [points, setPoints] = useState(8);
    const [content, setContent] = useState<string>("");
    const warnWords = [
        "ośmiesza zawodników",
        "krzyczy",
        "obwiniają bramkarkę",


        "fotografują zawodników",
        "Warunki lokalowe",
        "stosuje przemoc"
    ]
    let radioPoints = useMemo(() => ({
        "points0": 0,
        "points1": 0,
        "points2": 0,
        "points3": 0,
        "points4": 0,
        "points5": 0
    }), []);
    let description = [];

    if (localStorage.getItem('textList')) {
        description = (JSON.parse(localStorage.getItem('textList')!));
    }

    useEffect(() => {
        document.querySelectorAll("label").forEach((element: any) => {
            if (element.nextSibling ) {
                if (element.children[1].checked) {
                    element.nextSibling.children[1].value = 1
                }
                if (element.nextSibling.nextSibling) {
                    element.nextSibling.nextSibling.children[1].value = 2
                }
            }
            if (element.previousSibling) {
                if (element.children[1].checked) {
                    element.previousSibling.children[1].setAttribute("disabled", "true");
                }
            }

        })
        document.querySelectorAll("input").forEach((element: any) => {
            if (parseInt(element.value) !== 1) {
                element.setAttribute("disabled", "true");
            }
            else{
                element.removeAttribute("disabled");
            }
            if (points - element.value < 0) {
                element.setAttribute("disabled", "true");
            }


        })
    })

    useEffect(() => {
        document.querySelectorAll("input").forEach((element: any) => {

        })
        let a: number = 0
        Object.values(radioPoints).forEach((key: any) => {
            a += parseInt(key)
        })
        setPoints(8 - a)
        if (points === 0) {
            setShowButton(true)
        }
    }, [points, radioPoints, selectedPoint])

    return (
        <div>
            <MoreInfo />
            <h3 className={style.linkWithLogo}>
                <img src={reakcja} alt="" />
                <span> &gt; </span>
                klub sportowy
                <span> &gt; </span>
                zdobywanie informacji
            </h3>
            <div style={{width:"90%", margin:"0 auto"}}>
                <p style={{  }}>
                Pamiętaj, że masz do wykorzystania tylko 8 godzin, wybierając nie masz możliwości cofnięcia
                </p>
            </div>
            <div className={style.checkbox}>

                <div className={style.gridContainer}>
                    {popUpContent!.map((e: any, index: any) => {
                        // let name = 'points' + index.toString();

                        let name = Object.keys(e)[0]
                        return <Radio onOKClick={(e: any) => {
                            setSelectedWord(name);
                            if (!e.currentTarget.children[1].disabled) {


                                setSelectedPoint(selectedPoint + 1);
                                radioPoints[name as keyof typeof radioPoints] = parseInt(e.currentTarget.children[0].innerText);

                                document.querySelectorAll("input").forEach((element: any) => {
                                    if (element.disabled) {
                                        setContent(popUpContent[index][name][parseInt(e.currentTarget.children[0].innerText)]);

                                    }
                                    if (element.name === (e.currentTarget.children[1].name) && e.currentTarget.children[1].value > element.value) {

                                        element.setAttribute("disabled", "true");
                                        e.currentTarget.className = styles.active

                                    }
                                    if (element.name === (e.currentTarget.children[1].name) && points === 0) {
                                        element.setAttribute("disabled", "true");

                                    }
                                })
                            }
                        }}
                            name={name} >
                            {/* if name.includes(warnWords[number]) strip name by wrong words and paste first part of name with warnWords[index] inside p in span then add second part with red color */}
                            <p>

                                {
                                    name.toString().includes(warnWords[index]) &&
                                    <span>{name.split(warnWords[index])[0]}<span style={{ color: "red" }}>{warnWords[index]}</span>{name.split(warnWords[index])[1]}</span>
                                }
                            </p>
                        </Radio>
                    })}
                </div>

                <div className={style.container}>
                    <div className={style.progressBar}>
                        <p>Liczba godzin przydzielonych w celu uzyskania dodatkowych informacji {8 - points}/8</p>
                        <div className={style.progress} style={{ width: `${(8 - points) * (100 / 8)}%`, transition: ".5s" }}></div>
                        <div className={style.progressGray}></div>
                    </div>
                    <div className={style.content}>
                        {
                            warnWords.map((e: any, index: any) => {
                                if (selectedWord.includes(e)) {
                                    return <h3>
                                        {selectedWord.split(e)[0]}
                                        <span style={{ color: "red" }}>
                                            {e}
                                        </span>
                                        {selectedWord.split(e)[1]}
                                    </h3>
                                }
                                return <></>
                            })
                        }
                        <p>{content}</p>
                    </div>

                </div>
            </div>

            {
                showButton &&
                <Link
                    className={style.link}
                    onClick={() => {
                        localStorage.setItem('textList', JSON.stringify([...description, content]));
                    }}
                    to={getGameRoute(PAGES.p9)}
                >Dalej</Link>
            }

        </div>
    );
}