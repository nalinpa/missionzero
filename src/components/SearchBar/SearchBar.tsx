import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import './SearchBar.css';

interface Props {}

const SearchBar = (props: Props) => {
  return (
    <Form className='d-flex searchBar'>
        <Form.Control
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button type="submit">Search</Button>     
  </Form>
  )
}

export default SearchBar