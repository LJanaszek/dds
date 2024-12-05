import { Link } from "react-router-dom";
import { getGameRoute, PAGES } from "../../../../routes";
import style from "./style.module.scss"
import dayOne from "../../../../assets/rules/dzien1_1.png"
import dayOneTwo from "../../../../assets/rules/dzien1_2.png"
import dayTwo from "../../../../assets/rules/dzien2_1.png"
import dayThree from "../../../../assets/rules/dzien3_1.png"
import logo from "../../../../assets/logos/reakcja_logo.png"
export default function P1() {
    return (
        <div className={style.rules}>
            <div className={style.top}>
                <img src={logo} alt="" />
                <h2>
                    Wprowadzenie:
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nesciunt vitae. Natus omnis odit saepe. Tempore asperiores animi, adipisci minima nesciunt veritatis fuga sint consequuntur aspernatur? Provident dolor repellendus cupiditate!
                </p>
            </div>
            <div className={style.firstDay}>
                <h2>Jak grać:</h2>
                <h3>Dzień pierwszy - obserwacja</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, dolore ducimus fuga deleniti alias ea nulla ut vel voluptatem inventore rem, non dicta in. Vel nemo corporis tempore error!</p>
                <div className={style.imageContainer}>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius ad, quo possimus facilis et impedit voluptas dolorum. Numquam rerum quibusdam veritatis sit maiores impedit repellat dolores eum praesentium quisquam?</span>
                    <img src={dayOne} alt="" />
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit libero in, modi animi reiciendis delectus tempore incidunt rerum placeat quibusdam recusandae voluptatem nulla, exercitationem fugiat consequuntur error illum dicta blanditiis?
                </p>
                <div className={style.imageContainerReverse}>
                    <img src={dayOneTwo} alt="" />
                    <div>
                        <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus commodi exercitationem, delectus eos odit, nesciunt nobis animi illo id minus itaque fugit deserunt quae ut ducimus ipsam rem dicta ipsum.
                        </span>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe sunt molestiae consequuntur obcaecati ullam minima neque nesciunt delectus facilis commodi ducimus accusamus veniam excepturi harum quisquam officiis, ab voluptatem?
                        </p>
                    </div>
                </div>
                <div className={style.attention}>
                    <img src="" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsam unde sint laborum corrupti. Dolor aliquid doloremque modi, corrupti ut aliquam omnis laboriosam repellat nisi illo totam, iste accusantium perferendis.
                    </p>
                </div>
            </div>
            <div className={style.secondDay}>
                <h3>
                    Dzień drugi - zbieranie informacji
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sequi, debitis impedit consectetur voluptatibus, consequatur perspiciatis dignissimos minus saepe natus ab, culpa fuga vel dolores voluptates soluta! Omnis, sapiente laudantium.
                </p>
                <div className={style.imageContainer}>
                    <div>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam incidunt nesciunt dicta obcaecati exercitationem unde delectus nihil autem consequatur reprehenderit itaque, nemo quae amet dolor expedita molestias reiciendis voluptates ab?
                        </span>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nihil soluta sint adipisci, eos nam saepe iusto eum ratione illum. Optio suscipit minus alias veritatis asperiores commodi necessitatibus soluta sint.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, tempora! Distinctio accusantium quibusdam illum error quisquam ad nemo quas culpa beatae, laudantium porro, deleniti veritatis aut ipsum tempore minima cum.
                </p>
                <div className={style.imageContainer}>
                    <img src={dayThree} alt="" />
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, magni, quibusdam voluptates necessitatibus doloremque quis amet nemo est odit voluptas perferendis, culpa error? Temporibus distinctio deleniti repellat facere amet accusamus.</span>
                </div>
            </div>
            <div className={style.bottom}>
                <Link to={getGameRoute(PAGES.pa2)}>Rozpocznij grę &gt;</Link>
            </div>
        </div>
    );
}