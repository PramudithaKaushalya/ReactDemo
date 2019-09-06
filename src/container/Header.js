import React, { Component } from 'react';
import { Calendar } from 'antd';
import 'antd/dist/antd.css';

function onPanelChange(value, mode) {
    console.log(value, mode);
}
  

export default class Header extends Component {
    render() {
        return (
                <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4, alignItems: 'center' }}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
        )
    }
}
