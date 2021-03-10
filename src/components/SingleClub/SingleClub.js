import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SingleClub = (props) => {
  const { idLeague, strSport, strLeague } = props.movie;
  const history = useHistory();

  return (
    <div className="col-md-4 my-3">
      <Card>
        <Card.Body>
          <div className="text-center">
            <Card.Title>{strLeague}</Card.Title>
            <p>Sports type : {strSport}</p>
            <Button
              onClick={() => history.push(`/movie/${idLeague}`)}
              variant="primary"
            >
              Explore
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleClub;
