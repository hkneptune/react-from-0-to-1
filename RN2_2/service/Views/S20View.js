import React, {
    Component
} from 'react';

import {
    View,
    Text
} from 'react-native';

export default class S20View extends Component{

    errorCB(err){
        console.log("SQL Error: " + err);
    };

    successCB(){
        console.log("SQL executed fine");
    };

    openCB(){
        console.log("Database OPENED");
    };

    render(){
        var SQLite = require('react-native-sqlite-storage');


        var db = SQLite.openDatabase("test.db", "1.0", "Test Database", 200000, this.openCB, this.errorCB);
        db.transaction((tx) => {
            //建表
            tx.executeSql('CREATE TABLE UserTable(field varchar(255),LastName varchar(255))', [], (tx, results) => {
                console.log("create table completed");
            });

            //查询
            tx.executeSql('SELECT * FROM UserTable', [], (tx, results) => {
                console.log("Query completed");

                // Get rows with Web SQL Database spec compliance.

                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                }
            });
        });

        return(
            <View>
                <Text>UserId:</Text>
            </View>
        );
    }
}
