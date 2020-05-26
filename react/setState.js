// React 中 setState 什么时候是同步的，什么时候是异步的？
// React 是通过管理状态来实现对组件的管理，即使用 this.state 获取 state，通过 this.setState() 来更新 state，当使用 this.setState() 时，React 会调用 render 方法来重新渲染 UI
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log
    }, 0);
  }

  render() {
    return null;
  }
};
// 0 0 2 3



// 一、setState 异步更新
// setState 通过一个队列机制来实现 state 更新，当执行 setState() 时，会将需要更新的 state 浅合并后放入状态队列，而不会立即更新 state，队列机制可以高效的批量更新 state。
// 而如果不通过setState，直接修改this.state 的值，则不会放入状态队列，当下一次调用 setState 对状态队列进行合并时，之前对 this.state 的修改将会被忽略，造成无法预知的错误。
// React通过状态队列机制实现了 setState 的异步更新，避免重复的更新 state。

setState(nextState, callback)

// 在 setState 官方文档中介绍：将 nextState 浅合并到当前 state。这是在事件处理函数和服务器请求回调函数中触发 UI 更新的主要方法。不保证 setState 调用会同步执行，考虑到性能问题，可能会对多次调用作批处理。
// 假设 state.count === 0
this.setState({count: state.count + 1});
this.setState({count: state.count + 1});
this.setState({count: state.count + 1});
// state.count === 1, 而不是 3

// 本质上等同于：
// 假设 state.count === 0
Object.assign(state,
  {count: state.count + 1},
  {count: state.count + 1},
  {count: state.count + 1}
 )
// {count: 1}

// 正确用法
this.setState((prevState, props) => ({ // prevState 类似于一个累加器（accumulator）
  count: prevState.count + props.increment // props 像是新的数据源
}))
// 这种函数式 setState() 工作机制类似
[
  {increment: 1},
  {increment: 1},
  {increment: 1}
].reduce((prevState, props) => ({
  count: prevState.count + props.increment
}), {count: 0})
// {count: 3}

