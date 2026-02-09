const User = require('../models/User');
const db = require('../config/database');

const seedUsers = async () => {
    try {
        await db.authenticate();
        await User.sync({ force: true }); 
        const dummyData = [
            { name: "Admin Ganteng", email: "admin@test.com", role: "admin" },
            { name: "User Biasa", email: "user@test.com", role: "staff" },
            { name: "Tamu Undangan", email: "guest@test.com", role: "guest" }
        ];

        await User.bulkCreate(dummyData);
        console.log("✅ Database berhasil diisi data dummy!");
        process.exit();
    } catch (error) {
        console.error("❌ Gagal seeding:", error);
        process.exit(1);
    }
};

seedUsers();