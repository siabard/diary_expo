import Database from "./Database";

class DiaryDatabase extends Database {
    constructor(name) {
        super(name);
    }

    initialize() {
        const createUserTable = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            gender CHAR(6) NOT NULL,
            birth_date CHAR(10) NOT NULL,
            email TEXT UNIQUE NOT NULL
        );
    `;

        const insertDefaultUser = `
        INSERT INTO users (first_name, last_name, gender, birth_date, email)
        SELECT 'John', 'Doe', 'Male', '1980-01-01', 'john.doe@example.com' WHERE NOT EXISTS(SELECT 1 FROM users WHERE id = 1);
    `;

        const createDiaryTable = `
        CREATE TABLE IF NOT EXISTS diaries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            date CHAR(10) NOT NULL,
            content TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );
    `;

        return this.enableForeignKeys().then(
            (message) => {
                console.log(message);

                return this.query([{ sql: createUserTable, args: [] }, { sql: insertDefaultUser, args: [] }, { sql: createDiaryTable, args: [] }]);
            },
            (error) => {
                console.log(error);
            }

        );
    }

    async fetchUser(id) {
        const sql = `SELECT * FROM users WHERE id=?; `;

        try {
            const resultSet = await this.query({ sql, args: [id] });
            const { rows: { _array } } = resultSet;
            const user = _array[0];
            const { id: id_1, gender, email, first_name, last_name, birth_date } = user;
            return {
                id,
                firstName: first_name,
                lastName: last_name,
                gender,
                email,
                birthDate: birth_date,
            };
        } catch (error) {
            console.log(`db.fetchUser sql: ${sql} error: ${JSON.stringify(error, null, '\t')}`);
        }
    }

    async updateUser(user) {
        const { id, firstName, lastName, gender, birthDate, email } = user;
        const sql = `UPDATE users SET first_name=?, last_name=?, gender=?, birth_date=?, email=? WHERE id=?;`
        try {
            const resultSet = await this.query({ sql, args: [firstName, lastName, gender, birthDate, email, id] });
            return resultSet;
        } catch (error) {
            console.log(`db.updateUser sql: ${sql} error: ${JSON.stringify(error, null, '\t')}`);
        }
    }

    async fetchDiaries(userId) {
        const sql = `SELECT * FROM diaries WHERE user_id=?;`;
        try {
            const resultSet = await this.query({ sql, args: [userId] });
            const { rows: { _array } } = resultSet;
            return _array;
        } catch (error) {
            console.log(`db.fetchDiaries sql: ${sql} error: ${JSON.stringify(error, null, '\t')}`);
        }
    }

    async insertDiary(diary) {
        const { userId, date, content } = diary;
        const sql = `INSERT INTO diaries (user_id, date, content) VALUES(?, ?, ?);`;
        try {
            const resultSet = await this.query({ sql, args: [userId, date, content] });
            console.log(resultSet);
            return resultSet;
        } catch (error) {
            console.log(`db.insertDiary sql: ${sql} error: ${JSON.stringify(error, null, '\t')}`);
        }
    }
}

export default DiaryDatabase;