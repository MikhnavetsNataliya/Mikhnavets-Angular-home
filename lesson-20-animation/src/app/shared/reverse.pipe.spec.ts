/* tslint:disable:no-unused-variable */
import { ReversePipe } from './reverse.pipe';

describe('Pipe: ReversePipe', () => {
  const reversePipe = new ReversePipe();
  it('should reverse the inputs', () => {
    expect(reversePipe.transform('pipe')). toBe('epip');
    expect(reversePipe.transform('Yo-ho-ho!')). toBe('!oh-oh-oY');
  });
});
