import React, { useContext } from 'react';
import { Usercontext } from './UserContext';

const UserSearch = () => {
    const {search,searchUser} = useContext(Usercontext);
    return (
      <div className="input-group input-group-lg my-3">
        <input
          type="text"
          className="form-control"
          aria-describedby="inputGroup-sizing-sm"
          // value={search}
          onChange={(e) => searchUser(e)}
        />
      </div>
    );
};

export default UserSearch;