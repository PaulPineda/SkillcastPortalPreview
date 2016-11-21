import React from 'react';
import { shallow, mount } from 'enzyme';
import App from 'components/connected/App';

describe('(Connected) App', () =>{
  const wrapper = shallow(<App />);

  it('should render a <div>', () =>{
    expect(wrapper.type()).to.eql('div');
  });

  it('should have the class App', () =>{
    expect(wrapper.prop('className')).to.eql('App');
  });
});
