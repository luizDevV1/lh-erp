/*
  Warnings:

  - Added the required column `birhday` to the `erp_lh_peoples` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "erp_lh_peoples" ADD COLUMN     "birhday" TIMESTAMP(3) NOT NULL;
