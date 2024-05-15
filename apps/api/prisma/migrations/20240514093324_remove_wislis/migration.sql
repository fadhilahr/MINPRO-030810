/*
  Warnings:

  - You are about to drop the column `date` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `event` table. All the data in the column will be lost.
  - The values [CONCERTS,SPORTS,FESTIVALS,ART,CONFERENCES,EXPOS] on the enum `Event_category` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `starDate` on the `promoitem` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `review` table. All the data in the column will be lost.
  - You are about to drop the column `review` on the `review` table. All the data in the column will be lost.
  - The values [PENDING,PAID,CANCEL] on the enum `Transaction_status` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `samples` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `whishlist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `whishlistitem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `availableTickets` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `PromoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Rating` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Review` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `whishlist` DROP FOREIGN KEY `Whishlist_userId_fkey`;

-- DropForeignKey
ALTER TABLE `whishlistitem` DROP FOREIGN KEY `WhishlistItem_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `whishlistitem` DROP FOREIGN KEY `WhishlistItem_whishlistId_fkey`;

-- DropIndex
DROP INDEX `Event_slug_key` ON `event`;

-- AlterTable
ALTER TABLE `event` DROP COLUMN `date`,
    DROP COLUMN `location`,
    DROP COLUMN `stock`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `availableTickets` INTEGER NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` ENUM('ComingSoon', 'available', 'Finished') NOT NULL,
    MODIFY `category` ENUM('Sports', 'Conferences', 'Expos', 'Concerts', 'Festivals', 'ArtPerformance') NOT NULL,
    MODIFY `slug` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `promoitem` DROP COLUMN `starDate`,
    ADD COLUMN `startDate` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `review` DROP COLUMN `rating`,
    DROP COLUMN `review`,
    ADD COLUMN `Rating` INTEGER NOT NULL,
    ADD COLUMN `Review` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `transaction` MODIFY `promoItemId` INTEGER NULL,
    MODIFY `status` ENUM('Pending', 'Paid', 'Cancel') NOT NULL;

-- DropTable
DROP TABLE `samples`;

-- DropTable
DROP TABLE `whishlist`;

-- DropTable
DROP TABLE `whishlistitem`;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
