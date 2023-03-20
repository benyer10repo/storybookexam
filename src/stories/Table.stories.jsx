import {Table} from "./Table";

export default {
    title: 'PREGUNTA UNO/Table',
    component: Table,
    argTypes: {
        rows: { control: '' },
        headers: { control: '' }
      },
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: [
    ['f1', 'f1', 'f1', 'f1', 'f1'],
    ['f2', 'f2', 'f2', 'f2', 'f2'],
    ['f3', 'f3', 'f3', 'f3', 'f3'],
    ['f4', 'f4', 'f4', 'f4', 'f4'],
  ],
  headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
};