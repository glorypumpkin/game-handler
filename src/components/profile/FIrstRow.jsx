
export function Stats() {
    const stats = ["Статура", "Спритність", "Кмітливість", "Емпатія"]
    return (<div className="stats">
        {stats.map((stat) => {
            let points = [];
            for (let i = 0; i < 5; i++) {
                points.push(<button key={i} className="point">{i}</button>)
            }
            return <div className="stat" key={stat}>
                <div className="shrink-0 w-32 p-1">
                    {stat}
                </div>
                <div className="flex-grow px-1 flex justify-between">
                    {points}
                </div>
            </div>
        }
        )}
    </div>)
}

export function BaseStats() {

    return (
        <div>
            <div className="table-title">
                <h2>Базові стати</h2>
            </div>
            <Stats></Stats>
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