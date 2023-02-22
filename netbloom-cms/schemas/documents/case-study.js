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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      }
    }),
    defineField({
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      title: 'Published at',
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [{type: 'reference',to: {type: 'category'}}],
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