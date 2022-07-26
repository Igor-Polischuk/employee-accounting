import './employees-list-item.css'


function EmployeesListItem(props) {
    let { name, salary, onDelete, onToggleProp, increase, liked} = props
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase'
    }
    if (liked){
        classNames += ' like'
    }

    function onSetSalary(e){
        const {id, onSetSalary} = props.onSetSalary
        const value = e.target.value
        onSetSalary(id, value)
    }

    return (
        <li className={classNames}>
            <span className={"list-group-item-label"} onClick={onToggleProp} data-toggle="liked">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"} onChange={onSetSalary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    data-toggle="increase"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}

export default EmployeesListItem