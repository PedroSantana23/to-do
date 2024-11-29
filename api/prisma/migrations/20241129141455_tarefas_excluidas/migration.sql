-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_prazo" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'pendente',
    "userId" INTEGER NOT NULL,
    "isImportant" BOOLEAN NOT NULL DEFAULT false,
    "excluido" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Task" ("data_criacao", "data_prazo", "descricao", "id", "isImportant", "status", "titulo", "userId") SELECT "data_criacao", "data_prazo", "descricao", "id", "isImportant", "status", "titulo", "userId" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
