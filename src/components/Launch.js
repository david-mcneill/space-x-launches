import React from "react";
import moment from 'moment';

const Launch = ({ launch }) => {
  return (
    <div>
      <ul>
        <li>
          <span>{launch.flight_number}</span>
        </li>

        <li>
          <span>{launch.mission_name}</span>
        </li>

        <li>
          <span>{moment(launch.launch_date_utc).format('YYYY MM DD')}</span>
        </li>
      </ul>
    </div>
  )
}

export default Launch;