import { ProfileContext } from "@app/profile-gallery/profile/page"
import { BaseStats, Skills, Expierence, Stats } from "@components/profile/FIrstRow"
import { useContext, useState } from "react"


export function Textboxes({ rows, updateRow }) {

    return (<div className="border">
        {rows.map((row, i) => {
            return <input type="text" className="textboxes" key={i} value={row}
                onChange={(e) => updateRow(i, e.target.value)} />
        })}
        {/* <textarea type="text" className="w-full"></textarea> */}
    </div>)

}

export function Wounds() {
    const [profile, {updateWounds}] = useContext(ProfileContext);

    const wounds = profile.wounds;
    const woundsKeys = ["Статура", "Спритність", "Кмітливість", "Емпатія"];
    const highlights = [wounds["Статура"], wounds["Спритність"], wounds["Кмітливість"], wounds["Емпатія"]];

    function handleClick(key, value) {
        // "value" was clicked. If it already is the value of the stat, decrement it. Otherwise, set it to value.
        const currentValue = wounds[key];
        let newValue = value;
        if(currentValue === value) {
            newValue = value - 1;
        }
        updateWounds(key, newValue);
    }

    return (
        <div>
            <div className="table-title">
                <h2>Пошкодження</h2>
            </div>
            <div>
                <Stats skills={wounds} highlights={highlights} handleClick={handleClick}></Stats>
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
                    let recource_input = <input type="number" className="w-full" min="0"></input>
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
                <h2>Пункти мутації</h2>
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
            <div className="table-title flex justify-between">
                <h2>Очки гнилі</h2>
                <button>Сховати</button>
            </div>
            <div className="exp-points border">
                {points}
            </div>
        </div>
    )
}


export function Inventory() {

    const [profile, { addItem, removeItem, updateItem }] = useContext(ProfileContext)

    return (
        <div>
            <div className="table-title flex">
                <h2>Інвентар</h2>
                <button onClick={addItem}>+</button>
                <button onClick={removeItem}>-</button>
            </div>
            <Textboxes rows={profile.items} updateRow={updateItem}></Textboxes>
        </div>
    )
}