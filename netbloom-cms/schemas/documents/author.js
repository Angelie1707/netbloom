import {defineField, defineType} from 'sanity';

// import client from 'part:@sanity/base/client';

// const resp = await client.request({ uri: 'users/me' });

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      readOnly: true,
      type: 'string',
    }),
    defineField({
      title: 'Name',
      name: 'name',
      readOnly: true,
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      readOnly: true,
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      title: 'Image',
      name: 'profileImage',
      readOnly: true,
      type: 'string',
      // type: 'image',
      // options: {
      //   hotspot: true,
      // },
    }),
    defineField({
      name: 'role',
      readOnly: true,
      type: 'string',
    }),
    defineField({
      name: 'provider',
      readOnly: true,
      type: 'string',
    }),
  ],
  // initialValue: () => client.request({ uri: 'users/me' }),
  
});