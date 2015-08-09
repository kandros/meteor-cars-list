
Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/cars/create', {
  name: 'createCar',
  controller: 'CarsController',
  action: 'create',
  where: 'client'
});
