import React, {Component} from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import store from './store'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeInputValue= this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    addItem(e){
        const action = { type:'addItem'}
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    changeInputValue(e){
        const action ={
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action)
    }

    deleteItem(index){
        const action = {
            type:'deleteItem',
            index
        }
        store.dispatch(action)
    }

    render() {
        return (
            <div style={{margin: '10px'}}>
                <div>
                    <Input placeholder='write someting' style={{width: '250px', marginRight: '10px'}}
                           value={this.state.inputValue} onChange={this.changeInputValue}/>
                    <Button type="primary" onClick={this.addItem.bind(this)}>增加</Button>
                </div>
                <div style={{margin: '10px', width: '300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}

export default App;
