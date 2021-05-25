import { Database, TechStack } from "../../../lib/db";

const db = new Database;

export default async (req, res) => {
	await db.init();

	switch(req.method){
	case "GET":
		res.send(await db.techStacks().find([], { offset: Number(req.query.offest), limit: Number(req.query.limit) }));
		break;
	case "POST":
		// auth
		await db.techStacks().add(new TechStack(null, req.body));
		res.status(200).end();
		break;
	default:
		res.status(400).end();
		break;
	}
};