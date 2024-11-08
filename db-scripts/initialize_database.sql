-- Create the database
CREATE DATABASE IF NOT EXISTS styleup_db;

-- Use the new database
USE styleup_db;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    UserId BIGINT AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Create rooms table
CREATE TABLE IF NOT EXISTS rooms (
    RoomId BIGINT AUTO_INCREMENT PRIMARY KEY,
    roomName VARCHAR(255) NOT NULL,
    UserId BIGINT
);
-- Create decorations table
CREATE TABLE IF NOT EXISTS decorations (
    DecorationId BIGINT AUTO_INCREMENT PRIMARY KEY,
    searchLink VARCHAR(255) NOT NULL,
    RoomId BIGINT 
);
