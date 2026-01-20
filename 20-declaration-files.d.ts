// 20 - Declaration Files (.d.ts)
// Use TypeScript with third-party libraries
// This file defines type declarations for external libraries or JavaScript code

// 1. Basic type declarations for a library
declare const lodash: {
  map: <T, R>(array: T[], callback: (item: T) => R) => R[];
  filter: <T>(array: T[], predicate: (item: T) => boolean) => T[];
  find: <T>(array: T[], predicate: (item: T) => boolean) => T | undefined;
};

// 2. Function declarations
declare function jQuery(selector: string): jQuery.JQuery;
declare namespace jQuery {
  interface JQuery {
    html(): string;
    html(value: string): JQuery;
    text(): string;
    text(value: string): JQuery;
    click(handler: (this: Element, event: Event) => void): JQuery;
  }
}

// 3. Class declarations
declare class MyLibrary {
  constructor(options: MyLibrary.Options);
  init(): void;
  destroy(): void;
  on(event: string, handler: (data: any) => void): void;
  off(event: string): void;
}

declare namespace MyLibrary {
  interface Options {
    debug?: boolean;
    timeout?: number;
    retries?: number;
  }

  interface EventMap {
    ready: void;
    error: Error;
    complete: { result: string };
  }
}

// 4. Module declarations
declare module "@custom/api" {
  export function get<T>(url: string): Promise<T>;
  export function post<T>(url: string, data: any): Promise<T>;
  export function put<T>(url: string, data: any): Promise<T>;
  export function delete_(url: string): Promise<void>;
}

// 5. Ambient module declarations for non-JS files
declare module "*.svg" {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.json" {
  const content: Record<string, any>;
  export default content;
}

declare module "*.css" {
  const styles: Record<string, string>;
  export default styles;
}

// 6. Global declarations
declare global {
  interface Window {
    myAppConfig: {
      apiUrl: string;
      environment: "dev" | "prod";
      features: string[];
    };
  }

  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
      DATABASE_URL: string;
      NODE_ENV: "development" | "production";
    }
  }
}

// 7. Generic type declarations
declare function createStore<T>(initialState: T): {
  getState: () => T;
  setState: (newState: Partial<T>) => void;
  subscribe: (listener: (state: T) => void) => () => void;
};

// 8. Overload declarations
declare function parseConfig(path: string): void;
declare function parseConfig(config: Record<string, any>): void;
declare function parseConfig(input: string | Record<string, any>): void;

// 9. Enum declarations
declare enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500
}

declare const HttpStatusCode: {
  readonly OK: 200;
  readonly CREATED: 201;
  readonly BAD_REQUEST: 400;
  readonly UNAUTHORIZED: 401;
  readonly NOT_FOUND: 404;
  readonly INTERNAL_ERROR: 500;
};

// 10. Type-only exports
export type { MyLibrary };
export type HttpStatus;

// 11. Namespace for organization
declare namespace DataProcessing {
  interface DataPoint {
    x: number;
    y: number;
    label?: string;
  }

  function process(data: DataPoint[]): DataPoint[];
  function analyze(data: DataPoint[]): {
    mean: number;
    median: number;
    stdDev: number;
  };

  namespace Advanced {
    function cluster(data: DataPoint[], k: number): DataPoint[][];
    function regression(data: DataPoint[]): (x: number) => number;
  }
}

// 12. Export declarations
export type HttpStatusCode;
export declare function initializeApp(config: MyLibrary.Options): Promise<void>;
