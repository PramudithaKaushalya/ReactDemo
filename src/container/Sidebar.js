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
        <h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Crud Operations&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h5>
        <br/><br/>
        <ul className="right">
            <li><button className="btn black lighten-1 z-depth-10"><Link to='/signup'>Create</Link></button></li> <br/>
            <li><button className="btn black lighten-1 z-depth-10"><Link to='/'>Read</Link></button></li> <br/>
            <li><button className="btn black lighten-1 z-depth-10"><Link to='/update'>Update</Link></button></li>  <br/>
            <li><button className="btn black lighten-1 z-depth-10"><Link to='/delete'>Delete</Link></button></li>  <br/>          
        </ul> 
        </React.Fragment>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "gray", alignItems: "center"} }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open 
        </button>
      </Sidebar>
    );
  }
}
 
export default Sideba;