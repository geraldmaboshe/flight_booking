const tableNames = require('../../src/constants/tableNames');
exports.seed = function (knex) {
  // Deletes all existing entries
  return knex(tableNames.space_centers)
    .del()
    .then(function () {
      //Insert space center records
      return knex(tableNames.space_centers).insert([
        {
          uid: 'da9c2dee-3b38-4d21-b911-083599c05dad',
          name: 'Hintz Union Space Center',
          description:
            'Aut id sit et. Animi et minus et quia necessitatibus. Aut et perspiciatis veritatis et ut dolores asperiores fugiat.',
          latitude: '-35.9083',
          longitude: '-34.7214',
          planet_id: 1
        },
        {
          uid: '3d1d7388-5760-4658-aa3d-b90d88cc457d',
          name: 'Jedediah Dale Space Center',
          description:
            'Odit assumenda qui fugit. Dolorem et maiores aspernatur. Dolor laborum quia sit sint. Dolor iure in consequuntur excepturi velit excepturi eligendi ab.',
          latitude: '-34.0737',
          longitude: '124.5693',
          planet_id: 1
        },
        {
          name: 'Tina Motorway Space Center',
          uid: '06ab59b4-4ccb-49a0-b714-c1a70542b41b',
          description:
            'Aut id sit et. Animi et minus et quia necessitatibus. Aut et perspiciatis veritatis et ut dolores asperiores fugiat.',
          latitude: '53.9827',
          longitude: '-152.0489',
          planet_id: 2
        },
        {
          name: 'Nayeli Island Space Center',
          uid: 'c34b6ac2-ba04-47fb-8421-37d565cdaae7',
          description:
            'Odit assumenda qui fugit. Dolorem et maiores aspernatur. Dolor laborum quia sit sint. Dolor iure in consequuntur excepturi velit excepturi eligendi ab.',
          latitude: '-88.4489',
          longitude: '-102.8155',
          planet_id: 2
        },
        {
          name: 'Jules Roads Space Center',
          uid: 'ee1e3351-fd1e-462c-9fc8-441bd9d4eb31',
          description:
            'Iure sed cum quasi ullam. Iste accusantium enim repellat. Ratione quibusdam officiis minima sequi illum. Officiis modi ad repellendus fugit corporis qui ',
          latitude: '49.4308',
          longitude: '86.5286',
          planet_id: 3
        },
        {
          name: 'Simonis Underpass Space Center',
          uid: 'a721033e-41a4-413d-9e65-854c33635b61',
          description:
            'Amet exercitationem voluptate. Sit amet dolor sit volup',
          latitude: '-50.1055',
          longitude: '79.5640',
          planet_id: 3
        },
        {
          name: 'Okuneva Hill Space Center',
          uid: '7d15aeab-4566-4653-bbba-7206db064483',
          description:
            'Fuga sed architecto neque nesciunt expedita et explicabo. Quia et tenetur rem illum odit. Error dolorum aut. Vel quaerat aliquam porro quos rerum sunt c',
          latitude: '9.9751',
          longitude: '-149.8397',
          planet_id: 4
        },
        {
          name: 'Dina Plain Space Center',
          uid: 'fbf304e2-af2e-4f59-8a30-cdb72c33ac2c',
          description:
            'Voluptatem sed quas totam occaecati quibusdam dolores doloremque. Sequi quod vero. Ea itaque aperiam mollitia qui voluptatem. Earum fugit aliquam cupiditate.',
          latitude: '14.8188',
          longitude: '27.7994',
          planet_id: 5
        },
        {
          name: 'Greg Heights Space Center',
          uid: '98f1fc21-1876-4c2b-b3d4-f670b6fd5545',
          description:
            'Nihil corporis est doloremque et. Dolorem eveniet quia. Exercitationem harum consequatur quis molestiae molestiae dolorem non repudiandae soluta. Ea vo',
          latitude: '56.7923',
          longitude: '4.1392',
          planet_id: 6
        },
        {
          name: 'Virgie Ways Space Center',
          uid: '9e700b9d-f657-4b3a-bd1c-9e42f0fe9ca6',
          description:
            'Iusto quia et optio qui possimus nulla sunt. Doloribus est ut nihil doloremque quasi. Sed doloremque maxime sequi dolores sed magnam mollitia natus.',
          latitude: '54.0059',
          longitude: '-108.5417',
          planet_id: 7
        }
      ]);
    });
};
