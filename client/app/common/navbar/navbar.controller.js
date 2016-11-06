class NavbarController {
  constructor(state) {
    this.updateTitle(state.current.name);
  }

  updateTitle(state) {
    this.title = '';
    if (state === 'app.about') {
      this.title = 'About';
    }else if (state !== 'app.home') {
      this.title = 'Regatas App';
    }
  }
}

export default ['$state', NavbarController];
