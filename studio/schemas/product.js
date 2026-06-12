// schemas/product.js
export default {
  name: 'product',
  type: 'document',
  title: 'Products',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          type: 'image',
          options: {
            accept: '.jpg,.jpeg,.png',
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'specs',
      type: 'text',
      title: 'Specifications (Key := Value)',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          {title: 'Dupatta', value: 'Dupatta'},
          {title: 'Saree', value: 'Saree'},
          {title: 'Dress', value: 'Dress'},
          {title: 'Top Material', value: 'Top Material'},
        ],
      },
    },
    {
      name: 'colours',
      type: 'text',
      title: 'Colours (Comma Separate)',
    },
  ],
}
