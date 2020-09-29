import React from 'react';
import AppHeader from './components/header/AppHeader';
import Content from './components/contentpage/Content';
import AppFooter from './components/footer/AppFooter';
import './App.css';

export class App extends React.Component {

  render(){

    return (
      <>
        <AppHeader />
        <Content />
        <AppFooter />
      </>
    );
  }
}

export default App;
