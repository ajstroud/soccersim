
class SimScreen {
  constructor(container) {
    this.gameSimulator = new GameSimulator();
    this.container = container;
  }

  show() {
    this.container.classList.remove('inactive');
  }

  hide() {
    this.container.classList.add('inactive');
  }
}
