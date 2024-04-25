import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserPage from './page';
import { fetchData } from '@/utils/fetchData';
import { User } from '@/types/User';

jest.mock('../../utils/fetchData');

describe('UserPage', () => {
  test('renders UserPage component and fetches users', async () => {
    const mockUsers: User[] = [
      {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        company: {
          id: 1,
          name: 'Example Company',
        },
      },
    ];

    (fetchData as jest.Mock).mockResolvedValue(mockUsers);

    render(<UserPage />);

    expect(fetchData).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText('Example Company')).toBeInTheDocument()
      expect(screen.getByText('@johndoe')).toBeInTheDocument()
    });
  });
});