import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/pages/index';
import LoginText from './ui/components/generic/_loginText';
import renderer from 'react-test-renderer';


describe('Login ', () => {
  it('with bad E-Mail', () => {
    require('./ui/components/generic/_loginText').default;
    const component = renderer.create(
      <LoginText testing userName="bad E-Mail" />,
  );


    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  // manually trigger the callback
    tree.props.handleSubmitForTests;

  // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('with wrong E-Mail', () => {
    const component = renderer.create(
      <LoginText testing userName="bla@bla.bla" />,
  );


    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  // manually trigger the callback
    tree.props.handleSubmit;
  // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with wrong password', () => {
    const component = renderer.create(
      <LoginText testing userName="test123@test.de" password="d" />,
  );


  // manually trigger the callback
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  // manually trigger the callback
    tree.props.handleSubmit;
  // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with good E-Mail and good password', () => {
    const component = renderer.create(
      <LoginText testing userName="test123@test.de" password="123456" />,
  );


    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  // manually trigger the callback
    tree.props.handleSubmit;
  // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
