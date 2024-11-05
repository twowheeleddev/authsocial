-- Creating the 'users' table
CREATE TABLE
  users (
    user_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );

-- Creating the 'shelters' table
CREATE TABLE
  shelters (
    shelter_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(20),
    phone_number VARCHAR(20),
    website_url VARCHAR(255),
    capacity INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );

-- Creating the 'posts' table for user interactions and posts
CREATE TABLE
  posts (
    post_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    shelter_id INT UNSIGNED,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (shelter_id) REFERENCES shelters (shelter_id)
  );

-- Creating the 'comments' table for comments on posts
CREATE TABLE
  comments (
    comment_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    post_id INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts (post_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
  );

-- Creating the 'likes' table to track post likes
CREATE TABLE
  likes (
    like_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    post_id INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts (post_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    UNIQUE (post_id, user_id) -- Ensures a user can only like a post once
  );

-- Creating the 'shelter_bookings' table to track shelter reservations/bookings
CREATE TABLE
  shelter_bookings (
    booking_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    shelter_id INT UNSIGNED NOT NULL,
    booking_date DATE NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (shelter_id) REFERENCES shelters (shelter_id)
  );

-- Creating the 'user_roles' table to assign roles (e.g., admin, user)
CREATE TABLE
  user_roles (
    role_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(50) UNIQUE NOT NULL
  );

-- Creating the 'user_role_assignments' table for mapping users to roles
CREATE TABLE
  user_role_assignments (
    user_id INT UNSIGNED NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (role_id) REFERENCES user_roles (role_id)
  );