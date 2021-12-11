/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React, { PureComponent} from 'react';
import styled from "tachyons-components";
import ReactLoading from "react-loading";

export const Section = styled('div')`
flex flex-wrap content-center justify-center w-100 h-100`;

export const Article = styled('div')`
w-25 ma2 h4 items-center justify-center flex flex-column flex-wrap`;

export const Title = styled('h1') `
f4 f3-ns blue w-100 tc`;

class Loader extends PureComponent {
    render() {
        return (
            <Section>
                <Article>
                    <ReactLoading type='spinningBubbles' color="#000" />
                </Article>
            </Section>
        )
    } 
}

export default Loader;