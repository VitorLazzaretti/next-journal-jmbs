export default {
  name: 'info',
  title: 'Nova Notícia',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Manchete',
      description: 'Título da notícia, que irá atrair os usuários. Mínimo 60 caracteres e máximo 120. Exceção Crônicas e Cartas dos Leitores',
      type: 'string',
      validation: Rule => Rule.required().max(120)
    },
    {
      name: 'slug',
      title: 'URL',
      description: 'Apenas clique no botão Generate',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 120,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Descrição',
      description: 'Pequeno texto que vai embaixo da manchete antes de entrar na notícia. (opcional, mas recomendado)',
      type: 'text',
    },
    {
      name: 'artwork',
      title: 'Obra Referenciada',
      description: 'Livro/Anime/Universo de referência que utilizamos',
      type: 'reference',
      to: { type: 'artwork' },
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: { type: 'author' },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'infoType',
      title: 'Tipo de Notícia',
      type: 'reference',
      to: { type: 'infoType' },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Data de Publicação',
      description: 'Ignore este campo',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: 'Lugar onde ficará o conteúdo da notícia. Preste atenção as formatações',
      validation: Rule => Rule.required()
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
