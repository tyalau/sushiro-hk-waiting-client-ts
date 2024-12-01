import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer component', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2000-01-01T00:00:00Z'))
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('renders the disclaimer, copyright, and rights reserved correctly', () => {
    render(<Footer />)

    // Check if the disclaimer link is rendered
    expect(screen.getByText('©2000 香港壽司郎等侯組數地圖')).toBeInTheDocument()
    const disclaimerLink = screen.getByText('免責聲明')
    expect(disclaimerLink).toBeInTheDocument()

    // Check if the 'All rights reserved' text is rendered
    expect(screen.getByText('All rights reserved.')).toBeInTheDocument()
  })
})
