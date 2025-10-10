import { LogsActions, ProductStatus, UserRole } from "./enums/generalEnums";

/**
 * Interface representing a system log entry
 */
export interface LOG_Interface {
    _id?: string;           // Optional unique identifier for the log
    title: string;          // Title or summary of the log entry
    action: LogsActions;    // Enum value indicating the action performed
    user_id: string;        // ID of the user who performed the action
    createdAt: Date;        // Timestamp when the log entry was created
}


/**
 * Represents a user in the system.
 */
export interface User_Interface {
    _id?: string; // Optional unique identifier (MongoDB ObjectID)
    email: string; // User's email address
    password: string; // User's hashed password
    name?: string; // User's first name (optional)
    last_name?: string; // User's last name (optional)
    phone_number?: string; // User's phone number (optional)
    profile_picture?: string; // URL of the user's profile picture (optional)
    liked_products?: string[]; // Array of product IDs the user has liked
    role: UserRole; // User's role (e.g., Admin, Agent, Customer)
    verified: boolean; // Indicates whether the user's account is verified
    orders?: string[]; // Array of order IDs associated with the user
    cart: {
        products: User_cart_Products_interface[]; // List of products in the user's cart
        totalFee: number; // Total price of all products in the cart
    };
    addresses: User_address_interface[]; // List of saved addresses
    createdAt: Date; // Date when the account was created
    updatedAt?: Date; // Date when the account was last updated (optional)
    resetPassword?: { // Password reset information (optional)
        token: string; // Password reset token
        expires: Date; // Token expiration date
    };
}

/**
 * Represents a single product in the user's cart.
 */
export interface User_cart_Products_interface {
    productId: string; // ID of the product
    quantity: number; // Quantity of the product
    color: number; // Selected color index or identifier
}

/**
 * Interface representing a user's saved address.
 */
export interface User_address_interface {
    title : string
    estate: string;              // Estate, region, or neighborhood
    city: string;                // City name
    text_address: string;        // Full detailed address
    postalCode: string;          // Postal/ZIP code
    createdAt?: Date;             // Address creation date
    updatedAt?: Date;            // Last update date
}


/**
 * Interface representing a blog post
 */
export interface Blog_Interface { 
    _id?: string;                                       // Optional unique blog ID
    title: string;                                     // Title of the blog
    description: string;                               // Blog content in HTML or rich text
    autor_id: string;                                  // ID of the author (user or agent)
    thumbnails: string;                                // Thumbnail image URL
    images: string[];                                  // Array of image URLs
    published: boolean;                                // Whether blog is published
    createdAt: Date;                                   // Date of creation
    updatedAt?: Date;                                  // Optional update timestamp
    PublishedBY: {                                     // Publisher details
        userId: string;                                // Publisher user ID
        email: string;                                 // Publisher email
    };
    testimonials: string[];                            // Array of testimonial IDs
}

/**
 * Interface representing a testimonial left on a blog
 */
export interface Blog_Testimonials_interface {
    _id?: string;              // Optional testimonial ID
    user_id: string;           // ID of the user leaving the testimonial
    blog_id: string;           // ID of the blog the testimonial is for
    rate: number;              // Rating (e.g., 1-5)
    replies: string[];         // Array of reply IDs
    message: string;           // Testimonial content
    createdAt: Date;           // Creation date
    updatedAt?: Date;          // Optional last update
}
 

export interface Blog_Testimonials_reply_interface {
    _id?: string;                  // Optional testimonial ID
    parent_id: string;            // ID of the testimonial or reply being replied to
    author_id: string;            // ID of the author of the reply
    message: string;              // Text content of the reply
    createdAt: Date;
    updatedAt?: Date;
}


/**
 * Interface representing product category hierarchy
*/
export interface Category {
  levelOne: string;   // First-level category (e.g., Electronics)
  levelTwo: string;   // Second-level category (e.g., Mobile Phones)
}

/**
 * Interface representing discount details
*/
export interface Product_Discount_interface {
  haveDiscount: boolean;   // Whether product has a discount
  discountPercent: number; // Discount percentage (0–100)
}

/**
 * Interface representing core product information
*/
export interface Product_Information_interface {
  quantity: number;       // Available quantity in stock
  colors: string[];       // Available color options
  price: number;          // Product price
  discount: Product_Discount_interface;     // Discount details
}

/**
 * Interface representing additional product attributes
 */
export interface Product_ExtraInformation_interface {
  key: string;   // Attribute name (e.g., "Material")
  value: string; // Attribute value (e.g., "Cotton")
}

/**
 * Interface representing a product
 */
export interface Product_interface {
  _id ?: string;                                 // Optional unique product ID
  title: string;                               // Product title
  englishTitle: string;                        // English version of the product title
  shortDescription: string;                    // Short product description (for listing views)
  description: string;                         // Detailed product description
  descriptionImages?: string[];                         // Detailed product description
  brand: string;                               // Brand name of the product
  thumbnail?: string;                           // URL of the thumbnail image
  images?: string[];                            // Array of image URLs
  category: Category;                          // Product category details
  information: Product_Information_interface;                    // Core product information
  extraInformation: Product_ExtraInformation_interface[];        // Array of additional product attributes
  tags?: string[];                             // Optional array of product tags for search/filtering
  rating?: {                                   // Optional rating information
    average: number;                           // Average rating (e.g., 4.5)
    count: number;                             // Total number of ratings
  };
  status: ProductStatus                        // Product availability status
  createdAt: string;                           // Product creation timestamp
  updatedAt: string;                           // Product last updated timestamp
  dimensions?: {                               // Optional product dimensions
    width: number;                             // Width in cm or specified unit
    height: number;                            // Height in cm or specified unit
    depth: number;                             // Depth in cm or specified unit
  };
  weight?: number;                             // Optional product weight (in kg or specified unit)
  isFeatured?: boolean;                        // Whether the product is marked as featured
  isNew?: boolean;                             // Whether the product is marked as new
}