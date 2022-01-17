export default {
  name: 'teammateRefference',
  type: 'object',
  title: 'Teammate reference',
  fields: [
    {
      name: 'teammate',
      type: 'reference',
      to: [
        {
          type: 'teammate'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'teammate.name',
      jobtitle: 'teammate.jobtitle',
      media: 'author.image.asset'
    }
  }
}
