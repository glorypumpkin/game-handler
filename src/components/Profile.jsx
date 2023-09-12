'use client'
import Image from "next/image"
import { BaseStats, Skills, Expierence, Stats } from "@components/profile/FIrstRow"
import { Wounds, Recources, MutationPoints, RotPoints, Inventory, Textboxes } from "@components/profile/SecondRow"
import { useState, useContext } from "react"
import { ProfileContext } from "@app/profile-gallery/profile/page"
import Dropdown from 'react-dropdown'


export function Profile() {
    return (
        <div className="profile">
            <div className="header">
                <div className="title text-xl flex justify-center">
                    <h1>Name: </h1>
                    <Role></Role>
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
                    <Talents></Talents>
                    <Notes></Notes>
                </div>
            </div>
        </div>
    )
}

export function Role(){
    const [profile] = useContext(ProfileContext)
    const role = profile.role;

    return (
        <div className="role">
            <Dropdown
            options={role}
            value={role[0]}
            placeholder="Select an option"
            >
            </Dropdown>

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

export function Talents() {
    const [profile, { addTalent, removeTalent, updateTalent }] = useContext(ProfileContext)

    return (
        <div>
            <div className="table-title flex">
                <h2>Гідності</h2>
                <button onClick={addTalent}>+</button>
                <button onClick={removeTalent}>-</button>
            </div>
            <Textboxes rows={profile.talents} updateRow={updateTalent}></Textboxes>
        </div>
    )
}

export function Notes() {
    const [profile, { updateNotes }] = useContext(ProfileContext)
    return (
        <div className="notes h-96">
            <div className="table-title">
                <h2>Нотатки</h2>
            </div>
            <div className="text h-full">
                <textarea className="border w-full h-full"
                onChange={(e) => updateNotes(e.target.value)}
                ></textarea>
            </div>
        </div>
    )
}