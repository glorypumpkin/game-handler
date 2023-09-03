import Image from "next/image"

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
                </div>
                <div></div>
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
            ></Image>
        </div>
    )
}

export function BaseStats() {
    const stats = ["Статура", "Спритність", "Кмітливість", "Емпатія"]
    return (
        <div>
            <div>
                <h2>Базові стати</h2>
            </div>
            <div className="base-stats divide-y border">
                {stats.map((stat) => {
                    let points = [];
                    for (let i = 0; i < 5; i++) {
                        points.push(<button className="point">{i}</button>)
                    }
                    return <div className="stat flex items-center divide-x">
                        <div className="shrink-0 w-32 p-1">
                            {stat}
                        </div>
                        <div className="flex-grow px-1 flex justify-between">
                            {points}
                        </div>
                    </div>
                }
                )}
            </div>
        </div>
    )
}

export function Skills() {
    const skills = ["Вплив (емпатія)", "Витривалість (статура)", "Бій (статура)", "Знання Зони (кмітливість)", "Лікування (емпатія)", "Спостережливість (кмітливість)", "Розуміння (кмітливість)", "Проворність (емпатія)", "Проникливість (емпаптія)", "Сила (статура)", "Скритність (спритність)", "Стрільба (спритність)"]
}