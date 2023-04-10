import { MOCK_SHOWS, MOCK_SHOW_DATA } from './tests/fixtures'
import { render, screen, waitFor, within } from '@testing-library/react'

import App from './App'
import { IShow } from './types/shared'
import userEvent from '@testing-library/user-event'

test('renders learn react link', () => {
   render(<App />)
   const title = screen.getByRole('heading', { name: /TV Database/i })
   expect(title).toBeInTheDocument()
})

describe('App (e2e/integration tests)', () => {
   it('render the list of shows when I search for a show and render the show detail once I select a show', async () => {
      // Arrange
      // Mock fetch
      const mockFetch = jest.fn().mockImplementationOnce(() => {
         return Promise.resolve({
            json: () => {
               return Promise.resolve(
                  MOCK_SHOWS.map((show) => ({ show })).reduce(
                     (acc, cur) => acc.concat(cur),
                     [] as Array<{ show: IShow }>
                  )
               )
            }
         })
      })
      global.fetch = mockFetch
      render(<App />)

      // Act
      const searchInput = screen.getByRole('textbox')
      const searchButton = screen.getByText('Search')
      await userEvent.type(searchInput, 'The Office')
      await userEvent.click(searchButton)
      await waitFor(() => {
         expect(screen.getAllByRole('listitem')).toHaveLength(MOCK_SHOWS.length)
      })

      // Assert
      const shows = screen.getAllByRole('listitem')
      let countShow = 0
      for (const show of shows) {
         within(show).getByText(MOCK_SHOWS[countShow].name)
         countShow++
      }

      // Act
      mockFetch.mockImplementationOnce(() => {
         return Promise.resolve({
            json: () => {
               return Promise.resolve(MOCK_SHOW_DATA)
            }
         })
      })
      await userEvent.click(shows[0])
      await waitFor(() => {
         expect(screen.getByText(MOCK_SHOW_DATA._embedded.cast[0].person.name)).toBeVisible()
      })
   })
})
