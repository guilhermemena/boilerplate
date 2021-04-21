import { render, screen } from '@testing-library/react';

import Main from './index';

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />);

    expect(screen.getByRole('heading', { name: /next js/i })).toBeInTheDocument();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': 'hsl(223, 63%, 36%)' });
  });
});
