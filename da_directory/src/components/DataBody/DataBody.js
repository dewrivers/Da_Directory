import React from 'react';

import './DataBody.css';

const DataBody = ({ users }) => {
    const formatDate = (date) =>{
     let dateArray = date.split("-");
     let year = dateArray[0];
     let month = dateArray[1];
     let dayArray = dateArray[2].split("T");
     let day = dayArray[0];
     let formattedDate = [month, day, year].join("/");
    return formattedDate;
    }
  return (
      <body>
       {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image" className="align-middle">
                <img
                  src={picture.medium}
                  alt={"profile image for " + name.first + " " + name.last}
                  className="rounded"
                />
              </td>
              <td data-th="Name" className="name-cell align-middle">
                {name.first} {name.last}
              </td>
              <td data-th="Phone" className="align-middle">
                {phone}
              </td>
              <td data-th="Email" className="align-middle">
                <a href={"mailto:" + email} target="__blank">
                  {email}
                </a>
              </td>
              <td data-th="DOB" className="align-middle">
                {formatDate(dob.date)}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
      </body>
  )
}

export default DataBody;