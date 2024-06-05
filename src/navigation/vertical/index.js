const navigation = () => {
  return [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: 'tabler:smart-home'
    },

    {
      title: 'Products',
      icon: 'carbon:product',
      children: [
        {
          title: 'Product List',
          path: '/dashboard1'
        },
        {
          title: 'Add Product',
          path: '/dashboard2'
        }
      ]
    },
    {
      title: 'Orders',
      icon: 'tabler:shopping-cart',
      children: [
        {
          title: 'Order List',
          path: '/apps/roles'
        },
        {
          title: 'Order Details',
          path: '/apps/permissions'
        }
      ]
    },
    {
      title: 'Categories',
      icon: 'tabler:list',
      children: [
        {
          title: 'Category List',
          path: '/apps/roles'
        },
        {
          title: 'Subcategory List',
          path: '/apps/permissions'
        }
      ]
    },
    {
      title: 'Customers',
      icon: 'tabler:users',
      children: [
        {
          title: 'Customer List',
          path: '/apps/roles'
        },
        {
          title: 'Customer Details',
          path: '/apps/permissions'
        }
      ]
    }

    // {
    //   title: 'Second Page',
    //   path: '/second-page',
    //   icon: 'tabler:mail'
    // },
    // {
    //   path: '/acl',
    //   action: 'read',
    //   subject: 'acl-page',
    //   title: 'Access Control',
    //   icon: 'tabler:shield'
    // }
  ]
}

export default navigation
