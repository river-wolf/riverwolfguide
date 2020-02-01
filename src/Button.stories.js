import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './Button'
import { color } from '@storybook/addon-knobs'

storiesOf('Button', module)
    .addWithJSX('with background', () => (
        <Button bg="palegoldenrod">Hello world</Button>
    ))
    .addWithJSX('with background 2', () => (
        <Button bg={color('bg', 'green')}>Hello world</Button>
    ))