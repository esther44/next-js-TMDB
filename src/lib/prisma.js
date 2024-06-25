import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

export const prisma =
	globalForPrisma.prisma ??
	new PrismaClient({
		log: ["query", "info", "warn", "error"],
	});

async function main() {
	try {
		await prisma.$connect();
		console.log("Connected to the database");
	} catch (error) {
		console.error("Failed to connect to the database", error);
	} finally {
		await prisma.$disconnect();
	}
}

main();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
