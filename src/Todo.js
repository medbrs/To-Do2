import React, {Component} from 'react'




class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: "",
            tab:[]
        }

    }

    HandleChange = (e) => {
        this.setState({
            text : e.target.value   
        })
    }
    handleAdd = () =>{
        this.setState({
            tab : this.state.tab.concat({text: this.state.text, completed: false}),
            text: ""
        })
    }


    delete = todo => {
        this.setState({
            tab: this.state.tab.filter(x => x.text !== todo.text)
        })
    }

    complete = todo  => {
        this.setState({
            tab: this.state.tab.map(x => x.text === todo.text ? {...todo, completed: !todo.completed} : x )
        })
    }


    render(){
        return(
            <div className='main'>
            <h1>To-Do App !</h1>
            <h3>Add New To-Do</h3>
            <input type='text' placeholder='new task' value={this.state.text} onChange={this.HandleChange}/>
            <button type='button' onClick={this.handleAdd}>Add</button>
            {this.state.tab.map(el => <div>
                <h3 style={{textDecoration: el.completed ? 'line-through' : 'none'}}>{el.text}</h3>
                <button onClick={() => this.complete(el)}>{el.completed ? 'Undo' : 'Complete'}</button>
                <button onClick={() => this.delete(el)}>Delete</button>
            </div>)}
            </div>
        )
    }
}


export default Todo