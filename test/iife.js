import React from 'react';
import { shallowRender } from 'skin-deep';
import expect from 'expect';

import IIFE from '../src/iife';

/* Test Constants */
const text = 'Secret text';

describe('IIFE component', () => {

    context('render', () => {
        it('creates a clone of the children with an added ref', () => {
            const component = shallowRender(
                <IIFE fn={function() {}}>
                    <div id="demo">{text}</div>
                </IIFE>
            ).getRenderOutput();
            expect(component.type).toEqual('div');
            expect(component.props.children).toEqual(text);
            expect(component.ref).toEqual('child');
        });
    });

    context('when mounted to the DOM', () => {
        it('calls the function it was provided', () => {
            const expectedFunction = expect.createSpy();
            const component = shallowRender(
                <IIFE fn={expectedFunction}>
                    <div id="demo">{text}</div>
                </IIFE>
            );
            component.getMountedInstance().componentDidMount();
            expect(expectedFunction).toHaveBeenCalled();
        });
    })

});
