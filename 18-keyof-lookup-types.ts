// 18 - Keyof & Lookup Types
// Access object keys dynamically

// Original type
type User = {
  name: string;
  age: number;
  email: string;
  isAdmin: boolean;
};

// keyof - Get all keys as a union type
type UserKeys = keyof User; // "name" | "age" | "email" | "isAdmin"

// Example: Function that accepts user keys
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = {
  name: "John",
  age: 30,
  email: "john@example.com",
  isAdmin: true
};

const name = getProperty(user, "name"); // Type: string
const age = getProperty(user, "age"); // Type: number
const isAdmin = getProperty(user, "isAdmin"); // Type: boolean

// Lookup Type / Indexed Access - Access property value type
type UserNameType = User["name"]; // string
type UserAgeType = User["age"]; // number
type UserEmailType = User["email"]; // string

// Multiple Property Lookup
type UserNameOrAge = User["name" | "age"]; // string | number

// All Property Values
type UserValueTypes = User[keyof User]; // string | number | boolean

// Nested Lookup
type Address = {
  street: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

type StreetType = Address["street"]; // string
type LatType = Address["coordinates"]["lat"]; // number

// keyof with generics
function updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

updateProperty(user, "name", "Jane"); // Valid
updateProperty(user, "age", 25); // Valid
// updateProperty(user, "age", "invalid"); // Error: string is not number

// Type-safe property picker
type PropertyGetter<T, K extends keyof T> = {
  key: K;
  get: () => T[K];
};

const nameGetter: PropertyGetter<User, "name"> = {
  key: "name",
  get: () => user.name
};

const ageGetter: PropertyGetter<User, "age"> = {
  key: "age",
  get: () => user.age
};

// keyof array access
const keys: (keyof User)[] = ["name", "age", "email", "isAdmin"];

// Iterate through keys
keys.forEach((key) => {
  console.log(key, user[key]);
});

// Type-safe form data builder
type FormData<T> = {
  [K in keyof T]: {
    field: K;
    value: T[K];
    validate: (v: T[K]) => boolean;
  }[];
};

type UserFormData = FormData<User>;
const userForm: UserFormData = {
  name: [
    {
      field: "name",
      value: "John",
      validate: (v) => v.length > 0
    }
  ],
  age: [
    {
      field: "age",
      value: 30,
      validate: (v) => v >= 18
    }
  ],
  email: [
    {
      field: "email",
      value: "john@example.com",
      validate: (v) => v.includes("@")
    }
  ],
  isAdmin: [
    {
      field: "isAdmin",
      value: true,
      validate: (v) => typeof v === "boolean"
    }
  ]
};

console.log("Keyof & Lookup Types Examples Loaded");
