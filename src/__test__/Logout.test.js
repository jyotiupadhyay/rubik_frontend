import React from 'react';
import { shallow} from 'enzyme';
import Logout from '../components/Logout/Logout';


describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Logout/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render table', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });
   
    it('should render h2 tag',()=>{
        expect(wrapper.find('h3')).toHaveLength(1);
    });
    it('should render h2 tag',()=>{
      expect(wrapper.find('h1')).toHaveLength(1);
  });



    it('should render button field', ()=> {
        expect(wrapper.find('#btn3')).toHaveLength(1);
    });

   
   
    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<Logout />);
          const spy = jest.spyOn(comp.instance(), 'handleSubmit');
          comp.instance().forceUpdate();
          comp.find('#btn3').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
     
});