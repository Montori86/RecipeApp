/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');
const {v4: uuidv4} = require('uuid')
const agent = session(app);
const recipe = {
  title: 'Milanea a la napolitana',
  id: uuidv4(),
  healthScore: 63,
  description: "EL PLATO"
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipe', () => {
    it('should get 200', () =>
      agent.get('/recipe?name=Milanea a la napolitana').expect(200)
    );
  });
});

