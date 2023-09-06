'use client'
import { Profile } from "@components/Profile";
import { createContext, useContext, useState } from "react";

export const ProfileContext = createContext();


export default function Page() {

    const [profile, setProfile] = useState({
        name: "Hello",
        items: ["", ""],
        talents: ["", "", "", ""]
    })

    const functions = {
        setName() {
            setProfile({
                ...profile,
                name: "Hello World"
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
        }
    }

    return (
        <ProfileContext.Provider
            value={[profile, functions]}>
            <div><Profile></Profile></div>
        </ProfileContext.Provider>
    )
}