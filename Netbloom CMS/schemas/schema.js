import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import casestudy from './documents/case-study' 
import article from './documents/article'
import author from './documents/author'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    article,
    casestudy,
    author,
  ])
})