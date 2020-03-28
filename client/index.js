import '../lib/routes.js';
import './layouts/HomeLayout.html'
import './layouts/MainLayout.html'
import {Recipes} from '../collections/Recipes'
import './recipes/recipes.html'
import './recipes/NewRecipe.html'


const Collections  = ()=> {return {Recipes}}

Template.registerHelper('Collections',Collections)
