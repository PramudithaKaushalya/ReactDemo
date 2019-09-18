import React, { Component } from 'react';
import { Calendar } from 'antd';
import 'antd/dist/antd.css';

const loginStyle = {
    width: "90%",
    maxWidth: "500px",
    margin: "10px auto",
    border: "5px solid #ddd",
    borderRadius: "5px",
    padding: "30px"
}

function onPanelChange(value, mode) {
    console.log(value, mode);
}
  

export default class Header extends Component {
    render() {
        return (<div style={loginStyle} className="white">
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
        )
    }
}


//<div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
