/*
  Warnings:

  - You are about to drop the column `promoItemId` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Transaction` DROP COLUMN `promoItemId`,
    ADD COLUMN `PointUsed` INTEGER NULL,
    ADD COLUMN `confirmedAt` DATETIME(3) NULL,
    ADD COLUMN `paidAt` DATETIME(3) NULL,
    ADD COLUMN `promoId` INTEGER NULL,
    ADD COLUMN `useReferral` BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_promoId_fkey` FOREIGN KEY (`promoId`) REFERENCES `Promo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
