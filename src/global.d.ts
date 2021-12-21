declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}

declare var google: any; 


export declare global {
    interface Window {
      // add you custom properties and methods
      initMap: () => void;
      YT:(videoID: string, options?: {}) => Observable<YtResponse>
    }
  }

// js doc
/** @type {typeof google} */
var google

var document: typeof any;

var window: typeof any;
