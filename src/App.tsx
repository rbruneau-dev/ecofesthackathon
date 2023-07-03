import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Form from './components/Form/';
import Map from './components/InteractiveMap/Map';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Result } from './components';

const StyleContainerMap = styled.div<{ visible: boolean }>`
  position: relative;
  box-sizing: border-box;
  h1 {
    font-family: 'BigDesigner';
    font-weight: normal;
    font-size: 48px;
    margin: 0;
    padding-top: 20px;
  }
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  svg {
    width: 760px;
    height: 530px;
    #map_svg__main_title {
      display: none;
      transform: translate(-120px, -150px) scale(1.3, 1.3) !important;
    }

    #map_svg__poste_transport {
      cursor: pointer;
      circle {
        transition: fill 0.5s ease stroke 0.5s ease;
        transform-origin: 0 0;
      }

      &:hover {
        circle {
          fill: #d1e3ff !important;
          stroke: #1773fd !important;
          stroke-width: 4 !important;
        }
      }
    }

    #map_svg__poste_food {
      cursor: pointer;
      circle {
        transition: fill 0.5s ease stroke 0.5s ease;
        transform-origin: 0 0;
      }

      &:hover {
        circle {
          fill: #d1e3ff !important;
          stroke: #1773fd !important;
          stroke-width: 4 !important;
        }
      }
    }
  }
`;

const ContainerForm = styled.div`
  margin: 0px auto;
  text-align: center;
  padding: 0 20px;
  width: 100%;
  height: auto;
  background: #fff;
  box-sizing: border-box;

  h2 {
    width: 80%;
    font-family: 'BigDesigner';
    font-weight: normal;
    font-size: 32px;
    margin: auto;
    margin-bottom: 15px;
    padding-top: 15px;
    padding-bottom: 10px;
    border-bottom: 4px solid rgb(222, 82, 117);
  }
`;

const ice2 = keyframes`
0% {
  transform: matrix(0.03746, 0, 0, 0.03746, 303.336, 403.168) ;
}

100% {
  transform: matrix(0.03746, 0, 0, 0.03746, 303.336, 400.168) ;
}
`;

const ice1 = keyframes`
0% {
  transform: matrix(.03746, 0, 0, .03746, 545.661 ,258.573);
}

100% {
  transform: matrix(.03746, 0 ,0 ,.03746 ,545.661, 255.573);
}
`;

const cloud = keyframes`
0% {
  transform: translate(0, 0);
}

100% {
  transform: translate(-2px, 0);
}

100% {
  transform: translate(5px, 0);
}
`;

const StyledMap = styled.div`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  svg {
    #map_svg__ice_2 {
      animation: ${ice2} 0.5s ease-in-out alternate infinite;
    }

    #map_svg__ice_1 {
      animation: ${ice1} 0.5s ease-in-out alternate infinite;
    }

    #map_svg__cloud {
      animation: ${cloud} 0.8s ease-in-out alternate infinite;
    }
  }
`;

export const StyledButton = styled.div<{ disabled?: boolean }>`
  /* width: 100%; */
  margin: 0 auto;
  appearance: button;
  background-color: #1899d6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: din-round, sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter 0.2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  ${({ disabled }) =>
    disabled &&
    disabled === true &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}

  &:after {
    background-clip: padding-box;
    background-color: #1cb0f6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:main,
  &:focus {
    user-select: auto;
  }

  &:hover:not(:disabled) {
    filter: brightness(1.1);
    -webkit-filter: brightness(1.1);
  }

  &:disabled {
    cursor: auto;
  }
`;

const TYPE: any = {
  food: { title: "Empreinte carbone de l'alimentaire", key: 'food' },
  transport: { title: 'Empreinte carbone des déplacements', key: 'transport' },
};

function App() {
  const [showPoste, setShowPoste] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [data, setData] = useState([]);
  const [firstPage, setFirstPage] = useState(true);

  const computeFootprint = () => {
    setShowResult(true);
  };

  return (
    <React.Fragment>
      {firstPage === true ? (
        <div>
          <div className="header-section">
            <nav>
              <div className="logo">Eco Fest'</div>
            </nav>
          </div>
          <section className="App background-section">
            <div className="centered-div">
              <h1>
                Votre outil pour évaluer le bilan carbone de votre festival
              </h1>
              <p>
                {' '}
                Vous voulez apporter une contribution à la protection du climat
                à hauteur des émissions de votre événement !<br /> Alors avec
                notre outil est la meilleure solution qui vous permez de
                calculer l'émission carbone de votre festival en tant que
                organisateur ou festivaliser .
              </p>
              <div className="container">
                <div className="divbutton">
                  {/* <StyledButton>je suis festivalier </StyledButton> */}
                  <StyledButton onClick={() => setFirstPage(false)}>
                    j'organise un festival{' '}
                  </StyledButton>
                </div>
              </div>
            </div>
          </section>
          <div></div>
        </div>
      ) : (
        <div className="App">
          {!showResult ? (
            <StyleContainerMap visible={showPoste === ''}>
              <h1>Eco Fest'</h1>
              <small>
                Veuillez choisir les postes d'émissions disponible sur la carte
              </small>
              <StyledMap>
                <Map
                  onClick={(value: string) => {
                    const element = document.getElementById(
                      'secondBlock'
                    ) as any;
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                    setShowPoste(value);
                  }}
                />
                <StyledButton
                  onClick={computeFootprint}
                  disabled={data.length < 6}
                >
                  Lancer le festival
                </StyledButton>
              </StyledMap>
            </StyleContainerMap>
          ) : (
            <Result data={data} />
          )}
          {!showResult && showPoste !== '' && (
            <ContainerForm id="secondBlock">
              <h2>{TYPE[showPoste].title}</h2>
              <Form type={showPoste} updateData={setData} data={data} />
            </ContainerForm>
          )}
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
