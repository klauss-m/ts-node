import { shaxx } from '../src/shaxx'

describe('shaxx.ts', () => {
  it('should return an amazing quote', () => {
    expect(shaxx()).toBe('This is amazing!')
  })
})
