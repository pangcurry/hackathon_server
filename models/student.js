module.exports = (sequelize, DataTypes) => {
    return sequelize.define('student', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        grade: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        class: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        temperature: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    })
}
