import {defineField, defineType} from 'sanity';

export default defineType({
  title: 'Case Study',
  name: 'case-study',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      }
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      title: 'Categories', 
      name: 'categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [ 
          {value: 'seo', title: 'SEO'},
          {value: 'sem', title: 'SEM'},
          {value: 'guides', title: 'Guides'},
          {value: 'branding', title: 'Branding'},
          ],
          layout: 'radio'
        },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
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

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
});