import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {media} from 'sanity-plugin-media';
import {schemaTypes} from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Netbloom CMS',
  basePath: '/studio',
  projectId: 'mjyehiv5',
  dataset: 'production',

  plugins: [
    deskTool(),
    media(),
    visionTool({
      defaultApiVersion: 'v2021-10-21',
      defaultDataset: 'production',
    })],

  schema: {
    types: schemaTypes,
  },
})