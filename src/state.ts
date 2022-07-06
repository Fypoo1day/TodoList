const state = {
  data: {
    list: [],
  },
  listeners: [], // los callbacks
  getState() {
    return this.data;
  },
  setState(newState) {
    // modifica this.data (el state) e invoca los callbacks

    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
  },
  subscribe(callback: (any) => any) {
    // recibe callbacks para ser avisados posteriormente

    this.listeners.push(callback);
  },
  addItem(item) {
    // suma el nuevo item a la lista
    const cs = this.getState();
    cs.list.push(item);
    this.setState(cs);
  },
};

export { state };
