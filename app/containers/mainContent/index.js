import { connect } from 'react-redux';
import mainContent from '../../componets/Main/MainContent';

const mapStateToProps = state =>({
    seletedKeys: state.mainPage.seletedKeys,
});

const mapDispatchToProps = dispatch =>({
    // action: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(mainContent);