import React from "react";
import Sidebar from "react-sidebar";
import { Link } from 'react-router-dom';
//import DehazeIcon from '@material-ui/icons/Dehaze';
 
class Sideba extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
      <Sidebar
        sidebar={
        <React.Fragment>
        <h5 color='blue'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Crud Operations&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
        <ul className="right">
            <div><li><Link to='/signup'>Create</Link></li></div> 
            <li><Link to='/'>Read</Link></li> 
            <li><Link to='/update'>Update</Link></li>
            <li><Link to='/delete'>Delete</Link></li>            
        </ul> 
        </React.Fragment>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "gray" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open 
        </button>
      </Sidebar>
    );
  }
}
 
export default Sideba;