import React, { Component } from 'react';

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // componentDidMount вызывается после того, как компонент был добавлен в DOM
  componentDidMount() {
    console.log('Component has been mounted');
  }

  // componentDidUpdate вызывается после каждого обновления компонента
  componentDidUpdate(prevProps, prevState) {
    console.log('Component has been updated');

    // Выполним какие-то действия при изменении состояния (например, увеличение счетчика)
    if (prevState.count !== this.state.count) {
      console.log('Count has been updated');
    }
  }

  // componentWillUnmount вызывается перед тем, как компонент будет удален из DOM
  componentWillUnmount() {
    console.log('Component is about to be unmounted');
  }

  // Функция для увеличения счетчика
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default CounterComponent;
