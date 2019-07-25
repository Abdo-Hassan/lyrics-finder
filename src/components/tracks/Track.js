import React from 'react';
import { Link } from 'react-router-dom';
const Track = props => {
  const { track } = props;
  return (
    <div className='col-md-6'>
      <div className='card mb-4 shadow-sm'>
        <div className='card-body'>
          <h5>{track.artist_name}</h5>
          <p className='card-text'>
            <strong>
              <i className='fas fa-play' style={{ marginRight: 5 }} />
              Track
            </strong>
            <span>{track.track_name}</span>
            <br />
            <strong>
              <i className='fas fa-compact-disc' style={{ marginRight: 5 }} />
              Album
            </strong>
            <span>{track.album_name}</span>
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className='btn btn-block btn-dark'
          >
            <i className='fas fa-chevron-right' style={{ marginRight: 5 }} />
            View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
