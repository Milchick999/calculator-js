* PROJECT: CALCULATOR

The project is a simple web-calculator created by using JavaScript, HTML, CSS, as well as the Webpack module builder.

* TASK

https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f



* HOW TO RUN THE APP

Follow the steps:

 1. Install dependencies;
 Install all necessary project dependencies defined in `package.json`:

        npm install

 2. Start development server;
 Use the start script to launch the Webpack development server with hot reloading:

        npm run start

 3. Check code quality;
 Verify the code quality for required standards using ESLint:
    
        npm run lint

 4. Build for production;
 Create the final optimized production bundle in the /dist folder:
         
        npm run build





* PROJECT STRUCTURE

Calculator project has following files & folders structure:


>src/                                 (Source files)
      > assets/                      (Static resources)
      > js/                         (JavaScript modules)
                 >`math.js`          (Math logic)
                 >`theme.js`         (Theme & DOM logic)
      >styles/                      (Style files)
                 >`main,css`         (Core styles)
        >`index.html`                 (Main entry point)
        >`index.js`                   (Main controller)
        
>`.eslintrc.js`                       (ESLint configuration) 
>`package.json`                       (Dependencies, scripts)
>`webpack.config.js`                  (Build configuration)


