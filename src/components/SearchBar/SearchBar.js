import React, { Component } from 'react';
import { searchData } from '../../actions/index';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class SearchBar extends Component {

  handleFormSubmit = function({query}) {
    console.log('trying to handle subimit for query', query);
  }

  renderInput(field) {
    return <input type="text" placeholder="&#xf002; Search DailySmarty" {...field.input} />
  }

  render() {

    const { handleSubmit } = this.props;

    return (
        <section className={`search-bar search-bar__${this.props.page}`} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="search-bar__wrapper">
          <Field name="artist:" component={this.renderInput}/>
          <p>Press return to search</p>
        </div>
  </section>
  )
  }
}

//   constructor() {
//     super();
//     this.state = {
//       searchWord: ''
//     }
//   }
//
//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value })
//   }
//
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.searchData(this.state.searchWord)
//     this.clearInputs();
//   }
//
//   clearInputs = () => {
//     this.setState({ searchWord: '' })
//   }
// //   to trigger pete's styles of the second search bar styles folder <div className='search-container'>
//   render() {
//     return (
//         <section className='search-bar-box' >
//           <input
//               className='search-input'
//               type='text'
//               placeholder='Search artists...'
//               id='searchWord'
//               name='searchWord'
//               value={this.state.searchWord}
//               onChange={this.handleChange}
//           />
//           <button className='search-btn' onClick={this.handleSubmit}>Search</button>
//         </section>
//     )
//   }
// }
//
// export default connect(null, {searchData})(SearchBar)


SearchBar = reduxForm({
  form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;