# Atomic Design Styleguide based on grunt sass

The idea of this project is generate a Styleguide following the Atomic Design manifest, with a mobile first approach.

- Node with Express JS
- Grunt (as task manager)
- Handlebars (as template engine)
- Grunt Sass (to compile sass structure into one css file)

<small>to run this WIP project you need to:</small><br/>
'npm install' to get the node_modules packages,<br/>
'bower install' if you want to add Bourbon mixins and Neat.

Then, you can use the command 'grunt', this will generate the .css and run the server

####Atomic Design Structure

_reset<br/>
_variables<br/><br/>

Atoms<br/>
  _buttons<br/>
  _form-elements<br/>
  _typography<br/>
  _icons<br/><br/>

Molecules<br/>
Organisms<br/>
Templates<br/>
Pages<br/>

