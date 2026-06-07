-- CreateTable
CREATE TABLE "Monster" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "maxHealth" INTEGER NOT NULL,
    "goldReward" INTEGER NOT NULL,
    "imageUrl" TEXT,

    CONSTRAINT "Monster_pkey" PRIMARY KEY ("id")
);
