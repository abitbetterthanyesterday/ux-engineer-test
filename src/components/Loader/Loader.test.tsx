import { render, screen } from '@testing-library/react'
import { Loader, Props } from './Loader'

describe('components/loader', () => {
   const DEFAULT_CHILDREN_TEXT = 'Hello World'
   const defaultProps: Props = {
      isLoading: false,
      children: <div>{DEFAULT_CHILDREN_TEXT}</div>
   }
   it('renders a loading message when loading', () => {
      // Arrange
      render(<Loader {...{ ...defaultProps, isLoading: true }} />)

      // Assert
      expect(screen.getByText(/Loading/i)).toBeInTheDocument()
      expect(screen.queryByText(DEFAULT_CHILDREN_TEXT)).toBeNull()
   })

   it('renders the children when not loading', () => {
      // Arrange
      render(<Loader {...defaultProps} />)

      // Assert
      expect(screen.getByText(DEFAULT_CHILDREN_TEXT)).toBeInTheDocument()
      expect(screen.queryByText(/loading/i)).toBeNull()
   })
})
