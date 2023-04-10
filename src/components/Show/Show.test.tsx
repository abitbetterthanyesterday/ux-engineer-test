import { render, screen } from '@testing-library/react'

import { IShow } from '../../types/shared'
import { Show } from './Show'

describe('components/Show', () => {
   const defaultProps: { selectedShow: IShow } = {
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
   it('renders the show details', () => {
      render(<Show />)
      expect(screen.getByText(defaultProps.selectedShow.name)).toBeInTheDocument()
      expect(
         screen.getByText(`Premiered ${defaultProps.selectedShow!.premiered}`)
      ).toBeInTheDocument()
      expect(
         screen.getByText(defaultProps.selectedShow!._embedded.cast[0].person.name)
      ).toBeInTheDocument()
   })
   it('triggers the onCancel callback when the back button is clicked', () => {
      const onCancel = jest.fn()
      render(<Show />)
      screen.getByText('Back to list').click()
      expect(onCancel).toHaveBeenCalled()
   })
})
