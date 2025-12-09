# ♘ Chess Grandmasters Wiki — Amenitiz Code Challenge  

## Solution by Francesco Stallo

Although the brief didn’t demand production-ready code, I intentionally built the project so it could evolve into a production deployment: 
everything is driven by explicit env vars, typed configuration, and a clear separation of concerns, making it easy to containerize or ship later.  

For the proposed code challenge I approached the problem from a server-first perspective: I started by modelling the data and the core use cases (listing, profile, live clock). 
Then I designed the fetch/cache pipeline to stay within Chess.com’s rate limits (batching, concurrency control, retries). 
Finally, I focused on the interface—building modular server components, wiring Suspense skeletons, and keeping navigation predictable. Each section below details these choices and how they work together.


---

##  Tech Stack

- Next.js 16 (App Router, Server Components)
- React 19
- TypeScript
- TailwindCSS
- Zod (config validation)
- Custom LRU Cache (server-side)
- Concurrency-limited batching for API calls

> Note: I’m following a lightweight take on [Feature-Sliced Design](https://feature-sliced.design/): the project still separates entities, features, widgets, and shared utilities, but I’ve tailored the hierarchy to fit the scope and pace of this code challenge.

---

#  Architecture & Technical Decisions

##  Server-First Data Fetching

All data is fetched fully server-side:

- no client-side data fetching  
- no hooks like useEffect  
- no client-side data libraries  

Benefits:

- SEO-friendly  
- predictable performance  
- smaller client bundle  
- streaming SSR  

---

##  Query Pagination With Suspense Skeletons

Pagination relies on the `page` query parameter (for example `/grandmaster?page=4`).  
Each navigation re-renders the grid inside a keyed `<Suspense>` boundary which briefly shows a skeleton while the new data resolves server-side.

Advantages:

- smooth UX even without client-side pagination logic  
- no `useTransition` or client fetches  
- predictable refresh on every navigation  
- retains full SSR/streaming benefits  

---

##  Performance Strategy: LRU Cache + Concurrency Limiting

The Chess.com API rate-limits aggressive parallel requests and often returns 429 errors.

To avoid this:

###  Custom LRU Cache
- configurable size  
- configurable time-to-live  
- stores GM profile responses  
- prevents repeated expensive calls  

###  Concurrency-limited batching
Large batches of profile fetches are processed with a worker-pool strategy to avoid overloading the Chess.com API.

###  Retry/backoff handling for 429
The API integration layer gracefully retries failing requests with controlled backoff.

Together, these techniques stabilize performance and reduce API pressure.

---

##  Robust Configuration System

A custom config layer validates environment values, applies safe defaults, and guarantees stability.

Invalid values never crash the server; instead, fallback defaults are automatically used.

Example constraints:

- page size must be divisible by 3 (to match the grid layout)  
- cache capacity must be within a safe range  
- TTL must stay within responsible bounds  

---

##  Architecture Overview (FSD-Inspired)

The project follows a modular structure inspired by Feature-Sliced Design.  
Key layers include:

- entities: domain logic, API mappings, business rules  
- shared: utilities, global components, configuration  
- features: optional isolated behaviors  
- pages and layouts handled by the framework routing system  

This separation improves scalability, testability, and maintainability.

---

##  Skeleton Loading Without Client Components

The grids are wrapped in `<Suspense>`; when the `page` query changes, React briefly shows the fallback while the server stream finishes.

This enables:

- lightweight transitions without client state  
- full SSR/streaming behavior  
- predictable UX  
- zero client-side loading hooks  

---

## Navigation Strategy (“Go Back”)

Browser history cannot be used server-side, so the list page passes a lightweight context reference through search parameters.

Example:

- entering a profile includes a `ref` value  
- profile layout reconstructs a stable and deterministic "Go Back" link  
- fallback to the first page when ref is missing  

This ensures consistent navigation even from:

- new tabs  
- shared links  
- bookmarks  
- external entry points  

---

## Error Handling

- retry strategy for API rate-limit errors  
- safe error boundaries on profiles  
- fallback UI for data failures  
- validated configs to avoid runtime crashes  

---


## Environment Variables

GM_PAGE_SIZE=99

GM_CACHE_CAPACITY=300

GM_CACHE_TTL_SECONDS=300

CHESS_API_BASE=https://api.chess.com/pub

# Security Note – CVE-2025-55182 (React2Shell)

Following the disclosure of CVE-2025-55182 (React2Shell), I performed a full dependency review to ensure that this project is not affected by the vulnerability.

Result: the application is not vulnerable.

## Technical details

The CVE affects only the following packages:

- react-server-dom-webpack
- react-server-dom-parcel
- react-server-dom-turbopack

in versions 19.0, 19.1.0, 19.1.1, and 19.2.0.

This project does not use any of these packages.


The installed React/Next.js versions are already patched:

- next@16.0.7
- react@19.2.1
- react-dom@19.2.1

As an additional verification step, I used Vercel’s official React2Shell detection tool:

[https://github.com/vercel-labs/fix-react2shell-next](https://github.com/vercel-labs/fix-react2shell-next)

The tool confirmed that no vulnerable RSC packages are present.

Some automated scanners may still report a false positive because they only detect “React 19 + Next.js”
without checking whether the vulnerable RSC packages are actually present.

##  Architectural Diagram


````
        ┌──────────────────────────┐
        │         Browser          │
        │   Navigates to a page    │
        └───────────────┬──────────┘
                        │
                Server Request
                        │
┌───────────────────────▼──────────────────────────┐
│             Application Router                   │
│   Resolves the matching route segment            │
│   Shows a loading state while awaiting data      │
└───────────────────────┬──────────────────────────┘
                        │
                        ▼
        ┌──────────────────────────┐
        │      Domain Logic        │
        │  Pagination, batching,   │
        │  mapping, validations    │
        └───────────────┬──────────┘
                        │
                        ▼
        ┌──────────────────────────┐
        │        LRU Cache         │
        │   Reuse recent results   │
        │   TTL-based invalidation │
        └───────────────┬──────────┘
                        │
                        ▼
        ┌──────────────────────────┐
        │   API Integration Layer  │
        │  Fetching from Chess API │
        │  Retry and backoff logic │
        └───────────────┬──────────┘
                        │
                        ▼
        ┌──────────────────────────┐
        │     Chess.com API        │
        └──────────────────────────┘
```

