import React, { Component } from 'react';
import Pdf from "react-to-pdf";
import "./index.css";
import {Button} from 'antd';

const ref = React.createRef();
const loginStyle = {
    maxHeight: '440px',
    width: "90%",
    maxWidth: "900px",
    margin: "30px auto",
    border: "1px solid #ddd",
    borderRadius: "5px",
    paddingLeft: "40px",
    float: 'center'
}

export default class Pdfs extends Component {
    render() {
        return (
            <div>
                <div style={{float: 'right'}}>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <Button  type="primary" onClick={toPdf} shape="circle" icon="download" />}
                </Pdf>
                </div>
                <br/>
                <div style={loginStyle} ref={ref} className="white">
                <div className="scrollable-container-pdf">
                <div className="background">
                    <br/>
                    <br/>
                    <br/>
                        <h1>Hello </h1>
                        <h2>Start editing to see!</h2>
                        <h2>Start editing to see!</h2>
                        <h2>Start editing to see!</h2>
                        <h2>Start editing to see!</h2>
                        <h2>Start editing to see!</h2>
                        <h2>Start editing to see!</h2>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
