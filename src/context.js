import React, { Component, createContext } from 'react';

const Context = createContext();

export class Provider extends Component {
  state = {
    track_list: [
      { track: { track_name: 'abd' } },
      { track: { track_name: '124' } }
    ],
    heading: 'Top 10 Tracks'
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
