import {defineField, defineType} from 'sanity';

export default defineType({
  title: 'Testimonial',
  name: 'testimonial',
  type: 'document',
  fields: [
    defineField({
      title: 'Client / Company',
      name: 'client',
      type: 'string',
    }),
    defineField({
      title: 'Client Testimonial',
      name: 'clientTestimonial',
      type: 'text',
      rows: 5,
    }),
    defineField({
      title: 'Client Logo',
      name: 'clientLogo',
      type: 'image',
      options: {
          hotspot: true,
      },
    }),
    defineField({
      title: 'Full Name',
      name: 'fullName',
      type: 'string'
    }),
    defineField({
      title: 'Position',
      name: 'position',
      type: 'string'
    }),
    defineField({
      title: 'Website',
      name: 'website',
      type: 'string'
    }),
    defineField({
      title: 'Rating', 
      name: 'rating',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [ 
          {value: '1 Star', title: '1 Star'},
          {value: '2 Star', title: '2 Star'},
          {value: '3 Star', title: '3 Star'},
          {value: '4 Star', title: '4 Star'},
          {value: '5 Star', title: '5 Star'},
          ],
          layout: 'radio'
        },
    }),
  ],

  preview: {
    select: {
      title: 'client',
      media: 'clientLogo',
    }
  },

});