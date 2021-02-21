import React, { Component } from 'react';
var count=0;
class TotalCalories extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            list : props.list,
        }
        
    }
    calculateTotalCalories(){
        return (this.state.list).reduce((previous,current)=>(previous+Number(current.calories)),0);
    }
    render() {
        var totalcalories=this.calculateTotalCalories();
        return (
            <div>
                <h1>Total calories {totalcalories}</h1>
                {
                    this.state.list.map(item => (
                      <React.Fragment>
                      <p>{item.name}-{item.calories}</p>
                      </React.Fragment>
                    )
                    )
                }
            </div>
        );
    }
}

export default TotalCalories;