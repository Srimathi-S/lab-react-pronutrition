import React, { Component } from 'react';

class FoodBoxComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            image :props.image,
            name:props.name,
            calories:props.calories
        }
    }
    render() {
        return (
            <div className="box" key={this.state.name}>
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.state.image} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{this.state.name}</strong> <br />
                        <small>{this.state.calories} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input className="input" type="number" value="1" readOnly/>
                        </div>
                    </div>
                    </div>
                </article>
        </div>
        );
    }
}

export default FoodBoxComponent;