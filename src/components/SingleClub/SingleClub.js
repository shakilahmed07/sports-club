import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SingleClub = (props) => {
  const { idLeague, strSport, strLeague } = props.team;
  const history = useHistory();

  return (
    <div className="col-md-4 my-3">
      <Card>
        <Card.Body>
          <div className="text-center">
            <Card.Title>{strLeague}</Card.Title>
            <p>Sports type : {strSport}</p>
            <Button
              onClick={() => history.push(`/club/${idLeague}`)}
              variant="primary"
            >
              Explore <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleClub;
