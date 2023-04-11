import React from 'react';
import './style.css';

export default function App() {
  const [data, setdata] = React.useState([]);
  React.useEffect(() => fetchData(), []);
  function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((data) => setdata(data));
  }
  function handleDelete(id) {
    let newData = data.filter((ele) => ele.id !== id);
    setdata(newData);
  }

  return (
    <div>
      <table>
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Action</th>
        </tr>

        {data.length &&
          data.map((ele) => (
            <tr>
              <td>{ele.userId}</td>
              <td>{ele.id}</td>
              <td>{ele.title}</td>
              <td onClick={() => handleDelete(ele.id)}>❌</td>
            </tr>
          ))}
      </table>
    </div>
  );
}
//  "getposts form https://jsonplaceholder.typicode.com/posts",
//     "show on table",
//     "add remove button",
//     "delete post when click on remove button"
