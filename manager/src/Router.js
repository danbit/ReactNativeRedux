import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Platform, StyleSheet } from 'react-native';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={styles.sceneContainerStyle}>
            <Scene key="auth" initial>
                <Scene key="login" component={LoginForm} title="Please Login" />
            </Scene>
            
            <Scene key="main">
                <Scene 
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"                    
                />
                <Scene key="employeeCreate" component={EmployeeCreate} title="Employee Create" />
                <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
            </Scene>
        </Router>
    );
};

const styles = StyleSheet.create({
  sceneContainerStyle: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 65
      },
      android: {
        paddingTop: 55
      }
    }),
  },
});

export default RouterComponent;
