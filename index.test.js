const { sequelize } = require('./db');
const { Band, Musician } = require('./index');

describe('Band and Musician Models', () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test('can create a Band', async () => {
    // TODO - test creating a band
    let band1 = await Band.create({
      name: 'The Beatles',
      members: 4,
      albums: 12,
      genre: 'Rock',
    });
    expect(band1.members).toBe(4);
    expect(band1.genre).toBe('Rock');
  });

  test('can create a Musician', async () => {
    // TODO - test creating a musician
    let musician1 = await Musician.create({
      name: 'Rihanna',
      albums: 8,
      genre: 'Pop / R&B',
      country: 'Barbados',
    });
    expect(musician1.name).toBe('Rihanna');
  });
});
