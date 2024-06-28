import React from 'react'
import TaskList from './components/TaskList'
import CompletedTask from './components/CompletedTask'

const App: React.FC = () => {
  return (<>
    <div className="todo_app_section">
      <div className="todo_app_container">
    
    <div className="TaskList">
      <h2>Task List</h2>
    <div>
      <TaskList />
    </div>
    </div>
      <div className="CompletedTask">
        <h2>Completed Task</h2>

      <div>
      <CompletedTask />
</div>
</div>
    </div>
    </div>
    </>
  )
}

export default  App