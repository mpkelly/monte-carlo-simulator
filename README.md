# An example project using Karma, Webpack 3 and Enzyme for React Testing

This project was based on the following blogpost:
Getting Started with React, Typescript and Webpack Medium [blog post](https://medium.com/@fay_jai/getting-started-with-reactjs-typescript-and-webpack-95dcaa0ed33c#.cp7sr9ewx)

The key differences are that it uses Enzyme and that it has been updated to work with Webpack 3 and the latest React packages as of August 2017. 

### Notes

This is quite a heavyweight setup and Karma's dev config leaves a lot to be desired. However, if you are using webcomponents or need a real browser environment then this is your best option, so far as I can tell. I needed this for a project that was using Onsen UI which depends on web compoents and custom elements v1. If you don't need to support custom elements (most React libraries don't) then stick with Enzyme + jsDom which is much, much simpler to configure. jsDom simulates most of what a real browser does so that you can run your tests quickly using Node. 
