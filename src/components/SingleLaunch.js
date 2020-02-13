import React from "react";
import moment from 'moment';

const SingleLaunch = ({ launch, rocket }) => {
  return (
    <div>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li>
          <span><strong>Flight No:</strong> {launch.flight_number}</span>
        </li>

        <li>
          <span><strong>Mission Name:</strong> {launch.mission_name}</span>
        </li>

        <li>
          <span><strong>Date:</strong> {moment(launch.launch_date_utc).format('DD MM YYYY')}</span>
        </li>

        {launch.rocket && 
          <li>
            <span><strong>Rocket:</strong> {launch.rocket.rocket_name}</span>
          </li>
        }

        {launch.launch_site && 
          <li>
            <span><strong>Launch Site:</strong> {launch.launch_site.site_name_long}</span>
          </li>
        }

        {launch.links &&
          <div>
            <img src={launch.links.mission_patch} alt="" width="200px" />
            {launch.links.video_link && 
              <a href={launch.links.video_link} target="_blank" rel="noopener noreferrer">Watch the Launch</a>
            }
          </div>
        }
        
      </ul>
    </div>
  )
}

export default SingleLaunch;