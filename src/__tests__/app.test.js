import React from 'react';
import {render, cleanup} from 'react-testing-library';
import App from '../App';


describe('App', () => {
  afterEach(cleanup);

  test('Should display hello world', () => {
    const {queryByText} = render(<App/>);
    expect(queryByText('Hello World!')).not.toBeNull();
  });
});