import { useEffect, useMemo, useState } from "react";
import styles from "../../../../components/radio/style.module.scss"
import style from "./style.module.scss"
import { Link } from "react-router-dom";
import Radio from "../../../../components/radio";
import reakcja from "../../../../assets/icons/reakcja_logo_blue.svg"
import { getGameRoute, PAGES } from "../../../../routes";
import MoreInfo from "../../../../components/moreInfo";

export const popUpContent: any = [{
    "Wychowawca kąpie się nago w jeziorze i zaprasza do tego wychowanki.":
        ["",
            "Rozmawiasz z Mateuszem. Nie widzi niczego złego w zaistniałej sytuacji. Ludzie są częścią natury, a nasze ciała są piękne, nie można się ich wstydzić. Trzeba je podziwiać i uczyć się ich. Mateusz od dwóch lat jest naturystą i nikt nie może mu tego zabronić. W żadnym momencie jego działania nie miały podtekstu seksualnego. Dodatkowo miał przerwę w pracy i nie musiał dbać o to, żeby uczestniczki obozu były w pokojach. A od domków do jeziora jest bezpieczna droga. Mateusz podkreśla, że dziewczyny same przyszły nad jezioro i go podpatrywały. W żaden sposób ich do tego nie zachęcał.",
            "Sprawdzasz, czy rzeczywiście od domków do jeziora jest bezpieczny dystans. Mateusz miał rację – idzie się 5 minut, to około 300 metrów niewygodną ścieżką. Z okien żadnego z domków nie widać jeziora.",
            "Sprawdzasz informacje o naturystach. Starasz się upewnić, czy ruch naturystów nie jest związany z seksualizacją dzieci.",
        ],
},

{
    "Wychowawczyni dowiedziała się, że tata stosuje przemoc fizyczną i emocjonalną wobec Karoliny.":
        ["",
            "Rozmawiasz z Agnieszką. Wychowawczyni mówi, że zrobiła to, co powinna. Nie może ingerować w sposób wychowywania rodziców, ale zapewniła o swoim wsparciu dla Karoliny. Jest przekonana, że Karolina poczuła się lepiej. Nie chce też, żeby firma organizująca obóz dostała złe opinie od rodziców przez to, że wtrąca się w prywatne sprawy. Rodzice Karoliny to ważne osobistości w lokalnej społeczności – mama jest wykładowczynią na uczelni, a tata jest właścicielem zakładu szklarskiego, w którym zatrudnia wielu mieszkańców. Agnieszce zależy na pracy – jest wychowawczynią przez całe wakacje i zarobione pieniądze pozwalają jej utrzymać się przez pierwszy semestr studiów.",
            "Rozmawiasz z Karoliną. Szczegółowo opowiada Ci o sytuacji w domu. Cierpi z powodu przemocy fizycznej i psychicznej oraz zaniedbań wychowawczych. Opowiedziała wychowawczyni o sytuacji. Przez chwilę poczuła się lepiej, bo mogła się wygadać, ale nie zmienia to jej sytuacji domowej i nadal nie wie, co ma zrobić, żeby było lepiej. Chciałaby, żeby ktoś dorosły wreszcie przyznał, że to, co ją spotyka, jest złe.",
            "Wyszukujesz informacje o rodzicach Karoliny. Faktycznie, są bardzo uznanymi ludźmi w mieście.",
        ],
},

{
    "Opiekunowie nie sprawdzają, co kupują młodzi, oraz nie reagują na przemocowe komentarze chłopców.": ["",
        "Rozmawiasz z opiekunami. Stwierdzają, że to przecież zielona noc i młodzi mogą pozwolić sobie na nieco więcej – raz na tydzień chipsy, słodycze i energetyki nikomu nie zaszkodzą. A co do Staśka, to sam się zgodził nieść torby i na nic się nie skarżył. Zwracasz uwagę wychowawcom, że dzieci poniżej 18 r.ż. nie mogą kupować energetyków.",
        "Sprawdzasz skład produktów, które kupili chłopcy – faktycznie wszystkie są bardzo niezdrowe.",
        "Szukasz w Internecie informacji o tym, jak młodzi spędzają zielone noce."
    ],
},

{
    "Opiekunowie wymierzyli nadmiarową karę, niewynikającą z rzeczywistych konsekwencji działań chłopców.":
        ["",
            "Rozmawiasz z wychowawcami. Stwierdzają, że z tymi chłopakami były kłopoty przez cały czas trwania obozu. Zasłużyli sobie na karę i widać, że dzieci też tak uważały. Reakcja pozostałych dzieci tylko wzmacnia słuszność wymierzonej kary i przyniesie lepszy skutek na przyszłość. Takie są konsekwencje – zniszczyli, nabrudzili, to niech naprawią. A jak wyczyszczą też pozostałe toalety, to zapamiętają raz na zawsze, jak z nich korzystać.",
            "Rozmawiasz z chłopcami. Rozumieją, że muszą ponieść konsekwencje, ale razem z nimi powinien je ponieść Ignacy, który też rzucał papierem. Poza tym inni specjalnie nabrudzili, żeby się z nich pośmiać. A opiekunowie od początku się na nich uwzięli i właśnie dlatego chłopcy wybrudzili ich toaletę, bo ci wcale ich nie słuchali!",
            "Sprawdzasz u właściciela ośrodka, czy istnieje szansa, aby na czas obozu wyjąć drzwi do toalet. Nie otrzymujesz na to zgody."
        ],
},

{
    "Opiekun położył się w samych bokserkach obok chłopca.":
        ["",
            "Rozmawiasz z Michałem. Tłumaczy, że nic złego nie chciał zrobić. Wręcz przeciwnie, to była jego naturalna reakcja – przyszedł Olek, zgłosił problem, więc Michał chciał pomóc chłopcom zasnąć.",
            "Rozmawiasz z kolegą Michała prowadzącym poranny obchód. Potwierdza, że bardzo się zdziwił, widząc Michała śpiącego w pokoju chłopców. Z jego punktu widzenia ta sytuacja była bardzo dwuznaczna. Nie zauważył, żeby chłopcy czuli dyskomfort w obecności Michała.",
            "Sporządzasz listę audiobooków, które można puszczać dzieciom do snu."
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
        "kąpie się nago",
        "stosuje przemoc fizyczną i emocjonalną",
        "nie sprawdzają, co kupują młodzi, oraz nie reagują na przemocowe",
        "wymierzyli nadmiarową karę",
        "położył się",
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
                Obóz wakacyjny
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
                    to={getGameRoute(PAGES.p49)}
                >Dalej</Link>
            }

        </div>
    );
}