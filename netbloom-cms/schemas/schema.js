import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import casestudy from './documents/case-study';
import blog from './documents/blog';
import portfolio from './documents/portfolio';
import faqs from './documents/faqs';
import testimonial from './documents/testimonial';
import author from './documents/author';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blog,
    casestudy,
    portfolio,
    testimonial,
    faqs,
    author,
  ])
})