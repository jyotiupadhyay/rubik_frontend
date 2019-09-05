import React from 'react';
import { shallow} from 'enzyme';
import AddFavourites from '../components/AddFavourites/AddFavourites';


describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = shallow(<AddFavourites/>);
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
   
    it('should render account name field', ()=> {
        expect(wrapper.find('#accountName')).toHaveLength(1);
    });
    it('should render account number field', ()=> {
        expect(wrapper.find('#accountNumber')).toHaveLength(1);
    });
    it('should render bank Name field', ()=> {
        expect(wrapper.find('#bankName')).toHaveLength(1);
    });
    
    it('should render button field', ()=> {
        expect(wrapper.find('#btn2')).toHaveLength(1);
    });

    describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().addFavourites.accountName).toEqual('');
        });
      });
      
    describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().addFavourites.accountNumber).toEqual('');
        });
      });
      describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().addFavourites.bankName).toEqual('');
        });
      });
     
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const accountName = wrapper.find('#accountName');
          accountName.simulate('change', { target: { name:'accountName',value: 'divya' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().addFavourites.accountName).toEqual('divya');
        })
      });
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const accountNumber = wrapper.find('#accountNumber');
          accountNumber.simulate('change', { target: { name:'accountNumber',value: 'ES12341234' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().addFavourites.accountNumber).toEqual('ES12341234');
        })
      });
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const bankName = wrapper.find('#bankName');
          bankName.simulate('change', { target: { name:'bankName',value: 'spain' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().favourites.bankName).toEqual('spain');
        })
      });
    
    
      describe('When submit button is clicked', () => {
        beforeEach(() => {
          wrapper.find('#accountName').simulate('change', { target: {name:'accountName', value: 'divya' } });
          wrapper.find('#accountNumber').simulate('change', { target: {name:'accountNumber', value: 'ES12341234' } });
          wrapper.find('#bankName').simulate('change', { target: {name:'bankName', value: 'spain' } });
          const fakeEvent = { preventDefault: () => console.log('preventDefault') };
          const submit = wrapper.find('#btn2');
          submit.simulate('click', fakeEvent);
        });
    
        it('should have excepted userName', () => {
          expect(wrapper.state().addFavourites.accountName).toEqual('divya');
        });
        it('should have excepted userName', () => {
            expect(wrapper.state().addFavourites.accountNumber).toEqual('ES12341234');
          });
          it('should have excepted userName', () => {
            expect(wrapper.state().addFavourites.bankName).toEqual('spain');
          });
      });
    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<AddFavourites />);
          const spy = jest.spyOn(comp.instance(), 'handleSubmit');
          comp.instance().forceUpdate();
          comp.find('#btn2').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
    
});