import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Progress from './progress'

describe('test Progress component',()=>{
    it('should render the correct show showText', () => {
        const wrapper = render(<Progress percent={20} showText></Progress>)
        const element = wrapper.getByText('20%') as HTMLSpanElement
        expect(element).toBeInTheDocument()
    })
})