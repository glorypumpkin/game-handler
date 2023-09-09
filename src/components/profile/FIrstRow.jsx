import { ProfileContext } from "@app/profile-gallery/profile/page"
import { useContext, useState } from "react"

// skills - the stats to display (one stat, one row)
// handleCLick - function to call when a point is clicked. Arguments: key: string, value: number
// highlights: number[] - numbers to highlight in each row
export function Stats( { skills, handleClick, highlights = [] }) {
    const stats = ["Статура", "Спритність", "Кмітливість", "Емпатія"];

    return (<div className="stats">
        {stats.map((statName, rowI) => {
            const statNumber = skills[statName];
            const highlightNum = highlights[rowI] || -1;
            let points = [];
            for (let i = 1; i < 6; i++) {
                const highlight = i <= highlightNum;
                points.push(
                <button key={i} 
                onClick={() => handleClick(statName, i)}
                className={"w-6 h-6 " + (highlight ? "point-active" : "")}>{i}</button>
                )
            }
            return <div className="stat" key={statName}>
                <div className="shrink-0 w-32 p-1">
                    {statName}
                </div>
                <div className="flex-grow px-1 flex justify-between">
                    {points}
                </div>
            </div>
        }
        )}
    </div>)
}
// [stat: value]
export function BaseStats() {

    const [profile, {updateStat}] = useContext(ProfileContext);

    function onPointClick() {
        //change the color of the point

    }

    const skills = profile.stats;
    const wounds = profile.wounds;
    const skillKeys = ["Статура", "Спритність", "Кмітливість", "Емпатія"];
    const highlights = [];
    for(let key of skillKeys) {
        const h = skills[key] - wounds[key];
        highlights.push(h);
    }

    function handleClick(key, value) {
        updateStat(key, value);
    }

    return (
        <div>
            <div className="table-title">
                <h2>Базові стати</h2>
            </div>
            <Stats skills={profile.stats} highlights={highlights} handleClick={handleClick}></Stats>
        </div>
    )
}

export function Skills() {
    const skills = ["Вплив (емпатія)", "Витривалість (статура)", "Бій (статура)", "Знання Зони (кмітливість)", "Лікування (емпатія)", "Спостережливість (кмітливість)", "Розуміння (кмітливість)", "Проворність (емпатія)", "Проникливість (емпаптія)", "Сила (статура)", "Скритність (спритність)", "Стрільба (спритність)"]

    return (
        <div>
            <div className="table-title">
                <h2>Навички</h2>
            </div>
            <div className="stats">
                {skills.map((skill) => {
                    let skill_input = <input type="number" className="w-full"></input>
                    return <div className="stat" key={skill}>
                        <div className="shrink-0 w-[270px] p-1">
                            {skill}
                        </div>
                        <div>
                            {skill_input}
                        </div>
                    </div>
                }
                )}
            </div>
        </div>
    )
}

export function Expierence() {
    let points = [];
    for (let i = 0; i < 10; i++) {
        points.push(<button className="point">{i}</button>)
    }
    return (
        <div>
            <div className="table-title">
                <h2>Досвід</h2>
            </div>
            <div className="stats">
                <div className="exp-points">
                    {points}
                </div>
                <div className="exp-points">
                    {points}
                </div>
            </div>
        </div>
    )
}