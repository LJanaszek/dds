import { useEffect, useMemo, useState } from "react";
import styles from "../../../../components/radio/style.module.scss"
import style from "./style.module.scss"
import { Link } from "react-router-dom";
import Radio from "../../../../components/radio";
import reakcja from "../../../../assets/icons/reakcja_logo_blue.svg"
import { getGameRoute, PAGES } from "../../../../routes";

export const popUpContent: any = [{
    "Nauczycielka krzyczy i rzuca w uczniów kredą.":
        ["",
            "Rozmawiasz z uczniami i uczennicami o atmosferze na lekcjach matematyki. Twierdzą, że pani Kasia nie potrafi utrzymać dyscypliny i niepotrzebnie się na nich denerwuje. Zaczyna ich wtedy obrażać. W równoległej klasie podobno jest tak samo, dodatkowo zdarzyło się, że rzuciła w ucznia kredą.",
            "Rozmawiasz z innymi nauczycielami i nauczycielkami, w tym wychowawczyniami. Wszyscy są zgodni, że Kasia jest w porządku. Stara się, jest dobrą matematyczką, w poprzedniej szkole miała wielu laureatów konkursów. Niestety dostała „najgorsze” klasy, więc nie jest łatwo, ale nie może ponosić odpowiedzialności za niewychowaną młodzież. Nikt by tego nie wytrzymał.",
            "Sprawdzasz akta pracownicze Kasi. Nic nie wzbudza Twoich podejrzeń.",
        ],
},

{
    "Ojciec krzyczy na syna, poniża, wyzywa i popycha go":
        ["",
            "Rozmawiasz z wychowawczynią Łukasza. Dowiadujesz się, że Łukasz jest „trudnym uczniem”. Rodzice zapewniają mu niezbędną terapię, ściśle współpracują ze szkołą. Starają się, żeby chłopiec miał dobre warunki do rozwoju. Trzeba zrozumieć pana Tomasza. Poza tym to, że krzyczał i szarpnął chłopaka, o niczym nie świadczy.",
            "Oglądasz nagranie z kamery ustawionej na parkingu. Widać na nim, jak tata popycha Łukasza.",
            "Analizujesz oceny i uwagi o Łukaszu w dzienniku lekcyjnym. Niczego nie wnoszą do Twojej dotychczasowej wiedzy.",
        ],
},

{
    "Zuzia jest smutna, nigdy nie ma ze sobą drugiego śniadania, a dodatkowo przejawia zachowania lękowe i ma trudności w nauce.": ["",
        "Rozmawiasz z wychowawczynią Małgorzatą. Przyznaje, że wie, że mama Zuzi ma problem z alkoholem. Uważa, że trzeba dać szansę matce. Zuzi nic nie grozi. Jej wyniki faktycznie się pogorszyły, ale ostatnie sprawdziany zaliczyła. Nauczycielka stwierdza, że zrobiła to, co powinna – powiedziała rodzicowi o problemach uczennicy, wysłuchała matki. W końcu jest polonistką, a nie terapeutą z klubu AA.",
        "Zapoznajesz się z wynikami dydaktycznymi Zuzi oraz informacjami o niej w dzienniku lekcyjnym. Wszystko jest zgodne z tym, co powiedziała Ci wychowawczyni.",
        "Rozmawiasz z poprzednią wychowawczynią Zuzi. Potwierdza to, co zostało już ustalone."
    ],
},

{
    "Pan Robert wypytuje o chłopaków, łapie za biodra, opowiada seksistowskie dowcipy.":
        ["",
            "Prosisz uczennice o rozmowę. Faktycznie potwierdzają to, o czym mówiły na korytarzu. Ale zaznaczają, że pan Robert jest spoko i nie chcą, żeby miał jakiekolwiek problemy. Dla nich wszystko jest w porządku.",
            "Rozmawiasz z opiekunem praktyk. Mówi, że Robert to wesoły człowiek. Może faktycznie czasem coś chlapnie, ale od wielu lat szkoła kieruje do niego uczniów i uczennice i nikt nigdy nie zgłaszał problemów. Lepiej też nie kombinować, bo w mieście jest niewiele miejsc, w których uczniowie mogą zdobyć doświadczenie, więc warto dbać o dobre relacje. Tym bardziej że przecież nic groźnego się nie dzieje.",
            "Sprawdzasz w Internecie opinie o zakładzie pracy. Są różne, ale w żaden sposób nie odwołują się do zachowań, o których mówiły uczennice."
        ],
},

{
    "Maciek prześladuje Adama":
        ["",
            "Rozmawiasz z panem Piotrem. Stwierdza, że to nic nowego – zwykłe kocenie pierwszaków. Należy to ukrócać, ale też nie ma co robić afery. Takie rzeczy zawsze się działy, a z Maćkiem trzeba się jeszcze jakoś te parę miesięcy przemęczyć.",
            "Próbujesz porozmawiać z Adamem. Ten jednak nie jest rozmowny. Stwierdza, że nic się nie stało. Wie, że takie są zasady w szkole i pierwszaki muszą się z tym pogodzić.",
            "Dzwonisz do kolegi z innej szkoły, żeby dowiedzieć się, jak wyglądają tam relacje pierwszoklasistów ze starszymi rocznikami."
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
        "krzyczy i rzuca",
        "krzyczy na syna, poniża, wyzywa",
        "jest smutna, nigdy nie ma ze sobą drugiego śniadania",
        "łapie za biodra, opowiada seksistowskie dowcipy.",
        "prześladuje",
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
            <h3 className={style.linkWithLogo}>
                <img src={reakcja} alt="" />
                <span> &gt; </span>
                szkoła
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
                    to={getGameRoute(PAGES.p29)}
                >Dalej</Link>
            }

        </div>
    );
}