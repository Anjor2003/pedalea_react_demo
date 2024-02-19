export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Prodct Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Prodct Description',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Prodct Price',
      type: 'number',
    },
    {
      name: 'price_id',
      title: 'Stripe Prodct Price ID',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Prodct Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'slug',
      title: 'Product Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
  ],
}
