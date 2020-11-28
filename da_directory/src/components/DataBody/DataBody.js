import react from 'react';

import './DataBody.css';

const DataBody = ({ users }) => {
    const formatDate = (date) =>{

    }
  return (
      <body>
          {users[0] !== undefined && users[0].name !== undefined ? (
              users.map(({ login, name, picture, phone, email, dob }) => {
                  
              })
          )}
      </body>
  )
}

export default DataBody;