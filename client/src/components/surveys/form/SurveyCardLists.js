import React, { useEffect, useRef } from 'react';
import M from 'materialize-css';

export default function SurveyCardLists(props) {
  const { surveys, deleteSurvey } = props;
  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      M.AutoInit();
      // do componentDidMount logic
      mounted.current = true;
    } else {
      M.AutoInit();
      // do componentDidUpdate logic
    }
  });

  return surveys.map((survey) => {
    return (
      <div className="card grey lighten-5" key={survey._id}>
        <div className="card-content grey-text">
          <span className="card-title">{survey.title}</span>
          <p>{survey.subject}</p>
          <div
            className="row"
            style={{ fontSize: '0.75rem', margin: '1rem 0 0.5rem 0' }}
          >
            <div className="col m12">
              <p className="right">
                Send On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="col m12">
              <p className="right">
                Lastest reply:{' '}
                {survey.lastResponded
                  ? new Date(survey.lastResponded).toLocaleDateString()
                  : 'No reply now'}
              </p>
            </div>
          </div>
        </div>
        <div className="card-action teal white-text">
          <a href="#" className="white-text">
            Total Yes: {survey.yes}
          </a>
          <a href="#" className="white-text">
            Total No: {survey.no}
          </a>
          <span>
            <i
              class="material-icons right surveyslist-action-delete dropdown-trigger tooltipped"
              data-target="dropdown1"
              data-position="bottom"
              data-tooltip="actions"
            >
              more_vert
            </i>
          </span>

          <ul id="dropdown1" class="dropdown-content">
            <li
              onClick={() => {
                deleteSurvey(survey._id);
              }}
            >
              <a href="#!" className="">
                delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  });
}
