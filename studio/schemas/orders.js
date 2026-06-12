// schemas/orders.js
export default {
  name: 'order',
  type: 'document',
  title: 'Orders',
  fields: [
    {name: 'username', type: 'string', title: 'Username', readOnly: () => true},
    {name: 'user', type: 'reference', to: [{type: 'user', title: 'User'}]},
    {
      name: 'product',
      type: 'reference',
      to: [{type: 'product', title: 'Product'}],
      readOnly: () => true,
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: ['Processing', 'Shipped', 'Cancelled', 'Error'],
      },
      initialValue: 'Pending',
    },
    {
      name: 'colours',
      type: 'array',
      title: 'Colours',
      readOnly: () => true,
      of: [
        {
          type: 'object',
          name: 'colour',
          title: 'Colour',
          fields: [
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'quantity', title: 'Quantity', type: 'string'},
          ],
        },
      ],
    },
    {name: 'address', title: 'Address', type: 'string', readOnly: () => true},
    {name: 'note', title: 'Additional Note', type: 'text', readOnly: () => true},
  ],
}
