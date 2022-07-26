import EmployeesListItem from "../employees-list-item/employees-list-item"

function EmployeesList({data, onDelete, onToggleProp, onSetSalary}){

    const style = {
        marginTop: 30,
        background: '#3d5a80',
        borderRadius: 4,
        color: '#fff'
    }

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return <EmployeesListItem 
                    key={id} 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                    onSetSalary={{id, onSetSalary}}/>
    })

    return (
        <ul className="app-list list-group" style={style}>
            {elements}
        </ul>
    )
}

export default EmployeesList