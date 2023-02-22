import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
// import client from 'part:@sanity/base/client';
import casestudy from './documents/case-study';
import blog from './documents/blog';
import portfolio from './documents/portfolio';
import faqs from './documents/faqs';
import testimonial from './documents/testimonial';
import clients from './documents/clients';
import author from './documents/author';

// const resp = await client.request({ uri: 'users/me' });

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blog,
    casestudy,
    portfolio,
    testimonial,
    clients,
    faqs,
    author,
  ])
})