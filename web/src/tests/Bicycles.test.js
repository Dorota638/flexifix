import { MockedProvider } from '@apollo/client/testing';
import { mount } from 'enzyme';
import { Bicycles } from '../routes/Bicycles';
import { GET_ALL_BICYCLES } from '../queries';

const mockBicycles = {
  request:{
    query: GET_ALL_BICYCLES
  },
  result:{
    data:{
      
    }
  }
}