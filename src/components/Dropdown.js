import React from 'react'
import { AiFillCaretDown,  } from "react-icons/ai";
import {BsChatRightDots } from "react-icons/bs";
import {IoShareSocial } from "react-icons/io5";
import {HiOutlineMail } from "react-icons/hi";
import {BsTelegram } from "react-icons/bs";
import {FaWhatsappSquare } from "react-icons/fa";
import {SiLivechat } from "react-icons/si";
import App from '../App.css';

export default function Dropdown() {

    return (
        <div className="container">

            <div className="row" style={{marginLeft:"10px"}}>
                <div className="card shadow" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" style={{ width: "65rem", margin: "90px 0px 30px 0px" }}>
                    <div className="card-body row">
                        <div className="col-2">
                            <BsChatRightDots size="4em" color="red" />
                        </div>
                        <div className="col-9">
                            <h1 style={{ fontSize: "20px" }}>Chat</h1>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="col-1">
                        <AiFillCaretDown size="1em" color="grey" />
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample">
                        <div class="card row card-body" style={{border: "none"}}>
                            <div class="row">
                                <div class="col"> </div>
                                <div class="col">
                                    <div className="row"><BsTelegram size="2em" color="skyblue"/></div>
                                    <div className="row" style={{marginLeft: "50px"}}>Telegram</div>
                                </div>
                                <div class="col">
                                    <div className="row"><FaWhatsappSquare size="2em" color="lightgreen"/></div>
                                    <div className="row" style={{marginLeft: "50px"}}>Whatsapp</div>
                                </div>
                                <div class="col">
                                    <div className="row"><SiLivechat size="2em" color="skyblue"/></div>
                                    <div className="row" style={{marginLeft: "50px"}}>Live chat</div>
                                </div>
                                <div class="col"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="row" style={{marginLeft:"10px"}}>
                <div className="card shadow" style={{ width: "65rem", margin: "90px 0px 30px 0px" }}>
                    <div className="card-body row">
                        <div className="col-2">
                            <IoShareSocial size="4em" color="red" />
                        </div>
                        <div className="col-9">
                            <h1 style={{ fontSize: "20px" }}>Social</h1>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="col-1">
                        <AiFillCaretDown size="1em" color="grey" />
                        </div>
                    </div>
                   
                </div>
            </div>

            
            <div className="row" style={{marginLeft:"10px"}}>
                <div className="card shadow" style={{ width: "65rem", margin: "90px 0px 30px 0px" }}>
                    <div className="card-body row">
                        <div className="col-2">
                            <HiOutlineMail size="4em" color="red" />
                        </div>
                        <div className="col-9">
                            <h1 style={{ fontSize: "20px" }}>Send Query</h1>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="col-1">
                        <AiFillCaretDown size="1em" color="grey" />
                        </div>
                    </div>
                </div>
            </div>

            

        </div>
    )
}
