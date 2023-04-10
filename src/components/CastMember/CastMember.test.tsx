import { render, screen } from '@testing-library/react'
import { CastMember, Props } from './CastMember'
describe('components/CastMember', () => {
   const defaultProps: Props = {
      member: {
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
   }
   it('renders the cast member details', () => {
      // Arrange
      const castMember = defaultProps.member
      render(<CastMember {...defaultProps} />)

      // Assert
      expect(screen.getByRole('img')).toHaveAttribute('src', castMember.person.image.medium)
      expect(screen.getByText(castMember.person.name)).toBeInTheDocument()
      expect(screen.getByTestId('cast-name')).toHaveTextContent(castMember.character.name)
   })
})
