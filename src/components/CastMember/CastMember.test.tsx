import { CastMember, Props } from './CastMember'
import { render, screen } from '@testing-library/react'
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
      const castMember = defaultProps.member
      render(<CastMember {...defaultProps} />)
      expect(screen.getByRole('img')).toHaveAttribute('src', castMember.person.image.medium)
      expect(screen.getByText(castMember.person.name)).toBeInTheDocument()
      expect(screen.getByTestId('cast-name')).toHaveTextContent(castMember.character.name)
   })
})
