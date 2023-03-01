import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Image',
      name: 'profileImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    })
  ],
  
});