import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, ButtonGroup, Card, CardBody, CardHeader} from "reactstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i><strong>Button Group</strong>
              <div className="card-header-actions">
                <a href="https://reactstrap.github.io/components/button-group/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
