import React, { Component } from 'react';
import './App.css';
import FoodBoxComponent from './components/FoodBoxComponent';
import TotalCalories from './components/TotalCalories';
var list=[
  {name:"Pizza",calories:"40",image:"https://i.imgur.com/eTmWoAN.png"},
  {name:"Orange",calories:"65",image:"https://images.pexels.com/photos/42059/citrus-diet-food-fresh-42059.jpeg"},
  {name:"Banana",calories:"45",image:"https://image.shutterstock.com/image-photo/single-banana-isolated-260nw-575528569.jpg"},
  {name:"Mango",calories:"60",image:"https://image.shutterstock.com/image-photo/mango-leaf-isolated-white-background-260nw-1157303833.jpg"}
  ];


class SearchComponent extends Component {
    constructor()
    {
        super()
        this.state={
            searchText:"ALL",
            displayList : list,
            selectedList:[]
        };
        this.searchTextChange=this.searchTextChange.bind(this);
    }
    searchTextChange(textBar)
    {
        var modifiedList=list.filter((data)=>((data.name.toLowerCase()).search(textBar.target.value.toLowerCase())!=-1));
        this.setState({
          displayList : modifiedList,
          searchText:textBar.target.value
        }
        );
    }
    addElementToSelectedList(name,calories)
    {
      var newItem={name:name,calories:calories};
      console.log(newItem);
      this.state.selectedList.push(newItem);
      var newArray=this.state.selectedList;

      this.setState({
        selectedList:newArray
      });
    }
    render()
     {
        return (
            <React.Fragment>
                <div className="search-bar">
                <h1>Search</h1>
                <textarea onChange={(event)=>this.searchTextChange(event)} defaultValue="ALL" />
                </div>
                <div className="calories-food-component">
                  <div>
                  {
                    this.state.displayList.map(item => (
                      <React.Fragment key={item.name}>
                      <div className="food-box">
                      <FoodBoxComponent  name={item.name} calories={item.calories} image={item.image}/>
                        <button className="add-to-list" onClick={this.addElementToSelectedList.bind(this,item.name,item.calories)}>
                            +
                        </button>
                      </div>
                      </React.Fragment>
                    )
                    )
                  }
                  </div>
                 <TotalCalories list={this.state.selectedList}/>
                 </div>
            </React.Fragment>
            )
    }
}

function App() {
  return (
    <div>
      <SearchComponent/>  
    </div>
  );
}

export default App;
