# bakalo.li Web Client

This project is a web app frontend client for bakalo.li.

Implemented using [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

## Directory Structure
```
src
├── adapters                // External services communication
│   ├── dto                 // https://en.wikipedia.org/wiki/Data_transfer_object
│   ├── infrastuctures      // External services infrastructure e.g. Web Local Storage
│   └── repositories        // Data persistence e.g. REST API
├── domain                  // Business Logic
│   └── services            // Use case implementations
└── web                     // Presentation (framework specific)
    └── components          // React components
```

## How to Run

* Setup
  ```shell
  yarn
  ```
* Start Development Server
  ```shell
  yarn start
  ```
* Build
  ```shell
  yarn build
  ```