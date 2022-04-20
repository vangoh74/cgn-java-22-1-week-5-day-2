import React from "react";
import './Title.css'

export default function Title() {
    return (
        <div className={'title-div'}>
            <img className={'logo'} src={'https://rickandmortyapi.com/icons/icon-512x512.png'}/>
            <h1 className={'title'}> Rick And Morty Character Gallery </h1>
        </div>
    )
}