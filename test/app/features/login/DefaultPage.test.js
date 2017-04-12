import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import {DefaultPage} from "features/login/DefaultPage";

describe('login/DefaultPage', () => {
    it('renders node with correct class name', () => {
        const pageProps = {
            login: {},
            actions: {},
        };
        const renderedComponent = shallow(
            <DefaultPage {...pageProps} />
        );

        expect(
            renderedComponent.find('.login-default-page').node
        ).to.exist;
    });
});
