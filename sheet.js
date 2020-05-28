'use strict'

const database = {
    defaultTable: null,
    getRow(table) {
        table = table || this.defaultTable
        const method = `getRow${table}`

        return this[method] ? this[method]() : null
    },
    getRowUsers() {
        return {
            username: 'superman',
            email: 'superman@gmail.com'
        }
    },
    getRowProducts() {
        return {
            title: 'Un título',
            price: 15.97
        }
    }
}

const config = {
    defaultTable: 'Products'
}

function prepareConfig(cnf) {
    const defaultTable = cnf.defaultTable || 'Users'

    function queryExec(db) {
        return function () {
            return db.getRow(defaultTable)
        }
    }

    return queryExec
}

const dbConfigured = prepareConfig(config)(database)

console.log(dbConfigured())

// function prepareTable(db, cnf) {
//     // db.defaultTable = cnf.defaultTable
//     const defaultTable = db.defaultTable || cnf.defaultTable || 'Users'

//     return function () {
//         return db.getRow(defaultTable)
//     }
// }

// const table = prepareTable(database, config)

// console.log(table())
