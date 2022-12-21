-- CreateTable
CREATE TABLE "erp_lh_users" (
    "uuid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt_uuid" TEXT NOT NULL,
    "people_uuid" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "erp_lh_users_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "erp_lh_salts" (
    "uuid" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "erp_lh_salts_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "erp_lh_peoples" (
    "uuid" TEXT NOT NULL,
    "fistname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "observation" TEXT,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "erp_lh_peoples_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "erp_lh_users_email_key" ON "erp_lh_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "erp_lh_users_username_key" ON "erp_lh_users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "erp_lh_users_salt_uuid_key" ON "erp_lh_users"("salt_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "erp_lh_users_people_uuid_key" ON "erp_lh_users"("people_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "erp_lh_peoples_cpf_key" ON "erp_lh_peoples"("cpf");

-- AddForeignKey
ALTER TABLE "erp_lh_users" ADD CONSTRAINT "erp_lh_users_salt_uuid_fkey" FOREIGN KEY ("salt_uuid") REFERENCES "erp_lh_salts"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "erp_lh_users" ADD CONSTRAINT "erp_lh_users_people_uuid_fkey" FOREIGN KEY ("people_uuid") REFERENCES "erp_lh_peoples"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
