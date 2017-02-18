const {
    MAKE_CELL,
    MAKE_COLUMN,
}                             = require('../ACTION_TYPES');

const makeCell = (column_index, cell) => {
    return {
        type: MAKE_CELL,
        column_index,
        cell,
    };
};

const makeColumn = (column) => {
    console.log(column, MAKE_COLUMN);
    return {
        type: MAKE_COLUMN,
        column,
    };
};


module.exports = {
    makeCell,
    makeColumn,
};
