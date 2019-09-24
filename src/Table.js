import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListContents from './ListContents';


class Table extends Component {


  render() {
      return(
      <div>
        
        <table id="projects">
        <tr>
          <th>Day</th>
          <th>Project Name</th>
          <th>Description</th>
          <th>Github Repo</th>
        </tr>
        <tbody>
          {this.props.reduxState.listContentReducer.map(item => 
              (<ListContents item={item} key={item.id}/>)
            )}
          </tbody>
      </table>
      </div>
    );
  }


}
const mapStateToProps = reduxState => ({
  reduxState
});

export default connect(mapStateToProps)(Table);
