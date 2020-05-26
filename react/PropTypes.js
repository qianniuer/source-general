
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// .array 数组
// .bool 布尔值
// .func 函数
// .number 数字
// .object 对象
// .string 字符串
// .symbol 符号
// .node 任何东西都可以被渲染:numbers, strings, elements,或者是包含这些类型的数组(或者是片段)。
// .element React元素
// .instanceOf(Message) 类的一个实例
// .oneOf(['News', 'Photos']) 枚举值
// .oneOfType([PropTypes.string,PropTypes.number,PropTypes.instanceOf(Message)]) 多种类型其中之一
// .arrayOf(PropTypes.number) 某种类型的数组
// .objectOf(PropTypes.number) 某种类型的对象
// .shape({color: PropTypes.string,fontSize: PropTypes.number}) 特定形式的对象
// .func.isRequired 可以使用 `isRequired' 链接上述任何一个，以确保在没有提供 prop 的情况下显示警告
// .any.isRequired 任何数据类型的值
// function(props, propName, componentName) { return new Error()} 自定义的验证器
// .arrayOf(function(propValue, key, componentName, location, propFullName) {}

class Person extends React.Component{
  static defaultProps = {
    name:'Stranger'
  }
    static propTypes={
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        gender: PropTypes.oneOf(['male','famale']),
        hobby: PropTypes.array,
        postion: PropTypes.shape({
            x: PropTypes.number,
            y:PropTypes.number
        }),
        age(props, propName, componentName) {
            let age = props[propName];
            if (age <0 || age>120) {
                return new Error(`Invalid Prop ${propName} supplied to ${componentName}`)
            }
        }
    }
    render() {
        let { name, age, gender, hobby, position } = this.props;
        return (
            <table>
                <thead>
                    <tr>
                        <td>姓名</td>
                        <td>年龄</td>
                        <td>性别</td>
                        <td>爱好</td>
                        <td>位置</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{gender}</td>
                    <td>{hobby.join(',')}</td>
                    <td>{position.x +' '+ position.y}</td>
                </tr>
                </tbody>
            </table>
        )
    }
}
let person={
    age: 100,
    gender:'male',
    hobby: ['basketball','football'],
    position: {x: 10,y: 10},
}
ReactDOM.render(<Person {...person}/>, document.getElementById('root'));


