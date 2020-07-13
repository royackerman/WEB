import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './components/App'; // main react component
import Welcome from './components/Welcome'; 
import data from './testData.json';
console.log(data);


ReactDOM.render(
  <Welcome msg="@NALYCIPE - Small Recipe Analyzer"/>,
  document.getElementById('root')
);



setTimeout(() => {

  ReactDOM.render(
    <App myHomePageTitle="More info" contests={data.contests}/>,
    document.getElementById('root')
  );

}, 3000);

