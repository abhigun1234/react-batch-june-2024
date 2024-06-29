import React, { Component } from 'react';

class ListData extends Component {
    fruits=["banana","apple","orenge","mengo"]
   
    constructor(){
       
        super()
    }
    render() {
        return (
            <div>
             {
                this.personData.map(person=>{
                    {
                        return <div>{person.first_name}</div>
                    }
                })
             }
            </div>
        );
    }
}

export default ListData;