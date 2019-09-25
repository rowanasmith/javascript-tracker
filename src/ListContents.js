import React, { Component } from 'react';
import {connect} from 'react-redux';

class ListContents extends Component {

    render(){
        return(
            <tbody>
                {this.props.reduxState.projectsList.map(item => 
              <tr key={item.id}><td>{item.project_day}</td>
                <td>{item.project_name}</td>
                <td>{item.project_description}</td>
                <td>{item.project_url}</td>
                </tr>
            )}
            </tbody>
            
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
  })

  export default connect(mapReduxStateToProps)(ListContents);
  