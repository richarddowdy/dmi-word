import { selectHome, makeSelectStrings } from '../selectors';

describe('selectHomeDomain', () => {
  it('should select the home state', () => {
    const homeState = {
      strings: false,
      deleteError: false,
    };
    const mockedState = {
      form: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectStrings', () => {
  const stringsSelector = makeSelectStrings();
  it('should select strings', () => {
    const strings = ['one', 'two', 'three'];
    const mockedState = {
      home: {
        strings,
      },
    };
    expect(stringsSelector(mockedState)).toEqual(strings);
  });
});
