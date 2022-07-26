import './app.css'

import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPaneL from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import AppSort from '../app-sort/app.sort';


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [
                {name: 'Igor', salary: 10000, increase: true, liked: false, id: 1},
                {name: 'Sveta', salary: 9500, increase: true, liked: false, id: 2},
                {name: 'John', salary: 900, increase: false, liked: false, id: 3},
                {name: 'Bill', salary: 550, increase: false, liked: false, id: 4},
                {name: 'Peter Pen', salary: 800, increase: false, liked: false, id: 5},
                {name: 'Tom', salary: 6000, increase: false, liked: false, id: 6},
            ],

            term: '',
            filter: 'all',
            sort: 'default'
            
        }
        this.maxId = 7
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id != id)
            }
        })
    }

    addItem = (name, salary) => {
        const newWorker = {
            name,
            salary,
            increase: false,
            liked: false,
            id: this.maxId++
        }

        this.setState(({data}) => ({
            data: [...data, newWorker]
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    onSetSalary = (id, salary) => {
        salary = parseInt(salary)
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, salary: salary}
                }
                return item
            })
        }))
    }

    search = (items, term) => {
        if (term.length === 0){
            return items
        }

        else {
            return items.filter(item => {
                return item.name.indexOf(term) > -1
            })
        }
    }

    filter = (items) => {
        if (this.state.filter === 'all'){
            return items
        } else if (this.state.filter === 'moreThan1000'){
            return items.filter(item => {
                return item.salary >= 1000
            })
        } else if (this.state.filter === 'increase'){
            return items.filter(item => item.increase)
        }
    }

    onSetFilter = (filter) => {
        this.setState({filter})
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onUpdateSort = (sort) => {
        this.setState({sort})
    }

    sort(items, sort){
        items = items.slice()
        switch (sort){
            case "name":
                return items.sort((a, b) => a.name.localeCompare(b.name))
            case "salary":
                return items.sort((a, b) => b.salary - a.salary)
            default:
                return items
        }
    }

    render() {
        const visibleData = this.sort(this.search(this.filter(this.state.data), this.state.term), this.state.sort)
        console.log(visibleData);
        return (
            <div className="app">
                <AppInfo totalWorkers={this.state.data.length}
                    totalAwarded={this.state.data.filter(item => item.increase === true).length}/>
                <div className="search-panel">
                    <SearchPaneL onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter currentFilter={this.state.filter} onSetFilter={this.onSetFilter}/>
                </div>
                <AppSort onUpdateSort={this.onUpdateSort}/>
                <EmployeesList 
                    data={visibleData} 
                    onDelete={this.deleteItem} 
                    onToggleProp={this.onToggleProp}
                    onSetSalary={this.onSetSalary}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;