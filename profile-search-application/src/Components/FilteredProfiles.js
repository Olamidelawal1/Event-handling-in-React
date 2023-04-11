import React, { useState } from 'react'
import { usersProfile } from '../data/usersProfile'

const [filteredList, setFilteredList] = new useState(usersProfile);

const searchByFilter = (event) => {
const query = event.target.value;
var updatedList = [...usersProfile];
updatedList = updatedList.filter((user) => {
return user.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
setFilteredList(updatedList);
};

return (
    <div className="App">
      <div className="search-section">
        <div className="search-text">Search</div>
        <input id="search-box" onChange={searchByFilter} />
      </div>
      <div id="users-profile">
        <ul>
          {filteredList.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilteredProfiles;