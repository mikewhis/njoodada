import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'impactStat',
  title: 'Impact Statistics',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required()
    })
  ]
}) 