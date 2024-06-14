// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'
import FileUploaderRestrictions from 'src/@core/components/FileUploaderRestrictions/FileUploaderRestrictions'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Styles
const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

// ** Validation Schema
const schema = yup.object().shape({
  name: yup.string().required('Title is required'),
  code: yup.string().required('Slug is required'),
  category_id: yup.string().required('Category is required'),
  details: yup.string().required('Description is required'),
  status: yup.string().required('Status is required'),
  files: yup.array().min(1, 'File is required').max(1, 'You can only upload one file')
})

// ** Default Values
const defaultValues = {
  name: '',
  code: '',
  category_id: '',
  details: '',
  status: '',
  files: []
}

const AddSubCategoryDrawer = props => {
  // ** Props
  const { open, toggle } = props

  // ** State
  const [files, setFiles] = useState([])
  console.log(files)

  // ** Form Methods
  const {
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  // ** Handlers
  const onSubmit = data => {
    console.log(data)
    toggle()
    reset()
  }

  const handleClose = () => {
    reset()
    toggle()
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h5'>Add Sub Category</Typography>
        <IconButton
          size='small'
          onClick={handleClose}
          sx={{
            p: '0.438rem',
            borderRadius: 1,
            color: 'text.primary',
            backgroundColor: 'action.selected',
            '&:hover': {
              backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.16)`
            }
          }}
        >
          <Icon icon='tabler:x' fontSize='1.125rem' />
        </IconButton>
      </Header>
      <Divider sx={{ marginBottom: 7 }} />
      <Box sx={{ p: theme => theme.spacing(0, 6, 6) }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <CustomTextField
                {...field}
                fullWidth
                sx={{ mb: 4 }}
                label='Title'
                placeholder='Enter category title'
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name='code'
            control={control}
            render={({ field }) => (
              <CustomTextField
                {...field}
                fullWidth
                sx={{ mb: 4 }}
                label='Slug'
                placeholder='Enter slug'
                error={Boolean(errors.code)}
                helperText={errors.code?.message}
              />
            )}
          />
          <Controller
            name='category_id'
            control={control}
            render={({ field }) => (
              <CustomTextField
                {...field}
                select
                fullWidth
                sx={{ mb: 4 }}
                label='Select category'
                error={Boolean(errors.category_id)}
                helperText={errors.category_id?.message}
              >
                <MenuItem value='shoes'>Shoes</MenuItem>
                <MenuItem value='tshirt'>T-shirt</MenuItem>
                <MenuItem value='jeans'>Jeans</MenuItem>
              </CustomTextField>
            )}
          />
          <Box mb={4}>
            <Controller
              name='files'
              control={control}
              render={({ field }) => (
                <FileUploaderRestrictions
                  maxFiles={1}
                  files={files}
                  setFiles={acceptedFiles => {
                    setFiles(acceptedFiles)
                    setValue('files', acceptedFiles)
                  }}
                  error={errors.files || ''}
                />
              )}
            />
          </Box>
          <Controller
            name='details'
            control={control}
            render={({ field }) => (
              <CustomTextField
                {...field}
                fullWidth
                rows={5}
                multiline
                label='Description'
                placeholder='Enter description'
                error={Boolean(errors.details)}
                helperText={errors.details?.message}
                sx={{ mb: 4 }}
              />
            )}
          />
          <Controller
            name='status'
            control={control}
            render={({ field }) => (
              <CustomTextField
                {...field}
                select
                fullWidth
                sx={{ mb: 4 }}
                label='Select sub category status'
                error={Boolean(errors.status)}
                helperText={errors.status ? errors.status.message : ''}
              >
                <MenuItem value='active'>Active</MenuItem>
                <MenuItem value='inactive'>Inactive</MenuItem>
              </CustomTextField>
            )}
          />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button type='submit' variant='contained' sx={{ mr: 3 }}>
              Add
            </Button>
            <Button variant='tonal' color='error' onClick={handleClose}>
              Discard
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  )
}

export default AddSubCategoryDrawer
