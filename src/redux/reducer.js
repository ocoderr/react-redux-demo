const initState = {
    inputValue : '',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]

};

export default (state = initState, action) => {
    if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }

    if(action.type === 'deleteItem' ){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)  //删除数组中对应的值
        return newState
    }

    return state
}