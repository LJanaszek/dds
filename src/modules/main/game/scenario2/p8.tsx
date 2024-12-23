import { useEffect, useMemo, useState } from "react";
import styles from "../../../../components/radio/style.module.scss"
import style from "./style.module.scss"
import { Link } from "react-router-dom";
import Radio from "../../../../components/radio";
import reakcja from "../../../../assets/icons/reakcja_logo_blue.svg"
import { getGameRoute, PAGES } from "../../../../routes";
import MoreInfo from "../../../../components/moreInfo";

export const popUpContent: any = [{
    "Rejestratorka głośno komentuje zachowanie i diagnozę pacjenta.":
        ["",
            "Rozmawiasz z rejestratorką. Uważa, że nie zrobiła niczego złego. Chciała jak najszybciej opanować sytuację na korytarzu. Było dużo ludzi, a Paweł płakał, więc głośno rozmawiała przez telefon. Inni pacjenci też zasługują na spokój. Poza tym i tak wszyscy widzieli, że z Pawłem jest coś nie tak. A mama Janka, który musiał przepuścić Pawła, nie miała nic przeciwko.",
            "Upewniasz się, czy w przychodni jest kącik dla rodzica z dzieckiem. Zastawiasz się, czy nie dokupić jakichś zabawek.",
            "Rozmawiasz ze znajomą nauczycielką o pracy z uczniami ze spektrum autyzmu. Uświadamiasz sobie, jak zróżnicowane potrzeby mają dzieci neuroatypowe.",
        ],
},

{
    "Ojciec stosuje przemoc wobec Adama. Wyzywa i popycha syna.":
        ["",
            "Rozmawiasz z pielęgniarkami. Wskazują, że od ojca Adama nie było czuć alkoholu. Był zdenerwowany, takie rzeczy się zdarzają. Dobrze, że wyszli, bo pozostali pacjenci czuli się niepewnie. Same chciały już wołać ochronę. Stanem Adama się nie przejmują, wyglądał jedynie na lekko osłabionego.",
            "Wysłuchujesz narzekania osób pracujących w administracji przychodni, że pacjenci są niewdzięczni i roszczeniowi. Szczerze im współczujesz.",
            "Rozmawiasz z koleżanką ze szpitala. Opowiada ci, co dzieje się w rejestracji na SOR. Stwierdzasz, że jednak u was nie jest najgorzej.",
        ],
},

{
    "Lekarka oceniająco i bezosobowo zwraca się do dziecka.": ["",
        "Rozmawiasz z lekarką. Czuje się urażona Twoimi pytaniami. Podkreśla, że jest profesjonalna, ma wielu pacjentów i mało czasu. Musi działać sprawnie. Robisz wywiad w rejestracji. Okazuje się, że rodzice starają się unikać tej lekarki, jednak wielu pracowników ostatnio odeszło z przychodni, więc faktycznie zapisywanych jest do niej wielu pacjentów.",
        "Sprawdzasz akta pracownicze lekarki. Wszystko jest w porządku.",
        "Czytasz opinie o lekarce i przychodni w Internecie. Nie są zbyt dobre, ale z drugiej strony inne placówki mają podobną liczbę gwiazdek."
    ],
},

{
    "Dziecko ma ślady mogące świadczyć o samookaleczaniu.":
        ["",
            "Rozmawiasz z pielęgniarką. Tłumaczy Ci, że nie chciała urazić Eryka. Lubi bardziej tęgich chłopaków. Uważa, że wtedy widać, że to prawdziwi mężczyźni będą, a nie chuderlaki jakieś. Młody mężczyzna musi mieć masę, a nie same kości. Jeśli chodzi o blizny, to może coś tam było, ale to nie jest sprawa dla pielęgniarki, ona jest od pobierania krwi.",
            "Rozmawiasz z lekarzem Eryka. Nie pamięta, żeby Eryk miał blizny wskazujące na samookaleczanie się. Z pewnością by zobaczył, bo kiedyś już zgłosił taki przypadek u gimnazjalistki. Potem dzwonili do niego ze szkoły i z poradni psychologicznej – dużo musiał wyjaśniać.",
            "Zainteresował Cię temat samookaleczenia młodych. Czytasz o tym więcej w Internecie."
        ],
},

{
    "W trakcie badania Marta zauważa na ciele dziecka wiele siniaków, a także kilka łysych placków na głowie.":
        ["",
            "Rozmawiasz z pielęgniarką. Podkreśla, że zna rodzinę Angeliki, pracowała z jej mamą. Chce dla nich jak najlepiej. Nie ma powodów, żeby nie wierzyć w wyjaśnienia mamy dotyczące siniaków.",
            "Rozmawiasz z lekarką Angeliki, dowiadujesz się, że przy badaniu pediatrycznym zauważyła siniaki w różnych stadiach gojenia się i wyglądające tak, jakby ktoś bardzo mocno chwycił dziecko. Angelika jest częstą bywalczynią przychodni, a wyjaśnienia jej mamy o pochodzeniu urazów nie były spójne, co wzbudzało pewien niepokój, ale ostatecznie wszystkie wydawały się prawdopodobne. Dziewczynka jest mała i niewiele waży jak na swój wiek. W rozmowie z lekarką nie odpowiada lub nie reaguje na pytania, nie chce wskazać zabawki, którą chciałaby się pobawić, jest wycofana.",
            "Rozmawiasz z mamą Angeliki. Informujesz, że objawy zauważone przez pracowników przychodni mogą wskazywać na krzywdzenie dziecka. Mama Angeliki zaczyna płakać, nie chce rozmawiać na ten temat. Podajesz jej kontakt do organizacji wspierającej osoby doświadczające przemocy domowej oraz ośrodka interwencji kryzysowej."
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
        "głośno komentuje",
        "stosuje przemoc wobec Adama.",
        "oceniająco i bezosobowo",
        "ślady mogące świadczyć o samookaleczaniu.",
        "zauważa na ciele dziecka wiele siniaków, a także kilka łysych placków na głowie."
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
                Ochrona zdrowia
                <span> &gt; </span>
                zdobywanie informacji
            </h3>
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
                    to={getGameRoute(PAGES.p19)}
                >Dalej</Link>
            }

        </div>
    );
}