import style from "./style.module.scss"
type Props = {
    data: Object,
    children?: React.ReactNode  
}
export default function DropList({ data , children  }: Props) {
    
    let userAnswers: any[] = [];

    if (localStorage.getItem('userAnswers') && userAnswers.length === 0) {
        userAnswers = JSON.parse(localStorage.getItem('userAnswers')!);
    }


    userAnswers = userAnswers.filter((item, index) => userAnswers.indexOf(item) === index);
    const values2 = Object.values(data);


    

    return <div className={style.dropList}>
        {values2.map((key, index) => {
            return <div key={index} className={style.item}>
                <div>
                    {Object.keys(values2[index])}
                    <div key={index}>
                        {children }
                    </div>
                </div>
            </div>
        })}

    </div>
}