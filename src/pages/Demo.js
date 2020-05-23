import React,{Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Demo.css';


class Demo extends Component{
    componentDidMount() {
        
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
              
            

            const perso = res.data;
            this.setState({ persons : perso });
          }).catch((error)=>{
            console.log(error)
            alert("There is an error in API call.");
        });
        const fetchPromise = fetch('https://learnraact.herokuapp.com/api/customers')
         fetchPromise.then(response => {
            return response.json();
            }).then(arr => {
            this.setState({ list : arr });
            console.log(this.state.list);
            }).catch((error)=>{
                console.log(error)
            alert("There is an error in FETCH call.");
        });
        const site={id:1,name:"Its me shubham Only POst Request Testing"};
        axios.post('https://learnraact.herokuapp.com/api/add', site)
        .then(() => console.log('Site Created'))
        .catch(err => {
            console.error(err);
        });
  

    }
    constructor(props){
        super(props);
        this.state={
            a:5,
            array:["a","b","c"],
            persons:[],
            list:[],
        }
       
       
        
    }
    
     
    activate(id){
        console.log(id);
        console.log(this.state.a)
        this.setState({a:id})
        console.log(this.state.persons[1].id)
    }
    render(){
        this.myloop=this.state.list.map( (abc,i) => {
         if(i===1){
             return <li key={abc.id}><span>{abc.name} with if condition</span></li>
         }   
        return <li key={abc.id}> {abc.name} NAME</li>})
    return( 
        this.state.persons[0]!==undefined && this.state.list[0]!==undefined &&
        <div className="hy">
        <h1>Hello World {this.props.name} {this.state.a} {this.state.array[1]}</h1>
        <p>HIII</p>
        {   this.state.persons.map( abc => 
            
            <li key={abc.id}> {abc.name} NAME</li>
   
        )} <br></br>
        {   this.myloop
        } 
        <br></br>
        DATA BELOW
        <br></br>
        {this.state.persons[1].name}<br></br>
        {this.state.list[1].name}
        <div className="form-group">
        <label className="exampleInputEmail1">Email address</label>
        <div className="col-sm-4">
            
        <button type="button" onClick={() => this.activate(1)} className="btn btn-primary">click</button>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </input></div>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        </div>
    )}

}

export default Demo;

