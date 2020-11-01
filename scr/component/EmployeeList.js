import React, {Component} from 'react';
import {View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../action';
import _ from 'lodash';
import ListItem from './ListItem'
import reducer from '../reducer';

class EmmployeeList extends Component {
    
    
   componentDidMount(){
       this.props.employeesFetch();
   }


    renderItem({item}){
       
        return(
            <ListItem employee={item} />
        )
    }

    render() {
        console.log(this.props.employees)
        return (
            <View>
               <FlatList 
                    data={this.props.employees}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.uid}
               />
            </View>
        )
    }
}

const mapSateToProps = state => {


    const employees = _.map(state.employees, (val, uid) => {
        return{ ...val, uid}
    })

    console.log({employees})

    return {employees}
}

export default connect (mapSateToProps, {employeesFetch})(EmmployeeList);