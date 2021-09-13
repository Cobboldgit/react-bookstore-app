import React, { Component } from 'react'
import '../App.css'

class DetailsList extends Component {
    render() {
        const users = this.props.printUser
        return (
                users.map((user, index)=>{
                    return(
                        <div className='list-box'>
                            <div key={index}>
                                <p>Book title: {user.title}</p>
                                <p>Author: {user.author}</p>
                                <p>Description: {user.description}</p>
                        </div>
                        </div>
                    )
                })
            
        )
    }
}

export default DetailsList;
