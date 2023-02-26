import { screen, render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Home from '../pages'

describe('global', () => {
  it('Should render minimal app', () => {
    render(<Home />)
    expect(screen.getByText('Hello world!')).toBeInTheDocument()
  })
})