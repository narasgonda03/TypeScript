// 21 - Module System & Namespaces
// Use import/export to organize large projects

// ============== EXPORTING ==============

// 1. Named exports
export const API_URL = "https://api.example.com";
export const MAX_RETRIES = 3;

// 2. Named function export
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

// 3. Named class export
export class Logger {
  log(message: string): void {
    console.log(`[LOG] ${message}`);
  }

  error(message: string): void {
    console.log(`[ERROR] ${message}`);
  }
}

// 4. Named interface export
export interface User {
  id: number;
  name: string;
  email: string;
}

// 5. Named type export
export type Status = "pending" | "success" | "error";

// 6. Named enum export
export enum Role {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest"
}

// 7. Default export (one per module)
export default function fetchData(url: string): Promise<any> {
  return fetch(url).then((res) => res.json());
}

// 8. Export as - rename during export
function internalHelper(): string {
  return "helper";
}
export { internalHelper as helper };

// 9. Re-export from another module
// export { User, Role } from "./types";
// export * from "./utilities";

// ============== IMPORTING ==============

// 10. Default import
// import fetchData from "./module";

// 11. Named imports
// import { greet, Logger } from "./module";

// 12. Rename import
// import { greet as sayHello } from "./module";

// 13. Namespace import - import all exports
// import * as module from "./module";
// Usage: module.greet("John"), new module.Logger()

// 14. Import specific items
// import { greet, Logger, User } from "./module";

// 15. Mixed imports
// import fetchData, { greet, Logger } from "./module";

// ============== NAMESPACES ==============

// 16. Define namespace
namespace Utilities {
  export function formatDate(date: Date): string {
    return date.toISOString().split("T")[0];
  }

  export function formatTime(date: Date): string {
    return date.toTimeString().split(" ")[0];
  }

  export const VERSION = "1.0.0";
}

// Use namespace: Utilities.formatDate(new Date())

// 17. Nested namespaces
namespace Application {
  export namespace Core {
    export class Engine {
      start(): void {
        console.log("Engine started");
      }
    }
  }

  export namespace UI {
    export class Component {
      render(): void {
        console.log("Component rendered");
      }
    }
  }
}

// Use: new Application.Core.Engine(), new Application.UI.Component()

// 18. Namespace with interfaces
namespace API {
  export interface Request {
    method: "GET" | "POST" | "PUT" | "DELETE";
    url: string;
    headers?: Record<string, string>;
    body?: any;
  }

  export interface Response {
    status: number;
    data: any;
    error?: string;
  }

  export function makeRequest(req: Request): Promise<Response> {
    return Promise.resolve({
      status: 200,
      data: { message: "Success" }
    });
  }
}

// 19. Module augmentation (extending external modules)
declare global {
  interface String {
    capitalize(): string;
  }
}

String.prototype.capitalize = function (): string {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Usage: "hello".capitalize() returns "Hello"

// 20. Barrel exports (index pattern)
// Create an index.ts that re-exports multiple modules:
// export { User, Role } from "./types";
// export { Logger } from "./logger";
// export { greet, fetchData } from "./utils";
// Then: import { User, Logger, greet } from "./myModule"

// ============== PRACTICAL EXAMPLES ==============

// Example module structure
namespace FileSystem {
  export interface File {
    name: string;
    size: number;
    type: string;
  }

  export interface Directory {
    name: string;
    files: File[];
    subdirectories: Directory[];
  }

  export function readFile(path: string): Promise<File> {
    return Promise.resolve({ name: "file.txt", size: 100, type: "text" });
  }

  export function listDirectory(path: string): Promise<Directory> {
    return Promise.resolve({
      name: "root",
      files: [],
      subdirectories: []
    });
  }
}

// Example: Module with public and private members
namespace DataStore {
  // Private variable (not exported)
  let cache: Map<string, any> = new Map();

  // Public function to access private cache
  export function get(key: string): any {
    return cache.get(key);
  }

  export function set(key: string, value: any): void {
    cache.set(key, value);
  }

  export function clear(): void {
    cache.clear();
  }
}

// Example: Module with configuration
namespace Config {
  export interface Settings {
    debug: boolean;
    timeout: number;
    maxRetries: number;
  }

  export const defaultSettings: Settings = {
    debug: false,
    timeout: 5000,
    maxRetries: 3
  };

  let currentSettings = { ...defaultSettings };

  export function getSettings(): Settings {
    return { ...currentSettings };
  }

  export function updateSettings(partial: Partial<Settings>): void {
    currentSettings = { ...currentSettings, ...partial };
  }
}

console.log("Module System & Namespaces Examples Loaded");
