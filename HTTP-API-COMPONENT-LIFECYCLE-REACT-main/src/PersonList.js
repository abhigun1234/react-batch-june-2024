import React, { Component } from 'react';

class PersonList extends Component {
    persons=['prateek',"pooja","shirish","anuradha","rahul","dhiraj"]
    personData=[{"id":1,"first_name":"Shae","last_name":"MacSporran","email":"smacsporran0@state.gov","gender":"Genderqueer"},
        {"id":2,"first_name":"Grete","last_name":"Tregidgo","email":"gtregidgo1@hao123.com","gender":"Female"},
        {"id":3,"first_name":"Willa","last_name":"Wattinham","email":"wwattinham2@phpbb.com","gender":"Female"},
        {"id":4,"first_name":"Gustie","last_name":"Bertenshaw","email":"gbertenshaw3@who.int","gender":"Female"},
        {"id":5,"first_name":"Faustine","last_name":"McKenzie","email":"fmckenzie4@bloomberg.com","gender":"Female"},
        {"id":6,"first_name":"Batholomew","last_name":"MacSharry","email":"bmacsharry5@linkedin.com","gender":"Male"},
        {"id":7,"first_name":"Lamar","last_name":"Thurling","email":"lthurling6@dmoz.org","gender":"Male"},
        {"id":8,"first_name":"Johann","last_name":"Edwicke","email":"jedwicke7@wikimedia.org","gender":"Male"},
        {"id":9,"first_name":"Garland","last_name":"Klosser","email":"gklosser8@kickstarter.com","gender":"Female"},
        {"id":10,"first_name":"Addy","last_name":"Dunning","email":"adunning9@dmoz.org","gender":"Male"}]
    // life cycle hook 
    render() {
        return (
            <div>
                {

                    // this.persons.map(person=>{
                    //     return <h1>{person}</h1>
                    // })
                    this.personData.map(person=>{
                        

                          return <h1> {person.first_name}</h1>
                       
                    })
                }
            </div>
        );
    }
}

export default PersonList;