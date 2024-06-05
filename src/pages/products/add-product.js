import { Button, Card, CardContent, CardHeader, Grid, InputLabel, Typography } from '@mui/material'
import React from 'react'
import EditorControlled from 'src/@core/components/editor'
import CustomTextField from 'src/@core/components/mui/text-field'
import PageHeader from 'src/@core/components/page-header'

const AddProduct = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <PageHeader
            title={
              <Typography variant='h4' sx={{ mb: 6 }}>
                Add a new Product
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={12} md={6} textAlign={'right'}>
          <Button variant='tonal' color='secondary'>
            Discard
          </Button>

          <Button variant='tonal' style={{ margin: '0 15px' }}>
            Save Draft
          </Button>
          <Button variant='contained'>Publish Product</Button>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title='Product information' />
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <CustomTextField fullWidth label='Name' placeholder='Product title' />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField fullWidth type='number' label='SKU' placeholder='SKU' />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel>Description (Optional)</InputLabel>
                  <EditorControlled />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default AddProduct
