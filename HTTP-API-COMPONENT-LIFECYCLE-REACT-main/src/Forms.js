import React, { Component } from 'react';

class Forms extends Component {
    constructor(){
        super()
        this.state={userName:'ravi'}
    }
  onChangeUserName=(event)=>{
    console.log("data",event.target.value)

  }
    render() {
        return (
            <div>
                <form>

                    <div>
                        <label >Enter User name</label>
                        <input placeholder='enter user name' value={this.state.userName} onChange={this.onChangeUserName}></input>
                    </div>
                </form>
                
            </div>
        );
    }
}

export default Forms;