import {DefaultPage, TestPage1, TestPage2} from "./index";

export default (requireAuth) => ( {
    path: '',
    name: 'home',
    displayName: "Home",
    presentOnNav: true,

    childRoutes: [
        {path: 'default-page', component: DefaultPage, isIndex: true, onEnter: requireAuth},
        {path: 'test-page-1', component: TestPage1},
        {path: 'test-page-2', component: TestPage2, onEnter: requireAuth},
    ],
});
