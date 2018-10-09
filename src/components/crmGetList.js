import React from 'react';



export const crmGetList = (props) =>{


  const handleSubmit = (event) =>{
    event.preventDefault()

  }

  return(
    <div className="getFace">
      <ul>
        <li>
          <h3>Office</h3>
          <h3>Date</h3>
          <p>Goals</p>
          <p>Outcome</p>
          <p>NextGoals</p>
      </li>
    </ul>
    </div>
  )

}
