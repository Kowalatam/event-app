import React from 'react'
import Event from './Event'

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            event_title: "Dog walking",
            event_date: "26/10/11",
            event_description: "",
            event_image: "https://images.unsplash.com/photo-1543871061-eca71ff04e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            event_address: "Brandvej",
            all_events: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.preventDefault()
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault()
    }

    render(){
        return(
            <div>
                <div className="Form">
                    <form onSubmit={this.handleSubmit}>
                        <label name="event_title">Event Title</label>
                        <input 
                            type="text" 
                            name="event_title" 
                            placeholder="Title"
                            value={this.state.event_title}
                            onChange={this.handleChange}
                        />

                        <label name="event_image">Event Image</label>
                        <input 
                            type="url" 
                            name="event_image" 
                            placeholder="Image"
                            value={this.state.event_image}
                            onChange={this.handleChange}
                        />

                        <label name="event_date">Event Date</label>
                        <input 
                            type="date" 
                            name="event_date" 
                            placeholder="Date"
                            value={this.state.event_date}
                            onChange={this.handleChange}
                        />
                        
                        <label name="event_address">Event Address</label>
                        <input 
                            type="text" 
                            name="event_address" 
                            placeholder="Address"
                            value={this.state.event_address}
                            onChange={this.handleChange}
                        />
                    
                        <label name="event_description">Event Description</label>
                        <input 
                            type="text" 
                            name="event_description" 
                            placeholder="Description"
                            value={this.state.event_description}
                            onChange={this.handleChange}
                        />
                        <button>Submit</button>
                    </form>
                </div>  
                <Event 
                    event_title={this.state.event_title}
                    event_image={this.state.event_image}
                    event_date={this.state.event_date}
                    event_address={this.state.event_address}
                    event_description={this.state.event_description}
                />
            </div>
            
        )
    }
}

export default Form
