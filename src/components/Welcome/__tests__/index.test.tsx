import { render, screen } from '@testing-library/react';
import Welcome from '../index';

describe('Welcome', () => {
  it('renders the name prop', () => {
    render(<Welcome name="Test App" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Welcome to Test App'
    );
  });

  it('renders external links', () => {
    render(<Welcome name="Test App" />);
    expect(screen.getByRole('link', { name: 'Webpack 5' })).toHaveAttribute(
      'href',
      'https://webpack.js.org'
    );
    expect(screen.getByRole('link', { name: 'React 18' })).toHaveAttribute(
      'href',
      'https://react.dev'
    );
    expect(screen.getByRole('link', { name: 'SWC' })).toHaveAttribute(
      'href',
      'https://swc.rs'
    );
  });

  it('sets target=_blank and rel=noreferrer on external links', () => {
    render(<Welcome name="Test App" />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });
  });
});
