
# 🌱 Online Nursery Website - Frontend 🌱

## Project Overview
The frontend of the online nursery website is built using **React** and **Redux** to provide a seamless and dynamic user experience. Users can browse, filter, search, and manage products, add items to their shopping cart, and proceed to checkout. The UI is designed to be modern and responsive using **Tailwind CSS** and **Ant Design**.

---

## 🌟 Features

### 1. Product Browsing 🌿
- **Search & Filter**: Users can search for products and filter results based on category, price range, and other parameters.
- **Sorting**: Products can be sorted by relevance, price, or name.
- **Pagination**: The product list is paginated for easier navigation.
- **Product Details**: Each product has a dedicated details page that includes comprehensive information.

### 2. Shopping Cart 🛒
- **Add to Cart**: Users can add products to their cart. If the product is out of stock, an error message is shown.
- **Quantity Management**: Items in the cart have quantity management features. If the same product is added again, the quantity is updated, respecting stock limits.
- **Checkout**: Users can proceed from the cart to the checkout page, which gathers customer information before finalizing the order.

### 3. Product and Category Management 🛠️
- **Admin Interface**: Admins can manage products and categories via the frontend. CRUD operations are supported using forms and modals, with real-time UI updates.

### 4. Checkout and Payment 💳
- **Order Creation**: Orders are created on the frontend and passed to the backend with customer and product details.
- **Payment Integration**: Stripe.js is integrated for secure online payments. Customers can also choose **Cash on Delivery** (COD) as a payment option.

### 5. Product and Category Management 🛠️

- **Admin Interface**: Manage products and categories using a table interface. The table displays product image, title, price, category, and action buttons.
  
- **Actions**: Update and delete products via modals and confirmation dialogs. Add new products through a detailed form with real-time updates using optimistic UI.

- **Product Form**: The form includes fields for:
  - Category
  - Title
  - Price
  - Quantity
  - Description
  - Rating
  - Image (supports ImgBB upload or direct image URL)


### 6. UI/UX 🎨
- **Responsive Design**: Designed with **Tailwind CSS** for a fully responsive experience across devices.
- **Ant Design**: Used for a consistent and modern look with ready-made UI components.

---

## 📋 Key Components

- **Navbar**: Navigation bar with links to various sections (home, products, cart, etc.).
- **Hero Section**: A section on the landing page highlighting key features or promotions.
- **Product Search, Filter & Pagination**: Tools for users to browse and find products.
- **Product Cards**: Products are displayed in a card format with image, title, price, and "Add to Cart" button.
- **Product Details Page**: Detailed view of a selected product, showing more information such as description, price, and ratings.
- **Shopping Cart**: Shows products added to the cart, allows for quantity adjustment, and provides a button to proceed to checkout.
- **Image Gallery**: Mosaic view of product images.

---

## 🎁 Bonus Features

- **Debounced API Calls**: Implemented in the search functionality to reduce unnecessary API requests.
- **Page Refresh Warning**: Users receive a warning message if they attempt to refresh the page with items in their cart, preventing data loss.

---

## 🛠️ Technologies Used

- **React**: Frontend library for building interactive user interfaces.
- **Redux**: For managing the state of products, categories, cart, and other actions.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Ant Design**: For consistent, pre-built UI components.
- **DaisyUI**: For consistent, pre-built UI components.
- **React-hook-form**: For form  state management.
- **Sonner**: For smooth response.
- **Redux Toolkit**: For making API requests to the backend.
- **Stripe.js**: Payment gateway for online transactions.

---

## 🚀 Getting Started

### Prerequisites:
- Install [Node.js](https://nodejs.org/).

### Installation:

1. Clone the repository:

    ```bash
    git clone https://github.com/rabby-hasan-dev/online-nursery-website-client
    ```

2. Navigate to the frontend directory and install dependencies:

    ```bash
    cd online-nursery-website-client
    npm install
    ```
2. .env file configuration:

    ```
    VITE_IMAGE_UPLOAD_TOKEN =
    VITE_SERVER_URL =
    ```

### Running the Project:

Start the frontend development server:

```bash
npm run dev
