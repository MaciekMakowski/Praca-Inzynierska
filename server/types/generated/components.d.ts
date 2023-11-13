import type { Schema, Attribute } from '@strapi/strapi';

export interface PersonsAddress extends Schema.Component {
  collectionName: 'components_persons_addresses';
  info: {
    displayName: 'address';
    icon: 'house';
  };
  attributes: {
    city: Attribute.String;
    postCode: Attribute.String;
    address: Attribute.String;
  };
}

export interface PersonsPerson extends Schema.Component {
  collectionName: 'components_persons_people';
  info: {
    displayName: 'Person';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    lastName: Attribute.String;
    sex: Attribute.String;
    birthDate: Attribute.Date;
    phoneNumber: Attribute.BigInteger;
    email: Attribute.Email;
    pesel: Attribute.BigInteger;
    address: Attribute.Component<'persons.address'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'persons.address': PersonsAddress;
      'persons.person': PersonsPerson;
    }
  }
}
