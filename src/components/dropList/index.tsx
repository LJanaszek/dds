import style from "./style.module.scss"
type DropListProps = {
    title: string,
    id: number,
    content: {
        name: string,
        isCorect: boolean
    }
    allData: {

    }
}
let singleKeyAnswers: string[] = []
let userAnswers: { [key: string]: string; }[] = [];
let singleKeyAllData: { [key: string]: string; }[] = [];
let keys: string[] = []

if (localStorage.getItem('userAnswers')) {
    userAnswers = JSON.parse(localStorage.getItem('userAnswers')!) as Array<{ [key: string]: string }>
}

let answers = userAnswers.map((answer: { [key: string]: string }) => {
    keys.push(Object.keys(answer)[0]);
    return answer
});
keys = keys.filter((value, index) => keys.indexOf(value) === index);

answers = answers.filter((value, index) => answers.indexOf(value) === index);



export default function DropList({ title,allData, content, id }: DropListProps) {
    singleKeyAnswers = answers.map((answer: { [key: string]: string }) => answer[keys[id]]);
    singleKeyAnswers = singleKeyAnswers.filter((value, index) => singleKeyAnswers.indexOf(value) === index);
    singleKeyAnswers.pop();
    
    let data = Array.from(Object.values(allData))
    // display all data where key = keys[id]
    
    console.log(data[id], "data");
    return (<div className={style.dropListContainer}>
        <p onClick={() => {
            document.querySelector(`.${style.dropListContainer}`)?.classList.toggle(`${style.active}`);

        }}>
            {title} </p>
        {singleKeyAnswers.map((answer, index) => {
            if(answer.split(",")[1] === "false"){
                return <li key={index} className={style.wrong}>
                    {answer.split(",")[0]}
                </li>
            }
            else{
                return <li key={index} className={style.right}>
                    {answer.split(",")[0]}
                </li>
            }
        })}

    </div>)
}