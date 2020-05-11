import { selectForm } from '../selectors';

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
