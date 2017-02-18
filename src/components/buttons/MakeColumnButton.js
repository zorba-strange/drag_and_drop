const React                 = require('react');
const Radium                = require('radium');
const { connect }           = require('react-redux');
const { bindActionCreators } = require('redux');
const Immutable               = require('immutable');
const { makeColumn }        = require('../../state/actions/make_actions');


const page_wrapper_styles = {

    backgroundColor: 'pink',

    borderRadius: 5,

    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    
    height: '5em',
    width: '15em',

    ':active': {
        transform: 'translateY(5px)',
    },

};

const MakeColumnButton = ({
    makeColumn,
}) => {
    return (
        <div
            onClick={(e) => {
                e.preventDefault();
                console.log('make new column');
                const column = Immutable.List([]);
                makeColumn(column);
            }}
            style={page_wrapper_styles}>
            Column
        </div>
    )
};

const mapStateToProps = (state) => {
    return {};
}
const mapDispatchToProps = (dispatch) => {
    return {
        makeColumn: bindActionCreators(makeColumn, dispatch),
    }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Radium(MakeColumnButton));
