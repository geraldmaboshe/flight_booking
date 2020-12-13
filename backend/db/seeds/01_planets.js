const tableNames=require('../../src/constants/tableNames')

exports.seed=function (knex) {
  // Deletes ALL existing entries
  return knex(tableNames.planets).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableNames.planets).insert([
        {
          name: 'Mercury',
          code: 'MER'
        },
        {
          name: 'Venus',
          code: 'VEN'
        },
        {
          name: 'Earth',
          code: 'EAR'
        },
        {
          name: 'Mars',
          code: 'MAR'
        },
        {
          name: 'Jupiter',
          code: 'JUP'
        },
        {
          name: 'Saturn',
          code: 'SAT'
        },
        {
          name: 'Uranus',
          code: 'URA'
        },
        {
          name: 'Neptune',
          code: 'NEP'
        },
        {
          name: 'Ceres',
          code: 'CER'
        },
        {
          name: 'Pluto',
          code: 'PLU'
        },
        {
          name: 'Eris',
          code: 'ERI'
        },
        {
          name: 'Enceladus',
          code: 'SAT_ENC'
        },
        {
          name: 'Titan',
          code: 'SAT_TIT'
        },
        {
          name: 'Ganymede',
          code: 'JUP_GAN'
        },
        {
          name: 'Europa',
          code: 'JUP_EUR'
        }
      ]

      );
    });
};
