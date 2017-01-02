import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/pages/index';
import LoginText from './ui/components/generic/_loginText';
import renderer from 'react-test-renderer';

describe('Login ', () => {
  
it('with bad E-Mail', () =>{
  const component = renderer.create(
   <LoginText userName="bad E-Mail"/>
  );
  

  // manually trigger the callback
  component.handleSubmit;
  // re-rendering
  
  expect(component.userError).toEqual('Ungültige E-Mail Adresse');
});
  

it('with wrong E-Mail', () =>{
  const component = renderer.create(
   <LoginText userName="bla@bla.bla"/>
  );
  

  // manually trigger the callback
  component.handleSubmit;
  // re-rendering
  
  expect(component.userError).toEqual('Account wurde nicht gefunden');
});
it('with wrong password', () =>{
  const component = renderer.create(
   <LoginText userName="test123@test.de" password="d"/>
  );
  

  // manually trigger the callback
  component.handleSubmit;
  // re-rendering
  
  expect(component.userError).toEqual('Ungültiges Passwort');
});
it('with good E-Mail and good password', () =>{
  const component = renderer.create(
   <LoginText userName="bad E-Mail"/>
  );
  

  // manually trigger the callback
  component.handleSubmit;
  // re-rendering
  
  expect(component.handleError).notToBeCalled;
});
});
