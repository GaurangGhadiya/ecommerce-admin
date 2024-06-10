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

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'
import { Divider, FormLabel, InputLabel } from '@mui/material'
import FileUploaderRestrictions from 'src/@core/components/FileUploaderRestrictions/FileUploaderRestrictions'
import EditorControlled from 'src/@core/components/editor'

// ** Actions Imports
// import { addUser } from 'src/store/apps/user'

const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return `${field} field is required`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`
  } else {
    return ''
  }
}

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

const schema = yup.object().shape({
  name: yup.string().required(),
  code: yup.string().required(),
  details: yup.string().required(),
  status: yup.string().required()

  // contact: yup
  //   .number()
  //   .typeError('Contact Number field is required')
  //   .min(10, obj => showErrors('Contact Number', obj.value.length, obj.min))
  //   .required(),
  // fullName: yup
  //   .string()
  //   .min(3, obj => showErrors('First Name', obj.value.length, obj.min))
  //   .required(),
  // username: yup
  //   .string()
  //   .min(3, obj => showErrors('Username', obj.value.length, obj.min))
  //   .required()
})

const defaultValues = {
  name: '',
  code: '',
  details: '',
  status: '',
  categoryicon: ''
}

const AddCategoryDrawer = props => {
  // ** Props
  const { open, toggle } = props

  // ** State
  const [plan, setPlan] = useState('basic')
  const [role, setRole] = useState('subscriber')

  // ** Hooks
  //   const dispatch = useDispatch()

  const {
    reset,
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',

    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    toggle()
    reset()
  }

  const handleClose = () => {
    setPlan('basic')
    setRole('subscriber')
    setValue('contact', Number(''))
    toggle()
    reset()
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
        <Typography variant='h5'>Add Category</Typography>
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
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Title'
                onChange={onChange}
                placeholder='Enter category title'
                error={Boolean(errors.name)}
                {...(errors.name && { helperText: errors.name.message })}
              />
            )}
          />
          <Controller
            name='code'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                sx={{ mb: 4 }}
                label='Slug'
                value={value}
                onChange={onChange}
                placeholder='Enter slug'
                error={Boolean(errors.code)}
                {...(errors.code && { helperText: errors.code.message })}
              />
            )}
          />
          <Box mb={4}>
            <InputLabel>Attachment</InputLabel>
            <FileUploaderRestrictions maxFiles={1} />
          </Box>

          <Controller
            name='details'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                rows={5}
                multiline
                label='Description'
                placeholder='Enter description'
                id='textarea-outlined-static'
                value={value}
                onChange={onChange}
                sx={{ mb: 4 }}
                error={Boolean(errors.details)}
                {...(errors.details && { helperText: errors.details.message })}
              />
            )}
          />

          <Controller
            name='status'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                select
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Select category status'
                onChange={onChange}
                SelectProps={{ value: role, onChange: e => setRole(e.target.value) }}
                error={Boolean(errors.status)}
                {...(errors.status && { helperText: errors.status.message })}
              >
                <MenuItem value='1'>Active</MenuItem>
                <MenuItem value='0'>Inactive</MenuItem>
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

export default AddCategoryDrawer
