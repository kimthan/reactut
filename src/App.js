import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      description: '',
      gender: 0,
      language: '',
      checkbox:true
    }
  }

  onHandleChange(event){
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
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
                              required="required"
                              type="text" 
                              className="form-control" 
                              name="username" 
                              onChange={ this.onHandleChange.bind(this) }
                        />
                      </div>
                      <div className="form-group">
                        <label>Password: </label>
                        <input 
                              required="required"
                              placeholder="username@email.com"
                              type="password" 
                              className="form-control" 
                              name="password" 
                              onChange={ this.onHandleChange.bind(this) }
                        />
                      </div>

                      <div className="form-group">
                        <label>Describtion: </label>
                        <textarea 
                          required="required"
                          className="form-control" 
                          rows="3" 
                          name="description" 
                          onChange={ this.onHandleChange.bind(this) }
                        ></textarea>
                      </div>

                        <label>Gender: </label>
                        <select 
                          required="required"
                          className="form-control" 
                          name="gender" 
                          value={ this.state.gender }
                          onChange={ this.onHandleChange.bind(this) }
                        >
                          <option value={0}>female</option>
                          <option value={1}>male</option>
                        </select><br/>
                        
                        <label>language</label>
                        <div className="radio">
                          <label>
                            <input 
                              type="radio" 
                              name="language" 
                              value="english"
                              onChange={ this.onHandleChange.bind(this) }
                            />
                            english
                          </label><br/>
                          <label>
                            <input 
                              type="radio" 
                              name="language" 
                              value="vietnamese"
                              onChange={ this.onHandleChange.bind(this) }
                            
                            />
                            vietnamese
                          </label>
                        </div>
                      
                        
                        <div className="checkbox">
                          <label>
                            <input 
                            type="checkbox"
                            name="checkbox"
                            value={true}
                            onChange={ this.onHandleChange.bind(this) }
                            defaultChecked={this.state.checkbox}
                            />
                            Checkbox
                          </label>
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
