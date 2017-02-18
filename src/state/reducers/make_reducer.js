const Immutable               = require('immutable');
const { createReducer }       = require('redux-immutablejs');
const {
    MAKE_CELL,
    MAKE_COLUMN,
}                             = require('../ACTION_TYPES');


const InitialState = Immutable.fromJS({});

const make_reducer = createReducer(InitialState, {

    [MAKE_CELL]: (state, action) => {
        return state.updateIn(['columns', action.column_index], state => state.push(action.cell));
    },

