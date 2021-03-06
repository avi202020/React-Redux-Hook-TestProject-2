import React from 'react'
import { Container, TextField, Button, Typography } from '@material-ui/core'

import './search.scss'

const Search = ({ value, searchBy, onClick, onChange, onSubmit }) => {
  return (
    <Container className='serch_container'>
      <form
        noValidate
        autoComplete='off'
        className='form_container'
        onSubmit={onSubmit}
      >
        <TextField
          label='Query...'
          margin='normal'
          className='input_box'
          value={value}
          onChange={onChange}
        />

        <Button
          className='form_btn'
          variant='contained'
          color='primary'
          onClick={onSubmit}
        >
          Search
        </Button>
      </form>
      <div className='filter_container'>
        <Typography className='filter_title' variant='subtitle1'>
          Search by
        </Typography>
        <Button
          className='filter_btn'
          variant={searchBy === 'title' ? 'contained' : 'outlined'}
          color='primary'
          onClick={() => onClick('title')}
        >
          Title
        </Button>
        <Button
          className='filter_btn genre_btn'
          variant={searchBy === 'genres' ? 'contained' : 'outlined'}
          color='primary'
          onClick={() => onClick('genres')}
        >
          Genre
        </Button>
      </div>
    </Container>
  )
}

export default React.memo(Search)
