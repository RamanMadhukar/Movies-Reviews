import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const userList = () => {
    const userRows = [

        {
          id: 1,
          name: "Jon Snow",
          email: "jon@gmail.com",
          status: "active",
          role: "user",
        },
        {
          id: 2,
          name: "Jon Snow",
          email: "jon@gmail.com",
          status: "active",
          role: "user",
        },
        {
            id: 3,
            name: "Jon Snow",
            email: "jon@gmail.com",
            status: "active",
            role: "user",
          }
        
      
      ];
    return (
        <div>
            userRows={userRows}
        </div>
    )
}

export default userList


