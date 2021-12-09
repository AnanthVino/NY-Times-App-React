/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

 import React from 'react';
 import { configure, shallow } from 'enzyme';
 import Adapter from 'enzyme-adapter-react-16';
 import toJson from 'enzyme-to-json';
 import Header from '../../components/Header';
 import configureMockStore from "redux-mock-store";
  
 configure({ adapter: new Adapter() })
 
 const mockStore = configureMockStore();
  
  const data = { access_token: ''};
  
  const initialState = {
      data: data
  };
  
 describe('render steps', () => {
     it('should render correctly', () => {
         let store = mockStore(initialState);
          let wrapper = shallow(<Header store={store} />).childAt(0).dive()
          expect(toJson(wrapper)).toMatchSnapshot()
     })
 })