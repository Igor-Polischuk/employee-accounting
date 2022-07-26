import { Component } from "react";

class AppSort extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 'default'
        }
    }
    

    test = (e) => {
        const value = e.target.value
        this.setState({value})
        this.props.onUpdateSort(value)
    }

    render() {
        const styles = {
            maxWidth: 300,
            margin: '20px 0'
        }
        return (
            <select 
            style={styles} 
            className="form-select" 
            value={this.state.value}
            onChange={this.test}>
                <option value={"default"}>Sorted by: Default</option>
                <option value={"name"}>Sorted by: Name</option>
                <option value={"salary"}>Sorted by: Salary</option>
            </select>
        )
    }
}

export default AppSort