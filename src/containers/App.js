import React,{Component} from "react";
import './App.css'
import CardList from "../components/CardList";
// import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'

class App extends Component{

    constructor(){
        super();
        this.state = {
            robots:[],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.setState({robots:data}))
    }
    onSearchHandler = (event) =>{
      
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filteredRobote = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })

        return !this.state.robots.length ?
        <h1>Loading</h1>:
        (
        <div className="tc">
        <div>
        <h1>RobotFriends</h1>
        <SearchBox searchChange={this.onSearchHandler}/>
        </div>
        <Scroll>
        <CardList robots={filteredRobote}/>
        </Scroll>
        </div>
    )
}
}
export default App;