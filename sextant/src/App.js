import './App.css';
import { Component } from 'react';

const Banner = ({ children }) => {
  return (
    <div style={{
      backgroundColor: '#333',
      color: '#eee',
      minHeight: 50,
      padding: 20,
      flex: 1,
      fontSize: 20,
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      gap: 20
    }}>
      <p>{children}</p>
      <p>Network</p>
      <p>Contacts</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="banner">
        <Banner>
          Sextant Website
        </Banner>
      </div>
    );
  }
}

export default App;