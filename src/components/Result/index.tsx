import React from 'react';
import { computeTotal } from '../../utils';
import styled, { css } from 'styled-components';
import {
  TableComponent1,
  TableComponent2,
  TableComponent3,
} from './TableComponent';

const TIPS = [{}, {}, {}];

// const medal = {
//   10: 'green',
//   15: 'orange',
//   20: 'red',
// };

// 12 par festivalier

const ContainerResult = styled.div`
  color: #000;

  h1 {
    font-family: Biko;
    padding: 40px 10px;
  }
`;
const Block = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  padding: 20px;
  position: relative;
  h3 {
    font-family: Biko;
    font-size: 22px;
    color: #000;
    font-weight: bold;

    div {
      padding: 10px 0;
      color: #1cb0f6;
    }
  }
  p {
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 10px;
    width: 40px;
    height: auto;
  }

  h2 {
    color: green;
    span {
      font-size: 20px;
      color: #000;
    }
  }
`;

const ContainerBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;

  margin-bottom: 25px;
`;
const StyledNumber = styled.span<{ color: string }>`
  font-weight: bold;
  ${({ color }) => {
    if (color === 'error') {
      return css`
        color: #ef0021 !important;
      `;
    }

    if (color === 'warning') {
      return css`
        color: #ff823d !important;
      `;
    }

    if (color === 'ok') {
      return css`
        color: #00a33a !important;
      `;
    }
  }}
`;
export default ({ data }: any) => {
  const result = computeTotal(data);

  const avis = () => {
    const value = Math.ceil(result.totalPerDay);
    if (value <= 10) {
      return 'ok';
    }

    if (value > 10 && value <= 15) {
      return 'warning';
    }

    if (value > 15) {
      return 'error';
    }

    return '';
  };
  return (
    <ContainerResult>
      <h1>
        <img src="jury.png" height="70px" /> Le jury a délibéré
      </h1>
      <ContainerBlock>
        <Block>
          <h3>
            Résultat de l'émission en kgCO<sub>2</sub>e de vôtre évènement
          </h3>
          <h2>
            <StyledNumber color={avis()}>
              {result.total.toLocaleString()}
            </StyledNumber>{' '}
            <span>
              kgCO<sub>2</sub>e
            </span>
          </h2>
          <p>
            Soit{' '}
            <StyledNumber color={avis()}>
              {Math.ceil(result.totalPerDay)}
            </StyledNumber>{' '}
            kgCO
            <sub>2</sub>e par festivalier et par jour
          </p>
        </Block>
      </ContainerBlock>
      <ContainerBlock>
        <Block>
          <h3>
            Le score du poste d'émission <div>Alimentaire</div>
          </h3>
          <p>
            <StyledNumber color={'default'}>
              {result.food.toLocaleString()}
            </StyledNumber>{' '}
            kgCO<sub>2</sub>e / festivalier / jour
          </p>
          <img src="co2.png" />
        </Block>
        <Block>
          <h3>
            Le score du poste d'émission <div>Déplacements</div>
          </h3>
          <p>
            <StyledNumber color={'default'}>
              {result.transport.toLocaleString()}
            </StyledNumber>{' '}
            kgCO<sub>2</sub>e / festivalier / jour
          </p>
          <img src="co2.png" />
        </Block>
      </ContainerBlock>
      <hr />
      <h3>Tableau des comparaisons</h3>
      <ContainerBlock>
        <Block>
          <TableComponent1 />
        </Block>
        <Block>
          <TableComponent3 />
        </Block>
      </ContainerBlock>
      <h3>Quelques tips</h3>
      <ContainerBlock>
        <Block>
          <TableComponent2 />
        </Block>
      </ContainerBlock>
    </ContainerResult>
  );
};
