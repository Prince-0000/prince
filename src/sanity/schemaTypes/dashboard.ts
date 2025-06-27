import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dashboard',
  title: 'Dashboard',
  type: 'document',
  fields: [
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'string',
      description: "Text above the name, e.g., 'HEY THERE I’M'",
    }),
    defineField({
      name: 'mainName',
      title: 'Main Name',
      type: 'string',
      description: "Main heading text, e.g., 'PRINCE'",
    }),
    defineField({
      name: 'typewriterWords',
      title: 'Typewriter Words',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Words to loop through in the typewriter effect',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Tagline below the typewriter text',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        defineField({
          name: 'socialLink',
          title: 'Social Link',
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: "React icon component name (e.g., 'FaGithub')",
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
              description: 'URL to the social media profile',
            }),
          ],
        }),
      ],
      description: 'List of social media links with icon and URL',
    }),
  ],
})
