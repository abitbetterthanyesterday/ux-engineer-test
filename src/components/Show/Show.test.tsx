import * as hooks from '../../hooks'

import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import { convertDateToHumanReadableFormat } from '../../utils'
import { Show } from './Show'

jest.mock('../../hooks', () => {
   return {
      __esModule: true,
      ...jest.requireActual('../../hooks')
   }
})

describe('components/Show', () => {
   const defaultProps = {
      selectedShow: {
         id: 1,
         name: 'Test Show',
         summary: 'Test Summary',
         image: {
            medium: 'test-medium.jpg',
            original: 'test-original.jpg'
         },
         premiered: '2021-01-01',
         _embedded: {
            cast: [
               {
                  person: {
                     name: 'Test Person',
                     image: {
                        medium: 'test-medium.jpg'
                     }
                  },
                  character: {
                     name: 'Test Character'
                  }
               }
            ]
         }
      }
   }

   const defaultUseSearchShow: ReturnType<typeof hooks.useSearchShow> = {
      query: '',
      isLoading: false,
      error: '',
      hasSearched: true,
      hasInitialSearched: true,
      shows: [],
      onQueryChange: jest.fn(),
      resetQuery: jest.fn(),
      onSearch: jest.fn(),
      onSelectShow: jest.fn(),
      unSelectShow: jest.fn(),
      reset: jest.fn(),
      selectedShow: defaultProps.selectedShow
   }

   it('renders the show details', () => {
      jest.spyOn(hooks, 'useSearchShow').mockReturnValue({
         ...defaultUseSearchShow
      })
      render(<Show />)

      const date = convertDateToHumanReadableFormat(defaultProps.selectedShow.premiered)
      const regexpDate = new RegExp(date, 'i')
      expect(screen.getByText(defaultProps.selectedShow.name)).toBeInTheDocument()
      expect(screen.getByText(regexpDate)).toBeInTheDocument()
      expect(
         screen.getByText(defaultProps.selectedShow!._embedded.cast[0].person.name)
      ).toBeInTheDocument()
   })
   it('triggers the onCancel callback when the back button is clicked', async () => {
      const unSelectShowSpy = jest.fn()

      jest.spyOn(hooks, 'useSearchShow').mockReturnValue({
         ...defaultUseSearchShow,
         unSelectShow: unSelectShowSpy
      })

      const user = userEvent.setup()
      render(<Show />)
      await user.click(screen.getByRole('button', { name: /back/i }))
      expect(unSelectShowSpy).toHaveBeenCalled()
   })
})
