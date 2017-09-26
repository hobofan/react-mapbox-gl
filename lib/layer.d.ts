/// <reference types="mapbox-gl" />
/// <reference types="react" />
import * as React from 'react';
import * as MapboxGL from 'mapbox-gl';
import { Sources } from './util/types';
export declare type Paint = any;
export declare type Layout = any;
export interface ImageOptions {
    width?: number;
    height?: number;
    pixelRatio?: number;
}
export declare type ImageDefinition = [string, HTMLImageElement];
export declare type ImageDefinitionWithOptions = [string, HTMLImageElement, ImageOptions];
export interface Props {
    id?: string;
    type?: 'symbol' | 'line' | 'fill' | 'circle' | 'raster';
    sourceId?: string;
    images?: ImageDefinition | ImageDefinition[] | ImageDefinitionWithOptions | ImageDefinitionWithOptions[];
    before?: string;
    sourceOptions?: Sources;
    paint?: Paint;
    layout?: Layout;
    layerOptions?: Partial<MapboxGL.Layer>;
    children?: JSX.Element | JSX.Element[];
}
export interface Context {
    map: MapboxGL.Map;
}
export default class Layer extends React.Component<Props, {}> {
    context: Context;
    static contextTypes: {
        map: any;
    };
    static defaultProps: {
        type: "symbol";
        layout: {};
        paint: {};
    };
    private hover;
    private isDragging;
    private draggedChildren;
    private id;
    private source;
    private geometry;
    private makeFeature;
    private onClick;
    private getChildren;
    private isHoverDraggable;
    private onMouseEnter;
    private onMouseLeave;
    private onMouseDown;
    private onDragMove;
    private onDragUp;
    private initialize;
    private onStyleDataChange;
    componentWillMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(props: Props): void;
    render(): null;
}
