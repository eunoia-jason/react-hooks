class AppUgly extends React.Component {
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.increamentItem}>Increment</button>
        <button onClick={this.decreamentItem}>Decrement</button>
      </div>
    );
  }
  increamentItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  decreamentItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}
