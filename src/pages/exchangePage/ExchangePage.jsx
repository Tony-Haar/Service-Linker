import React from "react";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import Footer from "../../components/Footer";



function ExchangePage() {

    const itemStyle = {
        textDecoration: "none",
        color: "black",
    };

    return(
        <>
            <h3 style = {{padding: "50px 0 0 50px"}}>Chat</h3>
            <p style = {{paddingLeft: "50px"}}>communicate with professionals and clients here</p>

            <div style = {{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginBottom: "50px"
            }}>
                <div>
                    <div style = {{
                        background: "",
                        width: "100%",
                        height: "auto",
                        padding: "50px 0 50px 50px"
                    }}>
                        <Link style = {itemStyle}>
                            <h6>From Ken - plumber</h6>
                            <p>Good morning, i saw your request. It is still on the table?</p>
                            <div style = {{width: "80%", height: "1px", backgroundColor: "gray", marginBottom: "15px"}}></div>
                        </Link>
                        <Link style = {itemStyle}>
                            <h6>From Ken - plumber</h6>
                            <p>Good morning, i saw your request. It is still on the table?</p>
                            <div style = {{width: "80%", height: "1px", backgroundColor: "gray", marginBottom: "15px"}}></div>
                        </Link>
                        <Link style = {itemStyle}>
                            <h6>From Ken - plumber</h6>
                            <p>Good morning, i saw your request. It is still on the table?</p>
                            <div style = {{width: "80%", height: "1px", backgroundColor: "gray", marginBottom: "15px"}}></div>
                        </Link>
                        <Link style = {itemStyle}>
                            <h6>From Ken - plumber</h6>
                            <p>Good morning, i saw your request. It is still on the table?</p>
                            <div style = {{width: "80%", height: "1px", backgroundColor: "gray", marginBottom: "15px"}}></div>
                        </Link>
                    </div>
                </div>

                <div style = {{
                    width: "100%",
                    padding: "50px 50px 0 0",
                    height: "auto",
                    background: "",
                }}>
                    {/* <form action="" style = {{
                        width: "100%",
                        height: "100%"
                    }}>
                        <textarea 
                            name="" 
                            id="" 
                            style = {{
                                resize: "none",
                                width: "100%",
                                height: "70%"
                            }}
                        ></textarea>
                        <Button>Send</Button>
                    </form> */}

                    {/* <h3>Messaging</h3> */}
                    <div className="message-display-container">
                    <div className="message-display-inner-container">
                        <p className="pro-message">
                        At which time the would like the fix?
                        </p>
                        <p className="user-message">
                        As i told you my sink right now need to be <br />
                        fix and in the bathroom there are some job to be done.
                        </p>
                        <p className="pro-message">
                        Alright sorry for any inconvenience of misunderstanding
                        </p>
                        <p className="pro-message">Can i have some picture ?</p>
                        <p className="user-message">please, give me one second</p>
                    </div>
                    <form style = {{marginTop: "20px"}}>
                        <textarea style = {{
                            resize: "none",
                            width: "100%",
                            height: "70%"
                        }}/>
                        <Button>Send</Button>
                    </form>
                    </div>
                        </div>
                    </div>
            <Footer/>
        </>
    )
}

export default ExchangePage;