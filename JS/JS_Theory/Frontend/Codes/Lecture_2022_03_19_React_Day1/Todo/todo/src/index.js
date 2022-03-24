import ReactDOM from 'react-dom';
import React from 'react';
import './index.css'

class AddTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            taskDesc : ' '
        }
    }
   
    handleTaskTextChange(e){
         
         this.setState({
             taskDesc: e.target.value
         });
    }
    
    handleAddTaskClick(){
         this.props.handlerToCollectTaskInfo(
             this.state.taskDesc
         );
         this.setState({
             taskDesc: ' '
         });
    }

    render(){
        return(
            <form>
                <input type="text" placeholder="Enter your task here..." value={this.state.taskDesc} onChange={(e) => this.handleTaskTextChange(e)} />
                <input type="button" value="Add Task" onClick={() => this.handleAddTaskClick()}/>
            </form>
        )
    }
}

class TaskList extends React.Component {

    handleTaskClick(taskdesc){
        this.props.handlerToCollectTaskClickInfo(taskdesc);
    }

    handleDeleteTaskClick(taskdesc){
        this.props.handlerToDeleteTaskClickInfo(taskdesc);
    }

   render(){
        let list = [];

        for(let i = 0; i < this.props.tasks.length; i++){
            let task = this.props.tasks[i];
            let spanAction;

            if(task.isFinished){
                spanAction = (
                    <span class="material-icons" onClick={() => this.handleTaskClick(task.desc)}>close</span>
                );
            } else {
                spanAction = (
                    <span class="material-icons" onClick={() => this.handleTaskClick(task.desc)}>done</span>
                );
            }
            let deleteAction = (<span class="material-icons" onClick={() => this.handleDeleteTaskClick(task.desc)}>delete</span>)

            let listItem = (
                <div key={i}>
                    <span>{task.desc}</span>
                    {spanAction} {deleteAction}
                </div>
            );
            console.log(listItem);
            list.push(listItem);
        }

        return(
            <div className={this.props.forStyling}>
                <div className="list-container">
                    <div className='title'>{this.props.purpose}</div>
                    <div className='content'>
                        {list}
                    </div>
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            tasks: []
        }
    }

    handleNewTask(task){
        let oldTasks = this.state.tasks.slice();
        oldTasks.push({
              desc: task,
              isFinished: false  
        })
        this.setState({
            tasks: oldTasks
        })
    }

    handleTaskStatusUpdates(taskdesc, newStatus){
       let oldTasks = this.state.tasks.slice();
       
       let taskItem = oldTasks.find(ot => ot.desc == taskdesc);
       taskItem.isFinished = newStatus;

       this.setState({
           tasks: oldTasks
       })
    }

    removeTodo(taskdesc){
         let oldTasks = this.state.tasks.slice();
          console.log(oldTasks);
         let updatedTasks = oldTasks.filter(ot => ot.desc !== taskdesc);
          console.log(updatedTasks);
         this.setState({
             tasks: updatedTasks
         })  

    }

    render(){
       let tasks = this.state.tasks;
       let todoTasks = tasks.filter(t => t.isFinished === false);
       let doneTasks = tasks.filter(t => t.isFinished === true);

       return (
           <>
              <div class="app-title"><h1>TO-DO APP</h1></div> 
              <div className="add-task">
                <AddTask  handlerToCollectTaskInfo={(taskdesc) => this.handleNewTask(taskdesc)} />
              </div>
              <div className='task-lists'>
                <TaskList handlerToCollectTaskClickInfo={(taskdesc) => this.handleTaskStatusUpdates(taskdesc, true)}  tasks={todoTasks}  handlerToDeleteTaskClickInfo={(taskdesc) => this.removeTodo(taskdesc)} purpose="Todo" forStyling="todo"/>
                <TaskList handlerToCollectTaskClickInfo={(taskdesc) => this.handleTaskStatusUpdates(taskdesc, false)}  tasks={doneTasks} handlerToDeleteTaskClickInfo={(taskdesc) => this.removeTodo(taskdesc)} purpose="Finished" forStyling="finished"/>
              </div>
           </>
       );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));