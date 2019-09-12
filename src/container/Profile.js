import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './index.css';
import { Descriptions } from 'antd';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Descriptions title="Profile" bordered>
                    <Descriptions.Item label="Name" span={3}>Cloud Database</Descriptions.Item>
                    <Descriptions.Item label="Billing Mode" span={3}>Prepaid</Descriptions.Item>
                    <Descriptions.Item label="Usage Time" span={3}>2019-04-24 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="Status" span={3}>7845120</Descriptions.Item>
                    <Descriptions.Item label="Negotiated Amount" span={2}>$80.00</Descriptions.Item>
                </Descriptions>
            </div>
        )
    }
}

