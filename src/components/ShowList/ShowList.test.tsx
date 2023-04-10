import * as hooks from '@/hooks'

import { Props, ShowList } from './ShowList'
import { render, screen } from '@testing-library/react'

import { AppProvider } from '@/contexts/AppContext'
import { MOCK_SHOWS } from '@/tests/fixtures'
import { useSearchShowMock } from '@/hooks/useSearchShow/useSearchShow.mock'
import userEvent from '@testing-library/user-event'

jest.mock('../../hooks', () => {
   return {
      __esModule: true,
      ...jest.requireActual('../../hooks')
   }
})

describe('components/ShowList', () => {
   const defaultProps: Props = {
      shows: MOCK_SHOWS
   }
   it('renders a list of shows', () => {
      render(<ShowList {...defaultProps} />)
      const listItems = screen.getAllByRole('listitem')
      let itemIndex = 0
      for (const show of MOCK_SHOWS) {
         expect(listItems[itemIndex]).toHaveTextContent(show.name)
         itemIndex++
      }
   })

   it('trigger the onSelectShow callback when a show is clicked', async () => {
      const onSelectShowSpy = jest.fn()
      jest.spyOn(hooks, 'useSearchShow').mockReturnValueOnce({
         ...useSearchShowMock,
         shows: defaultProps.shows,
         onSelectShow: onSelectShowSpy
      })
      const user = userEvent.setup()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      render(<ShowList {...defaultProps} />, { wrapper: AppProvider })
      const listItems = screen.getAllByRole('listitem')
      await user.click(listItems[0])
      expect(onSelectShowSpy).toHaveBeenLastCalledWith(defaultProps.shows[0])
   })
})
