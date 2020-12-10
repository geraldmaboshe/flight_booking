
exports.seed=function (knex) {
  // Deletes ALL existing entries
  return knex('space_centers').del()
    .then(function () {
      // Inserts seed entries
      return knex('space_centers').insert([
        {
          uid: "da9c2dee-3b38-4d21-b911-083599c05dad",
          name: "Hintz Union Space Center",
          description: 'Aut id sit et. Animi et minus et quia necessitatibus. Aut et perspiciatis veritatis et ut dolores asperiores fugiat.',
          latitude: '-35.9083',
          longitude: "-34.7214"
        },
        {
          uid: "3d1d7388-5760-4658-aa3d-b90d88cc457d",
          name: "Jedediah Dale Space Center",
          description: 'Odit assumenda qui fugit. Dolorem et maiores aspernatur. Dolor laborum quia sit sint. Dolor iure in consequuntur excepturi velit excepturi eligendi ab.',
          latitude: '-34.0737',
          longitude: "124.5693"
        }
      ]);
    });
};
