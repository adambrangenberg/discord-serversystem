import { commandFile } from "../../types.ts"

export const commandSetup: commandFile = {
    name: "ping",
    description: "Pong halt lol",

    run: async (interaction): Promise<void> => {
        await interaction.reply("ping", {
            ephemeral: true
        })
        return;
    }
}