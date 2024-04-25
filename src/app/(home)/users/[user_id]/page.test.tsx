import { render, screen, waitFor } from '@testing-library/react';
import UserDetails from './page';
import { fetchData } from '@/utils/fetchData';
import { Post } from '@/types/Post';

jest.mock('../../../../utils/fetchData');

describe('UserDetails', () => {
  test('renders UserDetails component and fetches posts', async () => {
    const mockPosts: Post[] = [
      {
        id: 1,
        title: 'Post 1',
        body: 'Lorem ipsum dolor sit amet',
      },
    ];

    const paramsId = { user_id: '1' };

    (fetchData as jest.Mock).mockResolvedValue(mockPosts);

    render(<UserDetails params={paramsId} />);

    expect(fetchData).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1/posts');

    await waitFor(() => {
      expect(screen.getByText('Post 1')).toBeInTheDocument()
      expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument()
    });
  });
})
