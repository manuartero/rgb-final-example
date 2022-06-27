import Card from './card';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

export const Default = (args) => <Card onClick={args.onClick} showButton title='Ola que ase' price={0.01} />;
