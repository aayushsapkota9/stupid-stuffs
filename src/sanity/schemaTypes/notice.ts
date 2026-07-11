import { defineField, defineType } from 'sanity';

export const noticeType = defineType({
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Notice Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Publish Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'message', title: 'Message / Details', type: 'text' }),
    defineField({
      name: 'pdfFile',
      title: 'Attach PDF Document',
      type: 'file',
      options: { accept: 'application/pdf' },
    }),
  ],
});
