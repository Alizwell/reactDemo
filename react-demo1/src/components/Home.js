import React from 'react';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:'xueyong',
      color:'red',
      list1:[111,222,33],
      list2: [ <h2 key='1'> 1111 </h2>, <h2  key='2'>222</h2>],
      list3: [{
        title: 'aaaa'
      }, {
        title: 'bbb'
      }, {
        title: 'ccc'
      }]
    };
  }
  render () {
    let listResult = this.state.list1.map((val,index)=>{
      return <li  key={index}>{val}</li>;
    })
    return (
      <div>
        <div  className={this.state.color}>Hello React</div>
        <hr />
        {this.state.list2}
        <hr />
        <ul>
        {
          this.state.list3.map((val,index)=>{
            return <li key={index}>{val.title}</li>;
          })
        }
        </ul>
        <hr />
        <ul>
          {listResult}
        </ul>  
      </div>
    )
  }
}


export  default Home;