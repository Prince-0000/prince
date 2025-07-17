import { type SchemaTypeDefinition } from 'sanity'
import dashboard from './dashboard'
import about from './about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [dashboard, about],
}
