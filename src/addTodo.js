import React, {Component} from 'react';

class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }    

    render(){
        return(
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <h3 className='center red-text'>Add a Todo</h3>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">mode_edit</i>
                            <input id="content" type='text' onChange={this.handleChange} value={this.state.content}></input>
                            <label for="content">Todo</label>
                        </div>
                    </div>
                    <button class="btn-floating btn-large waves-effect red" type="submit" name="action">
                    <i class="material-icons">add</i>
                  </button>
                </form> 
            </div>
        )
    }
}

export default AddTodo