import {defineField, defineType} from 'sanity';

export default defineType({
  title: 'FAQs',
  name: 'faqs',
  type: 'document',
  fields: [
    defineField({
      title: 'Question',
      name: 'question',
      type: 'string',
    }),
    defineField({
      title: 'Answer',
      name: 'answer',
      type: 'text',
    }), 
  ],
});