# System Architecture Diagram

```
+---------------------+
|   ComputerModule    |
+---------------------+
         |
         v
+---------------------+
| ComputerController  | <--- HTTP Request (/computer/)
+---------------------+
         |
         v
+---------------------+      +---------------------+
|    CpuService       |      |    DiskService      |
+---------------------+      +---------------------+
         |                          |
         v                          v
   [compute(1,2)]            [getData()]
         |                          |
         +-----------+--------------+
                     v
           Response to Client
```

**Explanation:**
- `ComputerModule` imports `CpuModule` and `DiskModule`.
- `ComputerController` handles HTTP requests to `/computer/`.
- When a request is received, it calls methods from `CpuService` and `DiskService`.
- The results are combined and sent back as the response.

---

## Real-World Example: Online Bookstore (Mock)

```
+---------------------+
|     StoreModule     |
+---------------------+
         |
         v
+---------------------+
|   StoreController   | <--- HTTP Request (/store/)
+---------------------+
         |
         v
+---------------------+      +---------------------+
|    BookService      |      |   OrderService      |
+---------------------+      +---------------------+
         |                          |
         v                          v
 [getBookDetails()]         [placeOrder()]
         |                          |
         +-----------+--------------+
                     v
           Response to Client
```

**Explanation:**
- `StoreModule` imports `BookModule` and `OrderModule`.
- `StoreController` handles HTTP requests to `/store/`.
- When a request is received, it calls methods from `BookService` and `OrderService`.
- The results are combined and sent back as the response.

---

## NestJS Roles Explained

**1. Service**
- Responsible for business logic and data access (including DB actions).
- Example: `CpuService` or `DiskService` could fetch data from a database or perform computations.

**2. Controller**
- Responsible for routing and handling HTTP requests.
- Example: `ComputerController` listens for `/computer` requests and calls service methods.

**3. Module**
- Responsible for organizing and grouping related controllers and providers (services).
- Example: `ComputerModule` bundles `ComputerController`, `CpuService`, and `DiskService`.

**Summary:**
- **Service:** Handles DB actions and business logic.
- **Controller:** Handles routing and HTTP requests.
- **Module:** Organizes controllers and services into logical units.

