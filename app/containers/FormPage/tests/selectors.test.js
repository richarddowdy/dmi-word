import { selectForm } from '../selectors';
import { intlShape } from 'react-intl';

// describe('selectFormDomain', () => {
//   it('Expect to have unit tests specified', () => {
//     expect(true).toEqual(false);
//   });
// });

describe('selectForm', () => {
  it('should select the form state', () => {
    const formState = {
      newString: false,
      error: false,
      success: false,
    };
    const mockedState = {
      form: formState,
    };
    expect(selectForm(mockedState)).toEqual(formState);
  });
});

