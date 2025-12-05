# ♘ Chess Grandmasters Wiki — Code Challenge

This project implements a Chess Grandmasters Wiki using the Chess.com public API.  
It is built with a server-first philosophy using modern React and Next.js features.

The solution demonstrates:

- clean architectural thinking  
- advanced handling of external APIs with rate limits  
- SSR pagination with smooth skeleton transitions  
- performance-driven data strategy (caching + batching)  
- modular and scalable code design  

---

## 🚀 Tech Stack

- Next.js 16 (App Router, Server Components)
- React 19
- TypeScript
- TailwindCSS
- Zod (config validation)
- Custom LRU Cache (server-side)
- Concurrency-limited batching for API calls

---

# 🏗 Architecture & Technical Decisions

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

## 2️⃣ Path-Based Pagination With Automatic Skeleton Loading

Instead of using query parameters, pagination uses URL segments so that every page change triggers a segment transition.  
This enables a loading component that appears on every navigation without requiring client JavaScript.

Advantages:

- smooth UX without hydration cost  
- no useTransition or client components needed  
- clean separation of concerns  
- zero waterfall on navigation  

---

## 3️⃣ Performance Strategy: LRU Cache + Concurrency Limiting

The Chess.com API rate-limits aggressive parallel requests and often returns 429 errors.

To avoid this:

### ✔ Custom LRU Cache
- configurable size  
- configurable time-to-live  
- stores GM profile responses  
- prevents repeated expensive calls  

### ✔ Concurrency-limited batching
Large batches of profile fetches are processed with a worker-pool strategy to avoid overloading the Chess.com API.

### ✔ Retry/backoff handling for 429
The API integration layer gracefully retries failing requests with controlled backoff.

Together, these techniques stabilize performance and reduce API pressure.

---

## 4️⃣ Robust Configuration System

A custom config layer validates environment values, applies safe defaults, and guarantees stability.

Invalid values never crash the server; instead, fallback defaults are automatically used.

Example constraints:

- page size must be divisible by 3 (to match the grid layout)  
- cache capacity must be within a safe range  
- TTL must stay within responsible bounds  

---

## 5️⃣ Architecture Overview (FSD-Inspired)

The project follows a modular structure inspired by Feature-Sliced Design.  
Key layers include:

- entities: domain logic, API mappings, business rules  
- shared: utilities, global components, configuration  
- features: optional isolated behaviors  
- pages and layouts handled by the framework routing system  

This separation improves scalability, testability, and maintainability.

---

## 6️⃣ Skeleton Loading Without Client Components

Each paginated page has its own loading component.  
Next.js automatically displays it whenever the corresponding segment is resolving.

This enables:

- lightweight transitions  
- full SSR rendering  
- predictable UX  
- zero client-side overhead  

---

## 7️⃣ Navigation Strategy (“Go Back”)

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

## 8️⃣ Error Handling

- retry strategy for API rate-limit errors  
- safe error boundaries on profiles  
- fallback UI for data failures  
- validated configs to avoid runtime crashes  

---

# 🧩 Architectural Diagram

