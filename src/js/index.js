import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import Page from './component/page';
import 'antd/dist/antd.css';
import '@styles/custom.min.css'
import 'ant-design-pro/dist/ant-design-pro.css';
import {BrowserRouter, Route} from 'react-router-dom'
import NotFound from "@/js/component/common/error/404";
import {Switch} from "react-router";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Page}/>
                <Route exact path='/profile' component={Page}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('container')
);