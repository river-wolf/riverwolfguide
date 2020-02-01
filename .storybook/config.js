import { configure, setAddon } from "@storybook/react"
import JSXAddon from 'storybook-addon-jsx'
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
 
addDecorator(withInfo); 

setAddon(JSXAddon)

const req = require.context('../src/', true,  /.stories.js$/)

function loadStories() {
    require('./welcomeStory')

    req.keys().forEach(file => req(file))
}

configure(loadStories, module)