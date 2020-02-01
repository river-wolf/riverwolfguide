import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './Button'
import { boolean, text } from '@storybook/addon-knobs'

storiesOf('Button', module)
    .addWithJSX('with background', () => (
        <Button bg="palegoldenrod">Hello world</Button>
    ))
    .addWithJSX('with background 2', () => (
        <Button disabled={boolean('disabled', false)}>
            {text('text', 'Hello world')}
        </Button>
    ))