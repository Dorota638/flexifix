import { render, screen } from '@testing-library/react';
import NewBicycle from './NewBicycleForm';

test('renders new bicycle button', () => {
    render(<NewBicycle />);
    const bicyclebutton = screen.getByText(/Create bicycle/i);
    expect(bicyclebutton).toBeInTheDocument();
}); 
