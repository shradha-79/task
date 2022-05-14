import React from 'react'
import { AiOutlineQuestionCircle, AiOutlineContainer } from "react-icons/ai";
import App from '../App.css';

export default function Card() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card shadow" style={{ width: "30rem", margin: "90px 0px 30px 0px" }}>
                        <div className="card-body row">
                            <div className="col-3">
                                <AiOutlineQuestionCircle size="4.8em" color="red" />
                            </div>
                            <div className="col-9">
                                <h1 style={{ fontSize: "20px" }}>FAQ</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card shadow" style={{ width: "30rem", margin: "90px 0px 30px 0px" }}>
                        <div className="card-body row">
                            <div className="col-3">
                                <AiOutlineContainer size="4.8em" color="red" />
                            </div>
                            <div className="col-9">
                                <h1 style={{ fontSize: "20px" }}>Travel Guide</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
