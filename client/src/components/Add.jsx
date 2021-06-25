import React from 'react'

function Add() {
    return (
        <div className="Add">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="name" placeholder="name"/>
                        <input type="text" className="location" placeholder="location"/>
                        <select className="select">
                            <option disabled>Price range</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button className="AddResturant">Add</button>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default Add
