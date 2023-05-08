import React from "react";

const List = () => {
  const [list, setList] = React.useState([]);

  const thingy = "tea";

  React.useEffect(() => {
    fetch(`https://list.ly/api/v4/search/image?q=${thingy}`)
      .then((res) => res.json())
      .then((json) => {
        setList(json.results);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Pictures of {thingy}</h1>
      </div>
      <br/>
      <div className="list">
      {list?.map((item) => (
        <ul key={item.media_id}>
          <li>
            <img width="600" src={`${item.image}`}/>
          </li>
        </ul>
      ))}
      </div>
    </div>
  );
};

export default List;