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
 import Science from '../../components/News/science';
  
 configure({ adapter: new Adapter() })
 
const props = {
    newsData: [{}],
    page: 1,
    rowsPerPage: 10,
    selected: '',
    timeConversion: '',
    articleComments: []
}
  
 describe('render steps', () => {
     it('should render correctly', () => {
          let wrapper = shallow(<Science {...props} />).childAt(0)
          expect(toJson(wrapper)).toMatchSnapshot()
     })
 })