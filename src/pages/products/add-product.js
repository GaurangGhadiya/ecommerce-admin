import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Switch,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import FileUploaderRestrictions from 'src/@core/components/FileUploaderRestrictions/FileUploaderRestrictions'
import TagInput from 'src/@core/components/TagInput/TagInput'
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'
import EditorControlled from 'src/@core/components/editor'
import CustomTextField from 'src/@core/components/mui/text-field'
import PageHeader from 'src/@core/components/page-header'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const AddProduct = () => {
  const [selectedRadio, setSelectedRadio] = useState('percentage')
  const [checked, setChecked] = useState(true)
  const [tags, setTags] = useState([])

  const [variants, setVariants] = useState([
    {
      option: '',
      value: ''
    }
  ])

  const addVariant = () => {
    setVariants([
      ...variants,
      {
        option: '',
        value: ''
      }
    ])
  }

  const deleteVariant = index => {
    console.log('index', index)
    let data = [...variants]
    let newData = data?.filter((v, i) => i != index)
    setVariants(newData)
  }

  const handleTagChange = newTags => {
    setTags(newTags)
    console.log('Updated Tags:', newTags)
  }

  const handleChange = event => {
    setChecked(event.target.checked)
  }

  const data = [
    // {
    //   value: 'noDiscount',
    //   title: (
    //     <Typography variant='h6' sx={{ mb: 1 }}>
    //       No Discount
    //     </Typography>
    //   )
    // },
    {
      value: 'percentage',
      title: (
        <Typography variant='h6' sx={{ mb: 1 }}>
          Percentage %
        </Typography>
      )
    },
    {
      value: 'fixed',
      title: (
        <Typography variant='h6' sx={{ mb: 1 }}>
          Fixed Price
        </Typography>
      )
    }
  ]

  const handleRadioChange = prop => {
    if (typeof prop === 'string') {
      setSelectedRadio(prop)
    } else {
      setSelectedRadio(prop.target.value)
    }
  }

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

      <Grid container spacing={6} mt={0}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title='Product information' />
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <CustomTextField fullWidth label='Name' placeholder='Product title' />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField fullWidth type='number' label='SKU' placeholder='SKU' />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField fullWidth type='number' label='Quantity' placeholder='Quantity' />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel>Description (Optional)</InputLabel>
                  <EditorControlled />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card style={{ marginTop: '30px' }}>
            <CardHeader title='Media' />
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <FileUploaderRestrictions maxFiles={7} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card style={{ marginTop: '30px' }}>
            <CardHeader title='Variations' />
            <CardContent>
              {variants?.map((v, i) => (
                <Grid container spacing={6} key={i} mb={3}>
                  <Grid item xs={12} md={4.5}>
                    <CustomTextField select defaultValue='' label='Options' id='custom-select' fullWidth>
                      <MenuItem value={10}>Color</MenuItem>
                      <MenuItem value={20}>Size</MenuItem>
                    </CustomTextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CustomTextField fullWidth label='Value' placeholder='Enter value' />
                  </Grid>
                  <Grid item xs={12} md={1.5} mt={4}>
                    <Button variant='tonal' color='error' onClick={() => deleteVariant(i)}>
                      <DeleteForeverIcon />
                    </Button>
                  </Grid>
                </Grid>
              ))}

              <Button variant='contained' style={{ marginTop: '15px' }} onClick={addVariant}>
                Add another option
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title='Thumbnail' />
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <FileUploaderRestrictions maxFiles={1} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card style={{ marginTop: '30px' }}>
            <CardHeader title='Pricing' />
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <CustomTextField fullWidth type='number' label='Base Price' placeholder='Product Price' />
                </Grid>
                <Grid item xs={12} pt={0}>
                  <FormControlLabel
                    label='Discount available on this product'
                    control={<Checkbox checked={checked} onChange={handleChange} name='discount' />}
                  />
                </Grid>
                {checked && (
                  <>
                    <Grid item xs={12}>
                      <Grid container spacing={4}>
                        {data.map((item, index) => (
                          <CustomRadioIcons
                            key={index}
                            data={data[index]}
                            selected={selectedRadio}
                            name='custom-radios-deal'
                            gridProps={{ sm: 6, xs: 12 }}
                            handleChange={handleRadioChange}
                          />
                        ))}
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      {selectedRadio == 'fixed' ? (
                        <CustomTextField
                          fullWidth
                          type='number'
                          label='Discounted Price'
                          placeholder='Discounted Price'
                        />
                      ) : selectedRadio == 'percentage' ? (
                        <CustomTextField
                          fullWidth
                          type='number'
                          label='Discounted Percentage'
                          placeholder='Discounted Percentage'
                        />
                      ) : null}
                    </Grid>
                  </>
                )}
              </Grid>
            </CardContent>
          </Card>
          <Card style={{ marginTop: '30px' }}>
            <CardHeader title='Organize' />
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <CustomTextField select defaultValue='' label='Category' id='custom-select' fullWidth>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField select defaultValue='' label='Sub Category' id='custom-select' fullWidth>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField select defaultValue='' label='Status' id='custom-select' fullWidth>
                    <MenuItem value={10}>Published</MenuItem>
                    <MenuItem value={20}>Inactive</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField select defaultValue='' label='Stock' id='custom-select' fullWidth>
                    <MenuItem value={10}>In Stock</MenuItem>
                    <MenuItem value={20}>Out of Stock</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12}>
                  <FormLabel>Tags</FormLabel>
                  <TagInput initialTags={tags} onChange={handleTagChange} />
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
