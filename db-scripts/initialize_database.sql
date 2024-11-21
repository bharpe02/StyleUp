-- Create the database
CREATE DATABASE IF NOT EXISTS styleup_db;

-- Use the new database
USE styleup_db;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Create rooms table
CREATE TABLE IF NOT EXISTS rooms (
    room_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    room_name VARCHAR(255) NOT NULL,
    fku BIGINT,
    FOREIGN KEY(fku) references users(user_id)
);
-- Create decorations table
CREATE TABLE IF NOT EXISTS decorations (
    decoration_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    searchLink VARCHAR(255) NOT NULL,
    fkr BIGINT,
    FOREIGN KEY(fkr) references rooms(room_id)
);

-- Create invitations table
CREATE TABLE IF NOT EXISTS invitations (
    invitation_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    owner_id BIGINT,
    room_id BIGINT,
    room_name VARCHAR(255) NOT NULL
);

-- Create join table for collaborations on rooms
CREATE TABLE IF NOT EXISTS collaborations(
    user_id BIGINT,
    room_id BIGINT,
    FOREIGN KEY(user_id) references users(user_id),
    FOREIGN KEY(room_id) references rooms(room_id)
)