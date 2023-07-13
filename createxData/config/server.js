module.exports = ({ env }) => ({
  host: env('HOST', 'dpg-cim6oo15rnuvtgtcmb0g-a.frankfurt-postgres.render.com'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});