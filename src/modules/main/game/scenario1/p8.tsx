import { useEffect, useMemo, useState } from "react";

import style from "./style.module.scss"
import { Link } from "react-router-dom";
import Radio from "../../../../components/radio";
import { getGameRoute, PAGES } from "../../../../routes";


export default function P8() {
    const [showButton, setShowButton] = useState(false);
    const [selectedPoint, setSelectedPoint] = useState(0);
    const [points, setPoints] = useState(8);
    const [content, setContent] = useState<string>("");
    const popUpContent: any = [{
        points0: ["qwertyuiop", "asdfghjkl", "zxcvbnm", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],
    },

    {
        points1: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    },

    {
        points2: ["qwertyuiop", "1", "zxcvbnm", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],
    },

    {
        points3: ["qwertyuiop", "2", "zxcvbnm", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],
    },

    {
        points4: ["qwert", "3", "zxcvbnm", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],
    },
    {
        points5: ["qwertyuiop", "3", "zxcvbnm", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],
    }
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
    document.querySelectorAll("input").forEach((element: any) => {
        if (points - element.value < 0) {
            element.setAttribute("disabled", "true");
        }

    })
    useEffect(() => {
        let a: number = 0
        if (selectedPoint === popUpContent.length) {
            setShowButton(true)
        }
        Object.values(radioPoints).forEach((key: any) => {
            a += parseInt(key)
        })
        setPoints(8 - a)
    }, [popUpContent.length, selectedPoint])
    console.log(radioPoints)
    return (
        <div className={style.checkbox}>
           
            <div className={style.gridContainer}>
                {description!.map((e: any, index: any) => {
                    let name = 'points' + index.toString();

                    return <div className={style.radioContainer}>


                        <Radio onOKClick={(e: any) => {
                            setContent(popUpContent[index][name][e.currentTarget.children[0].value]);
                            setSelectedPoint(selectedPoint + 1);
                            radioPoints[name as keyof typeof radioPoints] = e.currentTarget.children[0].value;
                            document.querySelectorAll("input").forEach((element: any) => {
                                if (element.name === (e.currentTarget.children[0].name) && e.currentTarget.children[0].value > element.value) {
                                    element.setAttribute("disabled", "true");
                                }
                                if (element.name === (e.currentTarget.children[0].name) && points === 0) {
                                    element.setAttribute("disabled", "true");
                                }
                            })
                        }}
                            name={name} >
                            <p>{e}</p>
                        </Radio>
                    </div>

                })}
            </div>
            <div>
                <p>{content}</p>
            </div>
            
            {
                showButton &&
                <Link onClick={() => {
                    localStorage.setItem('textList', JSON.stringify([...description, content]));
                }}
                    to={getGameRoute(PAGES.pa9)}
                >Dalej</Link>
            }
        </div>
    );
}