import User, { IUser } from "@/models/User";
import { connectToDB } from "@/lib/mongodb/mongoose";

export const createOrUpdateUser = async (id: string, email_addresses: string): Promise<IUser | null> => {
    try {
        await connectToDB();

        const user = await User.findOneAndUpdate(
            { clerkId: id },
            {
                $set: {
                    email: email_addresses
                }
            },
            { upsert: true, new: true } // if user does not exist, create a new one
        );

        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const deleteUser = async (id: string): Promise<void> => {
    try {
        await connectToDB();
        await User.findOneAndDelete({ clerkId: id });
    } catch (error) {
        console.error(error);
    }
};
