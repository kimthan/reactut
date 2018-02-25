import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  onHandleChange(event){
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState({
      [name] : value
    })
  }
  
  onHandleSubmit(event){
    event.preventDefault()
    console.log(this.state)
    
  }

  render() {

    return (
        
        <div className="container mt-30">
          <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              
              <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Form</h3>
                  </div>
                  <div className="panel-body">
                    <form onSubmit={ this.onHandleSubmit.bind(this) }>
                      <div className="form-group">
                        <label>Username: </label>
                        <input 
                              type="text" 
                              className="form-control" 
                              name="username" 
                              onChange={ this.onHandleChange.bind(this) }
                        />
                      </div>
                      <div className="form-group">
                        <label>Password: </label>
                        <input 
                              type="password" 
                              className="form-control" 
                              name="password" 
                              onChange={ this.onHandleChange.bind(this) }
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                      <button type="reset" className="btn btn-default">Reset </button>
                    </form>
                    

                  </div>
              </div>
              
            </div>
          </div>
          
        </div>
        
    );
  }
}

export default App;
