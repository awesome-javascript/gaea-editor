import * as React from 'react';
import * as typings from './page.type';
import './page.scss';
export default class Page extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    componentWillMount(): void;
    getSectionContainerRef(ref: React.ReactInstance): void;
    render(): JSX.Element;
}
