import React from 'react';
import ReactDOM from 'react-dom'
import {App} from '../imports/ui/App';

FlowRouter.route('/',{
    name:'home',
    action(){
        BlazeLayout.render('HomeLayout');
    }
})

FlowRouter.route('/recipe-book',{
    name:'recipe-book',
    action(){
        BlazeLayout.render('MainLayout', {main1:'Recipes'});
    }
})

FlowRouter.route('/hello',{
    name:'home',
    action(){
        BlazeLayout.render('Test');
        //khi render dc template thi render react component vo trong
        Template.Test.onRendered(()=>{
            ReactDOM.render(<App/>, document.getElementById('react-target'))
        })
    }
})
// how to import blaze template into react
//https://forums.meteor.com/t/best-way-to-import-blaze-templates-into-react/20288/3
