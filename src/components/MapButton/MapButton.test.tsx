import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MapButton from '.'

describe('MapButton', () => {
  it('renders the button with children text', () => {
    render(<MapButton>Click Me</MapButton>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('applies the default styles', () => {
    render(<MapButton>Styled Button</MapButton>)
    const button = screen.getByRole('button', { name: /styled button/i })
    expect(button).toHaveClass('rounded-pill')
    expect(button).toHaveClass('fw-bold')
  })

  it('applies custom className when provided', () => {
    render(<MapButton className="custom-class">Custom Button</MapButton>)
    const button = screen.getByRole('button', { name: /custom button/i })
    expect(button).toHaveClass('custom-class')
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<MapButton onClick={handleClick}>Clickable</MapButton>)
    const button = screen.getByRole('button', { name: /clickable/i })
    userEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('passes additional props to the button', () => {
    render(<MapButton disabled>Disabled Button</MapButton>)
    const button = screen.getByRole('button', { name: /disabled button/i })
    expect(button).toBeDisabled()
  })
})
