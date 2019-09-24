
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';

export default class Profile extends React.Component {
  
  render() {

    const columns = [
      {
        title: 'User',
        dataIndex: 'user_name',
        width: 150,
      },
      {
        title: 'Food',
        dataIndex: 'food',
        width: 150,
      },
      {
        title: 'Drink',
        dataIndex: 'drink',
      },
      {
        title: 'Animal',
        dataIndex: 'animal',
        width: 150,
      },
      {
        title: 'Bird',
        dataIndex: 'bird',
        width: 150,
      },
      {
        title: 'Hobby',
        dataIndex: 'hobby',
      },
      {
        title: 'Place',
        dataIndex: 'place',
      },
    ];

    const data = [{"id":23,"user_id":1,"user_name":"Pramuditha","food":"Choco","drink":"Ice Coffee","animal":"Elephant","bird":"Peacock","hobby":"Hiking","place":"Kandy"},{"id":24,"user_id":3,"user_name":"Achini","food":"Cakes","drink":"Faluda","animal":"Dog","bird":"Humming bird","hobby":"Traveling","place":"Badulla"},{"id":25,"user_id":4,"user_name":"Kapila","food":"Rice","drink":"Tea","animal":"Camel","bird":"Penguin","hobby":"Bloging","place":"Ampara"},{"id":26,"user_id":2,"user_name":"Himsara","food":"Burger","drink":"Black Coffee","animal":"Bull","bird":"Bat","hobby":"Badminton","place":"Mountlavinia"},{"id":27,"user_id":6,"user_name":"Monali","food":"Popcorn","drink":"Green Tea","animal":"Dog","bird":"Bat","hobby":"Gaming","place":"Namunukula"},{"id":28,"user_id":5,"user_name":"Madara","food":"Pizza","drink":"Nutela ","animal":"Panda","bird":"Cock","hobby":"Reading","place":"Sembuwatta"},{"id":30,"user_id":1,"user_name":"Pramuditha","food":"Potato chips","drink":"Beer","animal":"Donkey","bird":"Cock","hobby":"Camping","place":"Chariot Path"}];
    

    return(
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
    )
  }
}

  
          