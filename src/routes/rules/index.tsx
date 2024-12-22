import { Link } from "react-router-dom";
import style from "./style.module.scss"
import dayOne from "../../assets/rules/dzien1_1.png"
import dayOneTwo from "../../assets/rules/dzien1_2.png"
import dayTwo from "../../assets/rules/dzien2_1.png"
import dayThree from "../../assets/rules/dzien3_1.png"
import logo from "../../assets/logos/reakcja_logo.png"
import warn from "../../assets/icons/wykrzyk.png"
import logos from "../../assets/logos/logosy.jpg"
import { getGameRoute, getHomeRoute, PAGES } from "..";

export default function RulesPage() {
    return (
        <div className={style.rules}>
            <div className={style.top}>
                <img src={logo} alt="" />
                <h2>
                    Wprowadzenie:
                </h2>
                <p>
                    Interaktywne narzędzie, które pomoże Ci zidentyfikować sytuacje, wskazujące na krzywdzenie dziecka. W każdej z nich możesz zdecydować  o rodzaju podjętej reAKCJI. To gra symulacyjna, w której możesz w bezpieczny sposób przećwiczyć swoje wybory i decyzje dotyczące ochrony  dziecka przed krzywdzeniem,  żeby w rzeczywistych  sytuacjach Twoje działanie było skuteczne i pomogło zatrzymać krzywdzenie. W grze wcielisz się w rolę osoby odpowiedzialnej za wdrażanie polityki ochrony dzieci w wybranej instytucji. Twoim zadaniem będzie zarekomendowanie wprowadzenia zmian i podjęcia działań adekwatnych do sytuacji, które zaobserwujesz.
                </p>
            </div>
            <div className={style.firstDay}>
                <p><b>Czas rozgrywki: do 60 minut</b></p>
                <h2>Jak grać:</h2>
                <h3>Dzień pierwszy - obserwacja</h3>
                <p>Na tym etapie gry przyjrzysz się temu co wydarzyło się w klubie sportowym. Zapoznaj się uważnie z opisami wszystkich sytuacji.
                </p>
                <div className={style.imageContainer}>
                    <span>Aby zapoznać się z historią danego miejsca kliknij w nie na mapie.
                    </span>
                    <img src={dayOne} alt="" />
                </div>
                <p>
                    W trakcie zapoznawania się z historią wynotuj wszystkie sytuacje, które wzbudzają Twój niepokój i którym według Ciebie  należy się lepiej przyjrzeć.
                </p>
                <div className={style.imageContainerReverse}>
                    <img src={dayOneTwo} alt="" />
                    <div>
                        <span>
                            Aby dodać sytuację do swoich notatek kliknij na aktywne słowo w tekście opisujące niepokojące Cię zdarzenie. Jego opis automatycznie pojawi się w notatniku z prawej strony ekranu.

                        </span>
                        <p>
                            Gdy Twój notatnik będzie pełny wciśnij przycisk “dalej”.
                        </p>
                    </div>
                </div>
                <div className={style.attention}>
                    <img src={warn} alt="" />
                    <p>
                        Uwaga! Nie wszystkie opisane sytuacje świadczą o krzywdzeniu (lub ryzyku krzywdzenia) dziecka. Przeanalizuj swoje notatki. Przycisk “dalej” pojawi się dopiero wtedy, gdy na Twojej liście znajdą się wyłącznie sytuacje ryzykowne lub mogące świadczyć o krzywdzeniu.
                    </p>
                </div>
            </div>
            <div className={style.secondDay}>
                <h3>
                    Dzień drugi - zbieranie informacji
                </h3>
                <p>
                    Przyjrzyj się swoim notatkom i przypomnij sobie jakich sytuacji dotyczą. Twoim zadaniem będzie zebranie więcej informacji na ich temat. Do dyspozycji masz 8 godzin, które możesz wykorzystać na rozmowy z zaangażowanymi w sytuację osobami lub obserwację danej kwestii.

                </p>
                <div className={style.imageContainer}>
                    <div>
                        <span>
                            Aby zapoznać się z dodatkowymi informacjami wybierz sytuację, którą chcesz przeanalizować  i zaznacz pole wykorzystania godziny obok niej. Gdy to zrobisz na ekranie wyświetli się dodatkowa informacja.
                        </span>
                        <span>
                            Każdej sytuacji możesz poświęcić maksymalnie 3 godziny. Pamiętaj jednak, że masz ich do dyspozycji tylko 8, najwięcej czasu poświęć tym kwestiom, które mogą stanowić największe zagrożenie dla bezpieczeństwa dzieci.
                        </span>
                    </div>
                    <img src={dayTwo} alt="" />
                </div>
            </div>
            <div className={style.thirdDay}>
                <h3>
                    Dzień trzeci - rozwiązania
                </h3>
                <p>
                Gdy uda Ci się dokładnie zapoznać z każdą sytuacją pora na rekomendację i wdrażanie rozwiązań.
                </p>
                <div className={style.imageContainer}>
                    <img src={dayThree} alt="" />
                    <span>Na wyświetlającej się liście zaznacz te pozycje, które według Ciebie należy zastosować  w reakcji na zaistniałą sytuację.</span>
                </div>
            </div>
            <div className={style.bottom}>
                <Link to={getHomeRoute()}
                onClick={()=>{localStorage.clear()}}
                >Rozpocznij grę &gt;</Link>
            </div>
            <div className={style.logos}>
                <img src={logos} alt="" />
            </div>
        </div>
    );
}











