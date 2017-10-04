// Add a style tag to the document's head for the map's styling
import injectCSS from './util/inject-css';
import Map from './map';
import BaseLayer, { LayerCommonProps, Props as LayerProps } from './layer';
import layerMouseTouchEvents, { EnhancedLayerProps } from './layer-events-hoc';
import GeoJSONLayer from './geojson-layer';
import Feature, { Props } from './feature';
import ZoomControl from './zoom-control';
import Popup from './popup';
import ScaleControl from './scale-control';
import Marker from './marker';
import Source from './source';
import Cluster from './cluster';
import RotationControl from './rotation-control';
import { Context } from './util/types';
import * as PropTypes from 'prop-types';

// TODO: Remove in next version with breaking changes
if (!(typeof (window as any).MAPBOX_SKIP_CSS_INJECTION !== 'undefined')
   || (window as any).MAPBOX_SKIP_CSS_INJECTION === false) {
    injectCSS(window);
}

// Hack to get around import issue from external lib, see: https://github.com/Microsoft/TypeScript/issues/9944
// TODO: Remove this hack once the above issue is fixed
export type FeatureProps = Props;
export type Context = Context;
export type LayerCommonProps = LayerCommonProps;
export type LayerProps = LayerProps;
export type EnhancedLayerProps = EnhancedLayerProps;
export const PropTypesAlias = PropTypes;

const Layer = layerMouseTouchEvents(BaseLayer);

export {
  Feature,
  Layer,
  GeoJSONLayer,
  Map,
  Popup,
  ZoomControl,
  ScaleControl,
  Marker,
  Source,
  Cluster,
  RotationControl
};

export default Map;
