import Calculator from './Helper';

describe('Calculator', () => {
  test('tambah', () => {
    expect(Calculator.tambah(2, 3)).toBe(5);
    expect(Calculator.tambah(-2, 3)).toBe(1);
  });

  test('kurang', () => {
    expect(Calculator.kurang(5, 2)).toBe(3);
    expect(Calculator.kurang(2, 5)).toBe(-3);
  });

  test('kali', () => {
    expect(Calculator.kali(2, 4)).toBe(8);
    expect(Calculator.kali(-2, 4)).toBe(-8);
  });

  test('jumlah', () => {
    expect(Calculator.jumlah([1, 2, 3])).toBe(6);
    expect(Calculator.jumlah([])).toBe(0);
    expect(Calculator.jumlah([-1, 2, -3])).toBe(-2);
  });
});
