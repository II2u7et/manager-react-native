import React from 'react';
import { Router } from 'react-native-router-flux';
import { Scence } from 'react-native-screens';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import {Actions} from 'react-native-router-flux';
import EmployeeCreate from './component/EmployeeCreate';
import EmployeeEdit from './component/EmployeeEdit';

const RouterComponent = () => {
    return(
        <Router>

            <Scence key="root" hideNavBar>
                <Scence key="auth">
                    <Scence key="login" component={LoginForm} title="Login"/>
                </Scence>

               <Scence key = "main">
                    <Scence key="employeeList" component={EmployeeList} title="Employees"
                        rightTitle="Add"
                        onRight={ () => Actions.employeeCreate()}
                        initial
                    />

                    <Scence key="employeeCreate" component={EmployeeCreate} title="Create employee"/>
                    <Scence key="employeeEdit" component={EmployeeEdit} title="Edit employee"/>
                    
               </Scence>

            </Scence>

        </Router>
    );

};

export default RouterComponent;