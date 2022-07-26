import './app-info.css'

function AppInfo(props){
    const {totalWorkers, totalAwarded} = props
    return (
        <div className="app-info">
            <h1>Company N employee accounting</h1>
            <h2>Total number of employees: {totalWorkers}</h2>
            <h2>The award is received: {totalAwarded}</h2>
        </div>
    )
}

export default AppInfo