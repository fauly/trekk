export default {
    name: 'hero',
    title: 'Homepage Hero Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
      },
      {
        name: 'ctaLabel',
        title: 'CTA Button Label',
        type: 'string',
      },
      {
        name: 'ctaLink',
        title: 'CTA Button Link',
        type: 'url',
      },
    ],
  };