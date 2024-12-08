import style from "./style.module.scss"
type DropListProps = {
    title: string,
    id: number,
    content: {
        name: string,
        isCorect: boolean
    }
}
let userAnswers: { [key: string]: string; }[] = [];
if (localStorage.getItem('userAnswers')) {
userAnswers = JSON.parse(localStorage.getItem('userAnswers')!) as Array<{ [key: string]: string }>}

let keys: string[] = []
let answers = userAnswers.map((answer: { [key: string]: string }) => {
    keys.push(Object.keys(answer)[0]);
    return answer
});
keys = keys.filter((value, index) => keys.indexOf(value) === index);

answers = answers.filter((value, index) => answers.indexOf(value) === index);

let singleKeyAnswers: string[] = []
console.log(answers, "===============================")
export default function DropList({ title, content, id }: DropListProps) {
    singleKeyAnswers = answers.map((answer: { [key: string]: string }) => answer[keys[id]]);
    //delete elements where value = undefined
    singleKeyAnswers = singleKeyAnswers.filter((value, index) => singleKeyAnswers.indexOf(value) === index);
    console.log(singleKeyAnswers);
    singleKeyAnswers.pop();
    return (<div className={style.dropListContainer}>

        {singleKeyAnswers.map((answer, index) => <p key={index}>{answer}</p>)}
        <p onClick={() => {
            document.querySelector(`.${style.dropListContainer}`)?.classList.toggle(`${style.active}`);

        }}>{title}</p>
        <ul>
            <li>{content.name}</li>
        </ul>
    </div>)
}