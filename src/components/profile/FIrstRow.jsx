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
                className={(i <= highlight ? " point-active" : " point-inactive")}>{i}</button>
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
    
    const skills = profile.stats;
    const wounds = profile.wounds;
    const skillKeys = ["Статура", "Спритність", "Кмітливість", "Емпатія"];
    const highlights = [];
    for(let key of skillKeys) {
        const h = skills[key] - wounds[key];
        highlights.push(h);
    }

    function handleClick(key, value) {
        const currentValue = skills[key];
        let newValue = value;
        if(currentValue === value) {
            newValue = value - 1;
        }
        updateStat(key, newValue);
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
    const [profile, {updateSkill}] = useContext(ProfileContext);

    const skillsValue = profile.skills;
    const skillsKey = ["Вплив (емпатія)", "Витривалість (статура)", "Бій (статура)", "Знання Зони (кмітливість)", "Лікування (емпатія)", "Спостережливість (кмітливість)", "Розуміння (кмітливість)", "Проворність (емпатія)", "Проникливість (емпаптія)", "Сила (статура)", "Скритність (спритність)", "Стрільба (спритність)"]

    const lenght = Object.keys(skillsValue).length;

    return (
        <div>
            <div className="table-title">
                <h2>Навички</h2>
            </div>
            <div className="stats">
                {skillsKey.map((skillName) => {
                    for (let i = 0; i < lenght; i++) {
                        //for every skillName add a default skillValue in input
                        //if skillName is in skillsValue return skillValue
                        //else return 0
                        if (skillName in skillsValue) {
                            let skill_input = <input type="number" className="w-full" min="0" defaultValue={skillsValue[skillName]} onChange={(e) => updateSkill(skillName, e.target.value)}></input>
                            return <div className="stat" key={skillName}>
                                <div className="shrink-0 w-[270px] p-1">
                                    {skillName}
                                </div>
                                <div>
                                    {skill_input}
                                </div>
                            </div>
                        }
                    }
                }
                )}
            </div>
        </div>
    )
}

export function Expierence() {
    const [profile, {updateExpierence, handleClick}] = useContext(ProfileContext);

    const expierence = profile.expierence;

    // function handleClick(value) {
    //     const currentValue = expierence;
    //     let newValue = value;
    //     if(currentValue === value) {
    //         newValue = value - 1;
    //     }
    //     updateExpierence(newValue);
    // }

    let points = [];
    // TODO: 20 points total but two rows with 0-10 range
    for (let i = 1; i < 21; i++) {
        points.push(
        <button key={i}
        onClick={() => handleClick(expierence, i, updateExpierence)}
        className={(i <= expierence ? " point-active" : " point-inactive")}
        ></button>)
        if (i === 10) {
            points.push(<br key={i + 1}></br>)
        }
    }
    return (
        <div>
            <div className="table-title">
                <h2>Досвід</h2>
            </div>
            <div className="exp-points">
                {points} 
            </div>
        </div>
    )
}