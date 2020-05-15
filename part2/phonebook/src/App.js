import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNetNumber] = useState("");
  const handleNameAdd = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberAdd = (event) => {
    setNetNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(nameObject));
      setNewName("");
      setNetNumber("");
    }
  };

  const [filterString, setFilterString] = useState("");
  const handleFilter = (event) => {
    setFilterString(event.target.value);
  };

  const personsToShow = handleFilter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filterString)
      )
    : persons;

  const Filter = (props) => {
    return (
      <form>
        <div>
          filter show with{" "}
          <input value={props.filterString} onChange={props.handleFunction} />
        </div>
      </form>
    );
  };
  const PersonForm = (props) => {
    return (
      <form onSubmit={props.submitFunction}>
        <div>
          name: <input value={props.newName} onChange={props.nameAddFunction} />
        </div>
        <div>
          number:{" "}
          <input value={props.newNumber} onChange={props.numberAddFunction} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
  };
  const Persons = (props) => {
    return (
      <div>
        {props.personsToShow.map((person) => (
          <p>
            {person.name}: {person.number}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterString={filterString} handleFunction={handleFilter} />
      <h3>Add a new person</h3>
      <PersonForm
        submitFunction={addPerson}
        newName={newName}
        newNumber={newNumber}
        nameAddFunction={handleNameAdd}
        numberAddFunction={handleNumberAdd}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;