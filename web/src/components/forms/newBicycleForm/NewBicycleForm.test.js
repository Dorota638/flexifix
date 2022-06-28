import { render, screen } from '@testing-library/react';
import NewBicycleForm from './NewBicycleForm';

test('renders new bicycle button', () => {
    render(<NewBicycleForm />);
    const bicyclebutton = screen.findByText(/Create bicycle/i);
    expect(bicyclebutton).toBeInTheDocument();
}); 
