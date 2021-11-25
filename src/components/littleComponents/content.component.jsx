import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import styled from 'styled-components';

const Content = ({ imageUrl, name, id, match, pdf, description }) => {
  return (
    <ContentContainer className="card text-white  mb-3">
      <img src={imageUrl} className="card-img-top" alt="..." style={{
        // width: '100%',
        height: '190px'
      }} />
      <div className="card-body">
        <h5 className="card-title" style={{
          textAlign: 'center',
          color: '#1C3050'
        }}>{id} - Amaliy Mashg'ulot</h5>
        <h6 style={{ textAlign: 'center', color: '#000' }}>{name}</h6>
        <p className="card-text" style={{ textAlign: 'left' }}>{description.length > 50 ? description.slice(0, 50) + '...' : description}</p>
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Link className="btn btn-dark btn-sm" to={`/${match.params.username}/${id}`}>Yechim</Link>
          <a href={pdf} target='_blank' rel="noreferrer" className='btn btn-dark btn-sm'>Dawnload</a>
        </div>
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
    width: 18rem;
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
