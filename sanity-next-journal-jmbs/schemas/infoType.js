export default {
  name: 'infoType',
  title: 'Tipo de Notícia',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Os tipos já estão criados, não crie novos campos, por favor!',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
      description: 'Os tipos já estão criados, não crie novos campos, por favor!',
      validation: Rule => Rule.required()
    },
  ],
}
