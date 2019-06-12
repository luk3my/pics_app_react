import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';



class App extends React.Component {

async onSearchSubmit(term) {

  const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {query: term},
      headers: {
        Authorization: 'Client-ID 1bccb78e36438348b614a8dbfbdf0ae85db5cd70b92a86020ea172a737c0607a'
      }
    });

    console.log(response.data.results)

  }


  render() {
    return (

        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>

    );
  }
};

export default App;
