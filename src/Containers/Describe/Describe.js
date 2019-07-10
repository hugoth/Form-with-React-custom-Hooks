import React, { useEffect } from "react";
import axios from "axios";

import "./Describe.scss";

const Describe = () => {
  const [users, setUsers] = React.useState();
  const [query, setQuery] = React.useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://randomuser.me/api/?results=12`);
      setUsers(response.data.results);
    };
    fetchData();
  }, [query]);

  return (
    <div className="describe-container">
      <div className="choices-user">
        <h4>Nice fetchings data</h4>
        <button onClick={() => setQuery(Math.floor(Math.random() * 10))}>
          Click to set User
        </button>
      </div>

      <div className="card-container">
        {users &&
          users.map(user => {
            return (
              <div className="card-user">
                <div className="card-title">
                  <img src={user.picture.medium} alt="user" />
                  <p>{user.name.first + " " + user.name.last}</p>
                </div>
                <div>
                  <p>@ {user.email}</p>
                  <p>{user.location.city}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Describe;
