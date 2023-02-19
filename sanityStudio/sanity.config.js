import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'uhl9mnqh',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaType,
  },
})
