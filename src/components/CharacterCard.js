import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Container } from 'reactstrap';

export default function CharacterCard({ character }) {
  return (
      <div>
        <Container xs='3'>
        <Card>
        <CardImg top width='100%' src={character.image} alt='Card image cap' />
        <CardBody>
          <CardTitle>
            <h1>{character.name}</h1>
          </CardTitle>
          <CardSubtitle>
            <span>Status: </span>
            <p>{character.status}</p>
          </CardSubtitle>
          <CardSubtitle>
            <span>Gender: </span>
            <p>{character.gender}</p>
          </CardSubtitle>
          <CardSubtitle>
            <span>Episodes: </span>
            <p>{character.episode.length}</p>
          </CardSubtitle>
        </CardBody>
        </Card>
        </Container>
      </div>
    )
}
