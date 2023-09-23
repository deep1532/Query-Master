import React, { useState } from 'react';
// import 'antd/dist/antd.css';
import { message } from 'antd';


function SqlQueryInput({ onSubmit }) {
  
  const [query, setQuery] = useState('');
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const showNotification = (messageText) => {
    message.error(messageText); // Use message.success for success notifications
  };

  const handleSubmit = () => {
    // Define a map of keywords and corresponding data sources
    const keywordMap = {
      customers: '/data/customers.csv',
      orders: '/data/orders.csv',
      details: '/data/details.csv',
      products: '/data/products.csv',
    };

    // Convert the query to lowercase for case-insensitive matching
    const lowercaseQuery = query.toLowerCase();

    // Check if the query contains any of the keywords
    const matchingKeyword = Object.keys(keywordMap).find((keyword) =>
      lowercaseQuery.includes(keyword)
    );

    if (matchingKeyword) {
      onSubmit(keywordMap[matchingKeyword]);
    } else {
      showNotification('No matching keyword found in the query. Please enter a valid query');
    }
  };

  return (
    <div>
      <textarea
        rows='5'
        cols='50'
        value={query}
        onChange={handleQueryChange}
        placeholder='Type SQL Command...'
      ></textarea>
      <button className='query-result-keyword' onClick={handleSubmit}>Run</button>
    </div>
  );
}

export default React.memo(SqlQueryInput);
