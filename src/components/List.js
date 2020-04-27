import React, { forwardRef } from 'react';
import {View, Text, FlatList} from 'react-native';

class List extends React.Component {
    constructor() {
        super();
        this. state = {
            students: [
                {
                    id: 1,
                    name: 'John',
                    faculty: 'Computer Science'
                },
                {
                    id: 2,
                    name: 'Jane',
                    faculty: 'Bussines'
                },
                
            ],
            refreshing:false
        }
    }
    renderItem = ({item}) =>(
        <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#000'}}>
            <Text>Name : {item.name}</Text>
            <Text>faculty: {item.faculty}</Text>
        </View>
    ) //<Text >{item .name}</Text>

    onRefresh = () => {
        this.setState({ refreshing: true})
        const data = this.state.students.concat({id: 5, name: 'bob', faculty:'bussines'})
        this.setState({
            refreshing:false,
            students: data
        })
    }
    render(){
        // const listStudents = this.state.students.map(this.renderItem)
        return(
            // <View>
            //     {listStudents}
            // </View>
            <FlatList
                 data={this.state.students}
                 keyExtractor={item=>item.id.toString()}
                //  renderItem={item => console.log(item)}
                renderItem={this.renderItem}

                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
            />
        )
    }
}
export default List;