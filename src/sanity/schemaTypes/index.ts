import { type SchemaTypeDefinition } from 'sanity'
import program from './program'
import successStory from './successStory'
import impactStat from './impactStat'
import partner from './partner'
import boardMember from './boardMember'
import contactInfo from './contactInfo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    program,
    successStory,
    impactStat,
    partner,
    boardMember,
    contactInfo
  ],
}
