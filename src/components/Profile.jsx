'use client'
import Image from "next/image"
import { BaseStats, Skills, Expierence, Stats } from "@components/profile/FIrstRow"
import { useState } from "react"


export function Profile() {
    return (
        <div className="profile">
            <div className="header">
                <div className="title text-xl flex justify-center">
                    <h1>Name: role</h1>
                </div>
            </div>
            <div className="content grid grid-cols-3">
                <div>
                    <BaseStats></BaseStats>
                    <Skills></Skills>
                    <Expierence></Expierence>
                </div>
                <div>
                    <Wounds></Wounds>
                    <Recources></Recources>
                    <MutationPoints></MutationPoints>
                    <RotPoints></RotPoints>
                    <Inventory></Inventory>
                </div>
                <div>
                    <Photo></Photo>
                </div>
            </div>
        </div>
    )
}

export function Photo() {
    return (
        <div className="image">
            <Image
                src="/test_image.jpg"
                width={300}
                height={300}
                alt="Picture of the character"
            ></Image>
        </div>
    )
}

export function Wounds() {
    return (
        <div>
            <div className="table-title">
                <h2>Пошкодження</h2>
            </div>
            <div>
                <Stats></Stats>
            </div>
            <div className="border">
                <p>Травми з тривалим ефектом: </p>
                <textarea type="text" className="w-full"></textarea>
            </div>
        </div>
    )
}

export function Recources() {
    const recources = ["Їжа", "Вода", "Патрони"]

    return (
        <div>
            <div className="table-title">
                <h2>Ресурси</h2>
            </div>
            <div className="stats">
                {recources.map((recource) => {
                    let recource_input = <input type="number" className="w-full"></input>
                    return <div className="stat" key={recource}>
                        <div className="shrink-0 w-[270px] p-1">
                            {recource}
                        </div>
                        <div>
                            {recource_input}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export function MutationPoints() {
    let points = [];
    for (let i = 0; i < 10; i++) {
        points.push(<button className="point">{i}</button>)
    }
    return (
        <div>
            <div className="table-title">
                <h2>Мутаційні очки</h2>
            </div>
            <div className="exp-points border">
                {points}
            </div>
        </div>
    )
}

export function RotPoints() {
    let points = [];
    for (let i = 0; i < 10; i++) {
        points.push(<button className="point">{i}</button>)
    }
    return (
        <div>
            <div className="table-title">
                <h2>Очки гнилі</h2>
            </div>
            <div className="exp-points border">
                {points}
            </div>
        </div>
    )
}


export function Inventory() {
    const [rows, setRows] = useState([""])

    console.log(rows.map)

    function RowsAdder() {
        setRows([...rows, ""])
    }

    const setInput = (i, value) => {
        let newRows = [...rows];
        newRows[i] = value;
        setRows(newRows);
    }

    return (
        <div>
            <div className="table-title flex">
                <h2>Інвентар</h2>
                <button onClick={RowsAdder}>+</button>
            </div>
            <div className="border">
                {rows.map((row, i) => {
                    return <input type="text" key={i} value={row}
                        onChange={(e) => setInput(i, e.target.value)} />
                })}
                {/* <textarea type="text" className="w-full"></textarea> */}
            </div>
        </div>
    )
}