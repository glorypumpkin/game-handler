'use client'
import { Profile } from "@components/Profile";
import { createContext, useContext, useState } from "react";

export const ProfileContext = createContext();


export default function Page() {

    const [profile, setProfile] = useState({
        name: "Your name",
        role: ["1", "2", "3"],
        items: ["", ""],
        talents: ["", "", "", ""],
        stats: {
            "Статура": 1,
            "Спритність": 1,
            "Кмітливість": 3,
            "Емпатія": 1
        },
        wounds: {
            "Статура": 0,
            "Спритність": 0,
            "Кмітливість": 1,
            "Емпатія": 0
        },
        skills: {
            "Вплив (емпатія)": 0,
            "Витривалість (статура)": 0,
            "Бій (статура)": 0,
            "Знання Зони (кмітливість)": 0,
            "Лікування (емпатія)": 0,
            "Спостережливість (кмітливість)": 0,
            "Розуміння (кмітливість)": 0,
            "Проворність (емпатія)": 0,
            "Проникливість (емпаптія)": 0,
            "Сила (статура)": 0,
            "Скритність (спритність)": 0,
            "Стрільба (спритність)": 0
        },
        recources: {
            "Їжа": 0,
            "Вода": 0,
            "Патрони": 0
        },
        expierence: 3,
        mutations: 2,
        rot:4,
        notes: ""
    })

    const functions = {
        setProperty(property, value) {
            setProfile({
                ...profile,
                [property]: value
            })
        },
        setName() {
            setProfile({
                ...profile,
                name: "Name"
            })
        },
        addItem() {
            setProfile({
                ...profile,
                items: [...profile.items, ""]
            })
        },
        removeItem() {
            setProfile({
                ...profile,
                items: profile.items.slice(0, profile.items.length - 1)
            })
        },
        updateItem(i, value) {
            let newItems = [...profile.items];
            newItems[i] = value;
            setProfile({
                ...profile,
                items: newItems
            })
        },
        addTalent() {
            setProfile({
                ...profile,
                talents: [...profile.items, ""]
            })
        },
        removeTalent() {
            setProfile({
                ...profile,
                talents: profile.talents.slice(0, profile.talents.length - 1)
            })
        },
        updateTalent(i, value) {
            let newTalents = [...profile.talents];
            newTalents[i] = value;
            setProfile({
                ...profile,
                talents: newTalents
            })
        },
        updateStat(key, value) {
            let newStats = { ...profile.stats };
            newStats[key] = value;
            setProfile({
                ...profile,
                stats: newStats
            })
        },
        updateWounds(key, value) {
            let newWounds = { ...profile.wounds };
            newWounds[key] = value;
            setProfile({
                ...profile,
                wounds: newWounds
            })
        },
        updateSkill(key, value) {
            let newSkills = { ...profile.skills };
            newSkills[key] = value;
            setProfile({
                ...profile,
                skills: newSkills
            })
        },
        updateRecource(key, value) {
            let newRecources = { ...profile.recources };
            newRecources[key] = value;
            setProfile({
                ...profile,
                recources: newRecources
            })
        },
        updateExpierence(value) {
            setProfile({
                ...profile,
                expierence: value
            })
        },
        updateMutations(value) {
            setProfile({
                ...profile,
                mutations: value
            })
        },
        updateRot(value) {
            setProfile({
                ...profile,
                rot: value
            })
        },
        handleClick(point_type, value, updateFunction) {
            const currentValue = point_type;
            let newValue = value;
            if(currentValue === value) {
                newValue = value - 1;
            }
            updateFunction(newValue);
        },
        updateNotes(value) {
            setProfile({
                ...profile,
                notes: value
            })
        }
    }

    return (
        <ProfileContext.Provider
            value={[profile, functions]}>
            <div><Profile></Profile></div>
        </ProfileContext.Provider>
    )
}