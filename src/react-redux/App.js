import React, {Component} from 'react';
import 'antd/dist/antd.css'
import {Button, Input, List} from 'antd'
import store from '../redux/store'
import {connect} from "react-redux";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState()
    }

    render() {
        return (
            <div style={{margin: '10px'}}>
                <div>
                    <Input placeholder='write someting' style={{width: '250px', marginRight: '10px'}}
                           value={this.props.inputValue} onChange={this.props.inputChange}/>
                    <Button type="primary" onClick={this.props.clickButton}>增加</Button>
                </div>
                <div style={{margin: '10px', width: '300px'}}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={this.props.deleteItem.bind(this, index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }

}

const mapStoreToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            const action = {
                type: 'changeInput',
                value: e.target.value
            }
            dispatch(action)

        },
        clickButton() {
            let action = {type: 'add_item'}
            dispatch(action)
        },
        deleteItem(index) {
            const action = {
                type: 'deleteItem',
                index
            }
            dispatch(action)
        }

    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(App);
