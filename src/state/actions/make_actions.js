const {
    MAKE_CELL,
    MAKE_COLUNM,
}                             = require('../ACTION_TYPES');


const makeCell = (column_index, cell) => {
    return {
        type: MAKE_CELL,
        column_index,
        cell,
    };
};

const makeColumn = (column) => {
    return {
        type: MAKE_COLUMN,
        column,
    };
};
