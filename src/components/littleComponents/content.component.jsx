import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import styled from 'styled-components';

const Content = ({ imageUrl, name, id, match }) => {
  return (
    <ContentContainer className="card text-white  mb-3">
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{
          textAlign: 'center'
        }}>{name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link className="btn btn-dark btn-sm" to={`/${match.params.username}/${id}`}>{id} - Labaratoriya</Link>
      </div>
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  width: 18rem;
  border-radius: 15px;
  margin: 15px 10px;
  background: linear-gradient(
  #00c6ff,
  #0072ff
  );
  @media screen and (max-width: 720px) {
    width: 15rem;
    border-radius: 10px;
  }

  img{
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    @media screen and (max-width: 720px) {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
`

export default withRouter(Content);
