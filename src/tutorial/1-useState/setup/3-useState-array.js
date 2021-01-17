import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  //Given an id, remove the person associated with that id (for front-end
  //button adjacent to each person)
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  //for the button "Remove All"
  const removeAll = () => setPeople([]);

  //returns an array of div-elements styled with "item" className
  // and a button that removes all people
  return (
    //<> and </> are short-hand for <React.Fragment> and </React.Fragment> respectively
    //source: https://reactjs.org/docs/fragments.html
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}

      <button className="btn" onClick={removeAll}>
        Remove All
      </button>
    </>
  );
};

export default UseStateArray;
