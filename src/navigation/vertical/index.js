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
          path: '/products'
        },
        {
          title: 'Add Product',
          path: '/products/add-product'
        }
      ]
    },
    {
      title: 'Orders',
      icon: 'tabler:shopping-cart',
      children: [
        {
          title: 'Order List',
          path: '/orders'
        },
        {
          title: 'Order Details',
          path: '/orders/order-detail'
        }
      ]
    },
    {
      title: 'Categories',
      icon: 'tabler:list',
      children: [
        {
          title: 'Category List',
          path: '/categories'
        },
        {
          title: 'Subcategory List',
          path: '/subcategory'
        }
      ]
    },
    {
      title: 'Customers',
      icon: 'tabler:users',
      children: [
        {
          title: 'Customer List',
          path: '/customers'
        },
        {
          title: 'Customer Details',
          path: '/customers/customer-detail'
        }
      ]
    },
    {
      title: 'Sellers',
      icon: 'tabler:user',
      children: [
        {
          title: 'Seller List',
          path: '/sellers'
        },
        {
          title: 'Add Seller',
          path: '/sellers/add-seller'
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
