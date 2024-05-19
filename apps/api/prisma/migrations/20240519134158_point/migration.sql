-- AlterTable
ALTER TABLE `Event` MODIFY `status` ENUM('ComingSoon', 'available', 'Finished', 'Cancelled', 'SoldOut') NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `RedeemExpire` DATETIME(3) NULL;
