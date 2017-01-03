import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/pages/index';
import LoginText from './ui/components/generic/_loginText';
import renderer from 'react-test-renderer';


describe('Login ', () => {
  
it('with bad E-Mail', async () =>{
	require('./ui/components/generic/_loginText').default;
  const component = renderer.create(
   <LoginText testing={true} userName="bad E-Mail" password=""/>
  );
  
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  await tree.props.handleSubmitForTests();
  
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

 
});
  

it('with wrong E-Mail', async () =>{
  const component = renderer.create(
   <LoginText testing={true} userName="bla@bla.bla" password="aaaaaa"/>
  );
  

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  await tree.props.handleSubmitForTests()
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
it('with wrong password', async () =>{
  const component = renderer.create(
   <LoginText testing={true} userName="test123@test.de" password=""/>
  );
  

  // manually trigger the callback
 let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  await tree.props.handleSubmitForTests()
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
it('with good E-Mail and good password', async () =>{
  const component = renderer.create(
   <LoginText testing={true} userName="test123@test.de" password="123456" />
  );
  

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  await tree.props.handleSubmitForTests()
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

});
