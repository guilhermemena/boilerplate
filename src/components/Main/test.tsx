import { render, screen } from '@testing-library/react';

import Main from 'src/components/Main/';

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />);

    expect(screen.getByRole('heading', { name: /next js/i })).toBeInTheDocument();
  });
});
