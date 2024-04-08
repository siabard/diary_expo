import * as SqLite from 'expo-sqlite'

class Database {
    constructor(name) {
        this.connection = SqLite.openDatabase(`./${name}.db`);
    }

    enableForeignKeys() {
        return new Promise((resolve, reject) => {
            try {
                const queries = [
                    { sql: 'PRAGMA foreign_keys=ON;', args: [] }
                ];

                const readOnly = false;
                const callback = () => {
                    resolve('Forign key is on');
                };
                this.connection.exec(queries, readOnly, callback);
            } catch (e) {
                reject(e);
            }
        });
    }

    query(queries) {
        return new Promise((resolve, reject) => {
            this.connection.transaction((tx) => {
                const multipleQueries = (mquries) => {
                    mquries.forEach((query) => {
                        tx.executeSql(query.sql, query.args, (_, resultSet) => {
                            resolve(resultSet);
                        }, (_, error) => {
                            reject(error);
                        });
                    });
                };

                const singleQuery = (query) => {
                    tx.executeSql(query.sql, query.args, (_, resultSet) => {
                        resolve(resultSet);
                    }, (_, error) => {
                        reject(error);
                    });
                };
                if (Array.isArray(queries)) {
                    multipleQueries(queries);
                } else {
                    singleQuery(queries);
                }
            }, (error) => reject(error), () => resolve("Exection success"));
        });
    }
}

export default Database;