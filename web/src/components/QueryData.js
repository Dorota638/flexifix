import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useStore } from '../Store';

const GET_BICYCLE_PROPS = gql`
  query {
    bicycleProps {
      color {
        id
        color
      }
      tires {
        id
        size
      }
      status {
        id
        status
      }
      gearsystem {
        id
        type
      }
      brand {
        id
        name
      }
    }
  }
`;
const GET_PRODUCT_PROPS = gql`
  query {
    productProps {
      brand {
        name
        id
      }
      category {
        name
        id
      }
      group {
        name
        id
      }
      supplier {
        minOrder
        name
        id
      }
    }
  }
`;

export const QueryData = () => {
  const { data: bicycleProps } = useQuery(GET_BICYCLE_PROPS);
  const { data: productProps } = useQuery(GET_PRODUCT_PROPS);

  const storeBicycleProps = useStore((state) => state.storeBicycleProps);
  const storeProduceProps = useStore((state) => state.storeProduceProps);

  storeBicycleProps(bicycleProps?.bicycleProps);
  storeProduceProps(productProps?.productProps);

  return <></>;
};
