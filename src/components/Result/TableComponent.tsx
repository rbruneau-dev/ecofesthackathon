import React from 'react';
import './Table.css';

export const TableComponent1 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Mode de transport</th>
          <th>Cas normal</th>
          <th>Cas anormal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="transport-cell voiture">Voiture</td>
          <td>
            0,259 kg de CO<sub>2</sub> par km
          </td>
          <td>
            1,000 kg de CO<sub>2</sub> par km
          </td>
        </tr>
        <tr>
          <td className="transport-cell Train">Train</td>
          <td>
            0,1 kg de CO<sub>2</sub> par km
          </td>
          <td>
            0,5 kg de CO<sub>2</sub> par km
          </td>
        </tr>
        <tr>
          <td className="transport-cell Velo">Vélo</td>
          <td>
            0 kg de CO<sub>2</sub> par km
          </td>
          <td>
            0 kg de CO<sub>2</sub> par km
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const TableComponent3 = () => {
  return (
    <table className="carbon-table">
      <thead>
        <tr>
          <th>Produit</th>
          <th>
            Cas normal (gCO<sub>2</sub>/L ou kg)
          </th>

          <th>
            Cas anormal (gCO<sub>2</sub>/L ou kg)
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Bière</td>

          <td>
            300 gCO<sub>2</sub>/L
          </td>

          <td>
            500 gCO<sub>2</sub>/L
          </td>
        </tr>

        <tr>
          <td>Vin</td>

          <td>
            150 gCO<sub>2</sub>/L
          </td>

          <td>
            200 gCO<sub>2</sub>/L
          </td>
        </tr>

        <tr>
          <td>Eau</td>

          <td>
            2 gCO<sub>2</sub>/L
          </td>

          <td>
            2 gCO<sub>2</sub>/L
          </td>
        </tr>

        <tr>
          <td>Viande</td>

          <td>
            2000 gCO<sub>2</sub>/kg
          </td>

          <td>
            2500 gCO<sub>2</sub>/kg
          </td>
        </tr>

        <tr>
          <td>Végétarienne</td>

          <td>
            500 gCO<sub>2</sub>/kg
          </td>

          <td>
            400 gCO<sub>2</sub>/kg
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export const TableComponent2 = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td className="transport-cell voiture">Transport</td>
          <td>
            Mettre en place des navettes dédiées au début et à la fin de ton
            festival permet de réduire considérablement les risques d'accident
            lié à l'utilisation de la voiture par les festivaliers
            <br />- Pense promouvoir le covoiturage sur le site du festival afin
            de mutualiser les trajets des festivaliers !
          </td>
        </tr>
        <tr>
          <td className="transport-cell Train">Nouriture</td>
          <td>
            Pense à créer un Label “I Feel Food” pour mettre en avant les repas
            “bio”, “circuit-court”, “végétarien” et/ou “commerce équitable” (Ex
            : Solidays)
            <br />- Afin de minimiser l'impact liés aux emballages des déchet
            alimentaires, pense à favoriser les matériaux type carton recyclé ou
            même des éco-cups qui réduisent considérablement le poids de déchet
            par festivalier
          </td>
        </tr>
      </tbody>
    </table>
  );
};
