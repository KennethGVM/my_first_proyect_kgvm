/*
  Warnings:

  - You are about to drop the column `telegram` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "telegram",
ADD COLUMN     "telephone" TEXT;
