import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchBar, ImageGallery } from 'components';


export const App = () => {
  const [query, setQuery] = useState('');

  const handleFormSubmit = newQuery => {
      setQuery(newQuery);
  };

    return (
      <div className="app">
        <SearchBar onFormSubmit={handleFormSubmit} />
        <ImageGallery query={query}  />
        <ToastContainer
          position="top-right"
          theme="colored"
          autoClose={5000}
          hideProgressBar
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
}

