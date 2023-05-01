import {act, renderHook} from '@testing-library/react-hooks';
import {useFetchTodo} from './useFetchTodo';

jest.mock('axios');

describe('When useFetchTodo', () => {
  it('should get bring only 2 selected products in all', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchTodo());
    await waitForNextUpdate();

    const {productToShow, total, selected} = result.current;

    expect(productToShow).toHaveLength(10);
    expect(selected).toEqual('ALL');
    expect(total).toEqual(-170739);
  });

  it('When the user activates the function to load more items in the list, an array of more than 10 in length should be seen.', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchTodo());
    await waitForNextUpdate();

    act(() => {
      result.current.handleEndReached();
    });

    expect(result.current.productToShow.length).toBeGreaterThanOrEqual(10);
  });

  it('When the user selects WON it should show only the ones that have the property is_redemption true', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchTodo());
    await waitForNextUpdate();

    act(() => {
      result.current.handleSelected('WON');
    });

    expect(result.current.productToShow).toHaveLength(5);
    expect(result.current.selected).toEqual('WON');
    expect(result.current.total).toEqual(287568);
    expect(result.current.productToShow[0].is_redemption).toEqual(true);
  });

  it('when the user selects REDEEMED it should show only the ones with the property is_redemption false', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchTodo());
    await waitForNextUpdate();

    act(() => {
      result.current.handleSelected('REDEEMED');
    });

    expect(result.current.productToShow).toHaveLength(7);
    expect(result.current.selected).toEqual('REDEEMED');
    expect(result.current.total).toEqual(-458307);
    expect(result.current.productToShow[0].is_redemption).toEqual(false);
  });
});
