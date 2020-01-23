import React, { useEffect } from 'react';
import types from './actionTypes'
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import News from './News'

function App(props) {
  useEffect(() => {
    console.log('$$$$ useEffect function was triggered')
    props.loadHeadlines()
  }, [])

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />

    //     <button onClick={() => {
    //       props.example()
    //       props.test()
    //     }}>click to dispatch</button>

    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <input type="text"></input>

      <h2>Top Headlines</h2>

      <div>
        {props.loading
          ? <div>{'loading...'}</div>
          : props.newsList.map((news, idx) => {
              return (
                <News key={`${idx}-${news.author}`} news={news} />
              )
          })
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  newsList: state.newsList,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  example: () => dispatch({
    type: 'test',
    payload: 'sample'
  }),
  test: () => dispatch({
    type: 'SECOND',
    payload: 'sample-payload'
  }),
  loadHeadlines: () => dispatch({
    type: types.LOAD_TOP_HEADLINES_REQUEST
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
