export default {
  name: 'user',
  type: 'document',
  title: 'Users',
  fields: [
    {
      name: 'username',
      type: 'string',
      title: 'Username',
      readOnly: () => true,
    },
    {
      name: 'email',
      type: 'string',
      title: 'E-Mail',
      readOnly: () => true,
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
      readOnly: () => true,
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      readOnly: () => true,
    },
    {
      name: 'verified',
      title: 'isVerified',
      type: 'boolean',
      defaultValue: false,
      readOnly: () => true,
    },
    {
      name: 'cart',
      type: 'array',
      title: 'Cart',
      initialValue: [],
      of: [{type: 'reference', name: 'product', to: [{type: 'product'}]}],
      options: {
        insertMenu: {
          filter: true,
        },
      },
      readOnly: () => true,
    },
    {
      name: 'orders',
      type: 'array',
      title: 'Orders',
      initialValue: [],
      of: [{type: 'reference', name: 'order', to: [{type: 'order'}]}],
      options: {
        insertMenu: {
          filter: true,
        },
      },
      readOnly: () => true,
    },
  ],
}
