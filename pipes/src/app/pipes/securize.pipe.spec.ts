import { SecurizePipe } from './securize.pipe';

describe('SecurizePipe', () => {
  it('create an instance', () => {
    const pipe = new SecurizePipe();
    expect(pipe).toBeTruthy();
  });
});
