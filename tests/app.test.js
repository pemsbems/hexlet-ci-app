const { setupStrapi, cleanupStrapi } = require("./helpers/strapi.js");
const aaaaa
beforeAll(async () => {
  await setupStrapi();
});

afterAll(async () => {
  await cleanupStrapi();
});

it("strapi is defined", () => {
  expect(strapi).toBeDefined(); // eslint-disable-line
});
