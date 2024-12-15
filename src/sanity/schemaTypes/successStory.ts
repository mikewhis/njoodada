import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'successStory',
  title: 'Success Stories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text'
    }),
    defineField({
      name: 'achievement',
      title: 'Achievement',
      type: 'string'
    })
  ]
}) 