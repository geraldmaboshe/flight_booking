const knex=require('knex')
exports.seed=function (knex) {
  // Deletes all existing entries
  return Promise.all([
    knex('planets').del().then(function () {
      // Insert planet records
      return knex('planets').insert([
        {
          name: 'Mercury',
          code: 'MER'
        },
        {
          name: 'Venus',
          code: 'VEN'
        },
      ]);
    }),
    //Deletes all existing entries
    knex('space_centers').del().then(function () {
      // Insert space center records
      return knex('space_centers').insert([
        {
          uid: 'da9c2dee-3b38-4d21-b911-083599c05dad',
          name: 'Hintz Union Space Center',
          description: 'Aut id sit et. Animi et minus et quia necessitatibus. Aut et perspiciatis veritatis et ut dolores asperiores fugiat.',
          latitude: '-35.9083',
          longitude: '-34.7214',
        },
        {
          uid: '3d1d7388-5760-4658-aa3d-b90d88cc457d',
          name: 'Jedediah Dale Space Center',
          description: 'Odit assumenda qui fugit. Dolorem et maiores aspernatur. Dolor laborum quia sit sint. Dolor iure in consequuntur excepturi velit excepturi eligendi ab.',
          latitude: '-34.0737',
          longitude: '124.5693',
        },
        {
          name: 'Tina Motorway Space Center',
          uid: '06ab59b4-4ccb-49a0-b714-c1a70542b41b',
          description: 'Aut id sit et. Animi et minus et quia necessitatibus. Aut et perspiciatis veritatis et ut dolores asperiores fugiat.',
          latitude: '53.9827',
          longitude: '-152.0489',
        },
        {
          name: 'Nayeli Island Space Center',
          uid: 'c34b6ac2-ba04-47fb-8421-37d565cdaae7',
          description: 'Odit assumenda qui fugit. Dolorem et maiores aspernatur. Dolor laborum quia sit sint. Dolor iure in consequuntur excepturi velit excepturi eligendi ab.',
          latitude: '-88.4489',
          longitude: '-102.8155',

        },
      ]);
    }),
  ]);
};