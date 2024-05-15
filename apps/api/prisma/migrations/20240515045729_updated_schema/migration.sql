/*
  Warnings:

  - You are about to drop the column `date` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Event` table. All the data in the column will be lost.
  - The values [CONCERTS,SPORTS,FESTIVALS,ART,CONFERENCES,EXPOS] on the enum `Event_category` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `starDate` on the `PromoItem` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `review` on the `Review` table. All the data in the column will be lost.
  - The values [PENDING,PAID,CANCEL] on the enum `Transaction_status` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `Whishlist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WhishlistItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `samples` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `availableTickets` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `PromoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Rating` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Review` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `WhishlistItem` DROP FOREIGN KEY `WhishlistItem_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `WhishlistItem` DROP FOREIGN KEY `WhishlistItem_whishlistId_fkey`;

-- DropIndex
DROP INDEX `Event_slug_key` ON `Event`;

-- DropIndex
DROP INDEX `PointUser_userId_fkey` ON `PointUser`;

-- DropIndex
DROP INDEX `Review_userId_fkey` ON `Review`;

-- DropIndex
DROP INDEX `Transaction_userId_fkey` ON `Transaction`;

-- AlterTable
ALTER TABLE `Event` DROP COLUMN `date`,
    DROP COLUMN `location`,
    DROP COLUMN `stock`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `availableTickets` INTEGER NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` ENUM('ComingSoon', 'available', 'Finished') NOT NULL,
    MODIFY `category` ENUM('Sports', 'Conferences', 'Expos', 'Concerts', 'Festivals', 'ArtPerformance') NOT NULL,
    MODIFY `slug` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `PromoItem` DROP COLUMN `starDate`,
    ADD COLUMN `startDate` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Review` DROP COLUMN `rating`,
    DROP COLUMN `review`,
    ADD COLUMN `Rating` INTEGER NOT NULL,
    ADD COLUMN `Review` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Transaction` MODIFY `promoItemId` INTEGER NULL,
    MODIFY `status` ENUM('Pending', 'Paid', 'Cancel') NOT NULL;

-- DropTable
DROP TABLE `Whishlist`;

-- DropTable
DROP TABLE `WhishlistItem`;

-- DropTable
DROP TABLE `samples`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` LONGTEXT NOT NULL,
    `profile` LONGTEXT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT false,
    `referral` VARCHAR(191) NULL,
    `isReedem` BOOLEAN NOT NULL DEFAULT true,
    `accountType` VARCHAR(191) NOT NULL DEFAULT 'user',
    `points` INTEGER NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_referral_key`(`referral`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PointUser` ADD CONSTRAINT `PointUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
