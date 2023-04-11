import React from 'react'
import { usersProfile } from '../data/usersProfile';


const ProfileList = () => {

    const peopleItems = usersProfile.map((user, index) => {
        return <li key = {user.id}>{user}</li>
     })

  return (
    <div>
        <ul>
            {peopleItems}
        </ul>
    </div>
  )
}

export default ProfileList;