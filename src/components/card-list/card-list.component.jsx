import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = (props) => (
  <ul className="card-list">
    {props.monsters.map((monster) => (
      <Card monster={monster} />
    ))}
  </ul>
);
