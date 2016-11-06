import moment from 'moment';
moment().locale('es');

const championshipsFactory = () => {
  const championships = [{
    id: 1,
    name: 'Regata de los Magios',
    date: moment().add(1, 'month').hours(15).minutes(30).seconds(0).format('LLLL'),
    enabled: true
  }, {
    id: 2,
    name: 'Copa de la Media Biblioteca',
    date: moment().add(1, 'month').add(14, 'days').hours(12).minutes(45).seconds(0).format('LLLL'),
    enabled: false
  }, {
    id: 3,
    name: "Regata de los Magios 2",
    date: moment().add(2, 'month').add(4, 'days').hours(10).minutes(30).seconds(0).format('LLLL'),
    enabled: false
  }];

  return {
    getAll: () => championships,
    get: id => championships.find(championship => championship.id == id)
  };
}

export default championshipsFactory;
