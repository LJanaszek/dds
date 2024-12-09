import DropList from '../../../../components/dropList';
import style from './style.module.scss';
import taskImg from '../../../../assets/scenarios/scen_sport.png'
import allData from "./p9.json"
export default function P11() {
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
                            n/28
                        </p>
                    </div>
                    <div className={style.bottom}>
                        <h3>wyjaśnienie</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus doloribus reprehenderit hic qui deleniti dolore eos quos numquam sed, quisquam consectetur voluptates placeat ipsa voluptatibus? Nemo cum placeat voluptate expedita!
                        </p>
                    </div>
                </div>
                <div className={style.answers}>
                    <h2>twoje odpowiedzi</h2>
                    <div>
                        <DropList title='123' content={{
                            name: '123',
                            isCorect: true,

                        }}
                            id={0}
                            allData={allData}
                        />
                    </div>
                </div>


            </div>
            <div className={style.video}></div>
            <div className={style.moreInfo}></div>
        </div>
    );
}