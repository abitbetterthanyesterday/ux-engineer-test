import { Loader, Props } from './Loader'
import { render, screen } from '@testing-library/react'

describe('components/loader', () => {
   const DEFAULT_CHILDREN_TEXT = 'Hello World'
   const defaultProps: Props = {
      isLoading: false,
      children: <div>{DEFAULT_CHILDREN_TEXT}</div>
   }
   it('renders a loading message when loading', () => {
      render(<Loader {...{ ...defaultProps, isLoading: true }} />)
      expect(screen.getByText(/Loading/i)).toBeInTheDocument()
      expect(screen.queryByText(DEFAULT_CHILDREN_TEXT)).toBeNull()
   })

   it('renders the children when not loading', () => {
      render(<Loader {...defaultProps} />)
      expect(screen.getByText(DEFAULT_CHILDREN_TEXT)).toBeInTheDocument()
      expect(screen.queryByText(/loading/i)).toBeNull()
   })
})
