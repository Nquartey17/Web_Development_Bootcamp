function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  //convert items in lits to a different type using map
  //Use curly braces to render data dynamically

  return (
    //Empty brackets tell react to wrap as fragment without importing fragment
    //Fragments let you return multiple elements from a component
    <>
      <h1>List</h1>
      {items.length === 0 && <p> No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          //key={item} makes each item have a unique key property
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
