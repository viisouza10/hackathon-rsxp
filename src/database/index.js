import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Company from '../app/models/Company';
import School from '../app/models/School';
import Student from '../app/models/Student';
import User from '../app/models/User';

const models = [Company, School, Student, User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();
