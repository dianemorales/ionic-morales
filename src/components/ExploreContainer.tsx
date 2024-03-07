import './ExploreContainer.css';
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonCard>
    <img alt="Silhouette of mountains" src="anime-cat-names-1204854078-2000-d34f509ae54943d8b78cfb4bf9ba0678.jpg" />
    <IonCardHeader>
      <IonCardTitle>Pussy Cat</IonCardTitle>
      <IonCardSubtitle>Hello nebors</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
  </IonCard>
  );
};

export default ExploreContainer;
