import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'antd/dist/antd.css';
import { AutoComplete } from 'antd';

const loginStyle = {
    width: "100%",
    maxWidth: "1300px",
    margin: "30px auto",
    border: "5px solid #ddd",
    borderRadius: "3px",
    padding: "10px"
}

export default class Dashboard extends Component {
    
    componentDidMount(){
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
        filter : []
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
                <Table striped bordered hover >
                    <thead>
                       <tr>
                            <td><h6>Id</h6></td>
                            <td><h6>Name</h6></td>
                            <td><h6>Salary</h6></td>
                        </tr>
                    </thead>
                    <tbody>
                        {us && value!==''? 
                        <tr>
                            <td> {filter.id} </td>
                            <td> {filter.name} </td>
                            <td> {filter.salary} </td>
                        </tr>
                        :   data.map(item => (
                        <React.Fragment key={item.id}>                        
                            <tr>
                                <td> {item.id} </td>
                                <td> {item.name} </td>
                                <td> {item.salary} </td>
                            </tr>
                        </React.Fragment>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

