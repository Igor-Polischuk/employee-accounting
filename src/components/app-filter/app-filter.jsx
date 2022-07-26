function AppFilter({onSetFilter, currentFilter}) {
    const style = {
        marginTop: 20
    }

    const btnsData = [
        {filter: "all", label: "All workers"},
        {filter: "increase", label: "Increase"},
        {filter: "moreThan1000", label: "Salary is more than 1000"}
    ]

    const btns = btnsData.map(({filter, label}) => {
        const active = currentFilter === filter
        const clazz  = active ? "btn-light" : "btn-outline-light"
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                onClick={() => onSetFilter(filter)}
                key={filter}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group" style={style}>
            {btns}
        </div>
    )
}

export default AppFilter