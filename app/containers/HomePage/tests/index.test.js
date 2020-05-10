/**
 *
 * Tests for Home
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import configureStore from '../../../configureStore';

// import 'jest-dom/extend-expect'; // add some helpful assertions

import { HomePage } from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    const onPageLoad = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <HomePage dispatch={dispatch} onPageLoad={onPageLoad} />
        </IntlProvider>
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should call onPageLoad when the page Loads', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    const onPageLoad = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <HomePage dispatch={dispatch} onPageLoad={onPageLoad} />
        </IntlProvider>
      </Provider>,
    );
    expect(onPageLoad).toHaveBeenCalled();
    expect(spy).not.toHaveBeenCalled();
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('Should render and match the snapshot', () => {
    const onPageLoad = jest.fn();
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <HomePage onPageLoad={onPageLoad} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
