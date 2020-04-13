import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    newItem: "",
    list: [],
  };
  //Will create new item with unique ID...which is necessary
  //will get the todo as argument
  AddItem = (todoValue) => {
    if (todoValue !== "") {
      const Item = {
        id: Date.now(),
        value: todoValue,
        isDOne: false,
      }; //new object is created Here//now will copy this object to list[]

      const newlist = [...this.state.list];
      newlist.push(Item);
      //this newlist is in Local State
      this.setState({
        list: newlist,
        newItem: "",
      });
    }
  };

  //For Delete Functionality we need "Unique Id" of the Item which we want to Delete
  //the "Unique Id " is given to the item in "AddItem" function ABOVE
  //First will clone all the list Here
  //Then Will "Update" the list
  //then Will update the state
  deleteItem = (id) => {
    const newList = [...this.state.list];
    console.log(id);
    const updateList = newList.filter((item) => item.id !== id);
    this.setState({
      list: updateList,
    });
  };

  //if something input is given to input box....it will be assigned to "newItem"
  //This is called on "onchange()" for the text field
  updateInput = (input) => {
    this.setState({
      newItem: input,
    });
  };

  render() {
    return (
      <div>
        <h1 className="app-title">My TODO APP</h1>
        <div className="container">
          <p>Add a Item....</p>
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a TODO"
            value={this.state.newItem}
            onChange={(e) => {
              this.updateInput(e.target.value);
            }}
            //"e is any change in input"
            //if any value is updated ...it will be assigned to "newItem" state
            required
          />
          <button
            onClick={() => this.AddItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
            //disabled is "true" when "newItem" is empty
            className="add-btn"
          >
            Add Todo
          </button>
          <div className="list">
            <ul>
              {this.state.list.map(
                (items) => {
                  return (
                    <li key={items.id}>
                      <input
                        type="checkbox"
                        name="isDone"
                        checked={items.isDOne}
                        onChange={() => {}} //If we want to add functionality on checked event
                      />
                      {items.value}
                      <button
                        className="btn"
                        onClick={() => {
                          this.deleteItem(items.id);
                        }}
                      >
                        Delete
                      </button>
                    </li>
                  );
                } //having "return" keyword is mandatory to show list on browser
                //otherwise it will loop but not show on browser
              )}
              <li>
                <input type="checkbox" />
                Make Your TODO Here
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
