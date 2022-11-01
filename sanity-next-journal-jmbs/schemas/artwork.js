export default {
  name: 'artwork',
  title: 'Obra de Referência',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome da Obra',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'writter',
      title: 'Escritor',
      description: "Nome do escritor que escreveu tal obra.",
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'link_description',
      title: 'Link de Descrição',
      description: "Link que redirecione para um site onde a pessoa poderá conhecer a obra. Pode ser um link de uma wiki ou algo semelhante",
      type: 'string',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
