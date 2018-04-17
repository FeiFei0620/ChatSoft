import MainNav from '../componets/Main/MainNav';
import { connect } from 'react-redux';

const mapStateToProps = state =>({
    seletedKeys: state.mainPage.seletedKeys,
});

const mapDispatchToProps = dispatch =>({
    // action: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);