import {defineField, defineType} from 'sanity';

export default defineType({
  title: 'Portfolio',
  name: 'portfolio',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      }
    }),
    defineField({
      title: 'Categories', 
      name: 'categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [ 
          {value: 'seo', title: 'SEO'},
          {value: 'web-design', title: 'Website'},
          ],
          layout: 'checkbox'
        },
    }),
    defineField({
      title: 'Main image',
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'array', 
      of: [{type: 'block'}]
    }),
  ],
});