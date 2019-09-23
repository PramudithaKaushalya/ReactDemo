import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'antd/dist/antd.css';
import { AutoComplete, Button, Descriptions, Popover } from 'antd';

const loginStyle = {
    width: "100%",
    maxWidth: "1300px",
    margin: "30px auto",
    border: "5px solid #ddd",
    borderRadius: "3px",
    padding: "0px"
}

export default class Dashboard extends Component {
    
    componentWillMount(){
        axios.get('http://localhost:5000/all')
        .then(res => {
            console.log("res", res.data);
            this.setState({
                data : res.data
            })
        }) 
    } 

    state = {
        user : false,
        value : '',
        dataSource : [],
        data : [],
        filter : [],
        favorites : []
    }
   
    handleClick(id) {
        axios.get('http://localhost:5000/favorite/'+id)
        .then(res => {
            console.log("res", res.data);
            this.setState({
                favorites : res.data
            })
            console.log("state"+this.state.favorites);
        })
    }

    onSelect = (value) => {
        const data = this.state.data;
        let len = data.length;
        for(var i=0; i<len; i++){
          var string = data[i]["name"];
          if(value===string){
            this.setState({
                user : true,
                filter : data[i]
              });
          }}
        
      }
    
      onSearch = searchText => {
        const data = this.state.data;
        let len = data.length;
        var arr = [];
        for(var i=0; i<len; i++){
          var re = new RegExp(searchText, 'gi');
          var string = data[i]["name"];
          if(string.match(re)){
            arr.push(string);
          }}
        this.setState({
          dataSource: arr
        });
      };
    
      onChange = value => {
        this.setState({ value });
      };

    render() {
        const { dataSource, value, data, user, filter } = this.state; 
        let us = user; 
        const text = <h6>User Favorites</h6>;
        const content = (
        <div style={{maxWidth: "600px"}}>
           <Descriptions >
                <Descriptions.Item label="Food">{this.state.favorites.food}</Descriptions.Item>
                <Descriptions.Item label="Drink">{this.state.favorites.drink}</Descriptions.Item>
                <Descriptions.Item label="Animal">{this.state.favorites.animal}</Descriptions.Item>
                <Descriptions.Item label="Bird"> {this.state.favorites.bird}</Descriptions.Item>
                <Descriptions.Item label="Hobby">{this.state.favorites.hobby}</Descriptions.Item>
                <Descriptions.Item label="Place"> {this.state.favorites.place} </Descriptions.Item>
            </Descriptions>
        </div>
        );      
        const buttonWidth = 70;

        return (
            <div style={loginStyle} className="white card z-depth-0 card-content center">
                <div>
                    <AutoComplete
                    value={value}
                    dataSource={dataSource}
                    style={{ width: 200 }}
                    onSelect={this.onSelect}
                    onSearch={this.onSearch}
                    onChange={this.onChange}
                    placeholder="Filter Here By Name"
                    />
                </div>
                <div className="scrollable-container-dash">
                <div className="background">
                <Table striped bordered hover >
                    <thead>
                       <tr>
                            <td><h6>Id</h6></td>
                            <td><h6>Name</h6></td>
                            <td><h6>Email</h6></td>
                            <td><h6>Contact</h6></td>
                            <td><h6> Salary</h6></td>
                            <td><h6>Favorites</h6></td>
                        </tr>
                    </thead>
                    <tbody>
                        {us && value!==''? 
                        <tr>
                            <td> {filter.user_id} </td>
                            <td> {filter.name} </td>
                            <td> {filter.email} </td>
                            <td> {filter.contact} </td>
                            <td> {filter.salary} </td>
                            <td> 
                                <div className="demo">
                                <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                                    <Popover placement="bottomRight" title={text} content={content} trigger="click">
                                    <Button type="primary" onClick={this.handleClick.bind(this, filter.user_id)} shape="circle" icon="search" />
                                    </Popover>
                                </div>
                                </div>
                            </td>
                        </tr>
                        :   data.map(item => (
                        <React.Fragment key={item.user_id}>                        
                            <tr>
                                <td> {item.user_id} </td>
                                <td> {item.name} </td>
                                <td> {item.email} </td>
                                <td> {item.contact} </td>
                                <td> {item.salary} </td>
                                <td> 
                                    <div className="demo">
                                    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                                        <Popover placement="bottomRight" title={text} content={content} trigger="click">
                                        <Button type="primary" onClick={this.handleClick.bind(this, item.user_id)} shape="circle" icon="search" />
                                        </Popover>
                                    </div>
                                    </div>
                                </td>
                            </tr>
                        </React.Fragment>
                            ))
                        }
                    </tbody>
                </Table>
                </div>
                </div>
            </div>
        )
    }
}

