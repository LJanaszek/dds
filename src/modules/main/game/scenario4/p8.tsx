import { useEffect, useMemo, useState } from "react";
import styles from "../../../../components/radio/style.module.scss"
import style from "./style.module.scss"
import { Link } from "react-router-dom";
import Radio from "../../../../components/radio";
import reakcja from "../../../../assets/icons/reakcja_logo_blue.svg"
import { getGameRoute, PAGES } from "../../../../routes";

export const popUpContent: any = [{
    "Nauczyciel wysyła głosówkę i pociesza Elę.":
        ["",
            "Rozmawiasz z Przemkiem. Wyjaśnia Ci, że chciał pomóc Eli – nie mógł nie zareagować na jej wiadomość. Tym bardziej że zna sytuację rodzinną dziewczyny. Jednak korespondencja trwała ponad godzinę. Musiał zająć się swoimi rodzinnymi sprawami. Dlatego gdy uznał, że Ela się uspokoiła, zakończył rozmowę. Dziewczynę, podobnie jak większość uczniów swojej klasy, ma wśród znajomych w mediach społecznościowych. Dzięki temu może lepiej budować relacje z młodymi.",
            "Sprawdzasz wyniki dydaktyczne Eli oraz informacje o zachowaniu zawarte w dzienniku klasy. Uczy się średnio, nie ma żadnych uwag od nauczycieli.",
            "Weryfikujesz uprawnienia Przemka do nauczania – dyplomy, ukończone szkolenia i studia. Wszystko jest w porządku.",
        ],
},

{
    "Nauczyciel zabrał Tymka własnym samochodem i mocno wyściskał.":
        ["",
            "Rozmawiasz z Pawłem. Tłumaczy Ci, dlaczego zdecydował się na jazdę autem. Kiedy wracali, nie było już miejsca na szkolnym parkingu, dlatego zaparkował dalej. Wyściskał chłopaka, bo ten był zawiedziony i mówił, że nie poszło mu dobrze. To była naturalna reakcja Pawła.",
            "Tymon mówi Ci, że jest wdzięczny Pawłowi za wsparcie. Faktycznie, dziwnie się czuł, jadąc autem nauczyciela. Na dodatek nie spodziewał się takiej czułości ze strony Pawła. Koledzy potem się z niego śmiali z tego powodu. Podobno w klasie krąży plotka, że Paweł bardzo, bardzo lubi Tymka.",
            "Próbujesz zweryfikować, ilu uczniów Pawła brało udział w konkursach wyższego etapu oraz czy podwoził ich autem. Udaje Ci się tylko ustalić, że było ich w ciągu ostatnich dwóch lat pięcioro.",
        ],
},

{
    "Nauczyciel komentuje zdjęcia uczniów i przesyła swoje zdjęcia.": ["",
        "Rozmawiasz z klasą. Uczniowie i uczennice są trochę zawstydzeni, śmieją się. Mówią, że nie spodziewali się, że Adam wyśle im swoje zdjęcie, i to jeszcze w samych kąpielówkach! Zaznaczają, że lubią swojego wychowawcę, jest spoko. Chociaż głupio wyszło, że nie zareagował na zdjęcie Kasi, Leny i Michała i nie dał im serduszka. Oni mają dużo kompleksów – zachowanie Adama je tylko pogłębiło.",
        "Rozmawiasz z Adamem. Podkreśla swój świetny kontakt z uczniami. Mówi, że w tych czasach nie ma możliwości zbudowania relacji z młodymi bez mediów społecznościowych. Zwracasz mu uwagę, że zasady bezpiecznych relacji są również dla jego bezpieczeństwa i taka sytuacja może być odebrana dwuznacznie. Adam wzrusza ramionami i wraca do swoich zadań.",
        "Przeglądasz media społecznościowe Adama. Widzisz, że lubi koty, jest fanem Legii Warszawa oraz interesuje się kulinariami."
    ],
},

{
    "Uczniowie i uczennice mają nauczycielkę wśród znajomych w mediach społecznościowych.":
        ["",
            "Rozmawiasz z nauczycielką. Potwierdza, że wrzuciła mem. To jest jej prywatny profil i ma do tego prawo. W Polsce obowiązuje wolność słowa. Nie możesz jej nakazać myśleć inaczej albo zakneblować jej ust. Nauczycielka uważa, że media społecznościowe są też świetnym sposobem dotarcia do nastolatków. Budowania z nimi relacji i modelowania postaw. Świetne jest również to, że można łatwo prowadzić dyskusje z różnymi ludźmi. Jej uczniowie mieli szansę zobaczyć pod postem komentarze prawników, innych nauczycieli, lokalnych polityków. A faszystowskie poglądy trzeba ośmieszać i wyraźnie mówić „nie”. Na Twoje pytania dotyczące Janka szybko odpowiada, że jak ktoś chce działać w polityce, to musi mieć grubą skórę i umieć się bronić. Poza tym Janek nie poruszył z nią tej kwestii, a ją młodzi lubią i wcale się jej nie boją, więc nie ma tematu.",
            "Rozmawiasz z Jankiem. Mówi, że było mu przykro – wszyscy w klasie śmieją się z jego działalności i partii, którą popiera. Teraz wie, że nawet wychowawczyni jest w tym gronie. A najbardziej zabolało go to, że nie zareagowała, kiedy jeden z uczniów nawoływał do przemocy, pisząc, że „trzeba się ich pozbyć”. Stracił zaufanie do Małgorzaty jako człowieka i nauczycielki. Nie chce być już jej znajomym, ale boi się jej reakcji, jeśli ją zablokuje lub usunie.",
            "Wchodzisz na stronę młodzieżówki, do której przynależy Janek. Czytasz o ich działalności. Nie uważasz, żeby były to aktywności związane z faszystowskimi poglądami."
        ],
},

{
    "Nauczycielka plotkowała o innych nauczycielkach i dzieciach.":
        ["",
            "Rozmawiałeś z Klaudią. Uważa, że to, co robi i z kim się spotyka w weekendy w swoim wolnym czasie, to jej sprawa. Spędziła miły czas z częścią uczennic. Nie ona je zapraszała, tylko mama Karoliny. Trudno, żeby miała ingerować w te decyzje. Nie pamięta dokładnie, o czym rozmawiała z przyjaciółką. Ale to raczej źle świadczy o dzieciach, że podsłuchują i potem coś przekazują, pewnie zresztą w przekręconej formie. Nie widzi sensu czegokolwiek wyjaśniać. A Twoje pytania traktuje jako formę mobbingu.",
            "Próbujesz wybadać u innych nauczycielek i nauczycieli, czy uważają, że Klaudia jest plotkarką. Nikt z Tobą nie chce o tym rozmawiać.",
            "Przeprowadzasz obserwację lekcji Klaudii, żeby zobaczyć, jakie relacje ma z uczniami i uczennicami."
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
        "wysyła głosówkę",
        "zabrał Tymka",
        "komentuje zdjęcia uczniów i przesyła",
        "mają nauczycielkę wśród znajomych",
        "plotkowała o innych nauczycielkach i dzieciach",
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
                klub sportowy
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
                    to={getGameRoute(PAGES.p39)}
                >Dalej</Link>
            }

        </div>
    );
}