import React from 'react'
import Dropdown from './Dropdown'
import App from '../App.css'
import Card from './Card'
export default function Main() {
    return (
        <div>
            <div className="main-bk">
                <h1 className="main-h">Hello, how can we help you?</h1>
                <p className="main-p">Find Travel guide, FAQ, chat,</p>
                <Card />
            </div>

            <Dropdown />
        </div>
    )
}
