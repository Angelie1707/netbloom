import {defineField, defineType} from 'sanity';

export default defineType({
  title: 'Clients',
  name: 'clients',
  type: 'document',
  fields: [
    defineField({
      title: 'Client / Company',
      name: 'clientName',
      type: 'string',
    }),
    defineField({
      title: 'Slider Logo',
      name: 'sliderLogo',
      type: 'image',
      options: {
          hotspot: true,
      },
    }),
    defineField({
      title: 'URL',
      name: 'clientUrl',
      type: 'string'
    }),
  ],

});