import { connect } from 'react-redux'
import Link from '../components/reservation'

const mapStateToProps = (state:any, ownProps:any) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch:any, ownProps:any) => {
  return {
    onClick: () => {
      dispatch(()=>console.log('this ia component'))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink