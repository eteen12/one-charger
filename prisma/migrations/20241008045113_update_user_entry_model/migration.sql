/*
  Warnings:

  - You are about to drop the `userEntry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "userEntry";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "UserEntry" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "UserEntry_email_key" ON "UserEntry"("email");
