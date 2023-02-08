import { render, screen } from '@testing-library/react';
import App from './App';

test('Loads Hello World H1', async () => {
    render(<App />);
    expect(screen.getByText('Hello world!'));
});
