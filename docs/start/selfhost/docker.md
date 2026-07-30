---
title: Docker
sidebar_position: 3
---

# Docker
The GitHub repository has a handy Dockerfile which makes installation with Docker a breeze! 
:::info
We haven't tested our Dockerfile as we unfortunately have no way to do so, so if you encounter any problems, be sure to report them on the [GitHub!](https://github.com/Beacondev-Team/Beacon/issues)
:::
## Prerequesites
- Docker

## Steps
1. Clone the GitHub repository into a location of your choice
    - With Git installed: In a terminal, run:
    ``` sh
    git clone https://github.com/Beacondev-Team/Beacon.git
    ```
    - Without Git installed, go to the [GitHub repo online](https://github.com/Beacondev-Team/Beacon.git), click the green 'Code' button at the top and click 'Download ZIP' in the dropdown that appears. Extract the downloaded ZIP to a folder of your choosing.
2. Fill in the `.env` file.

    There are some environment variables that need to be filled in for the bot to work properly. Create an empty file called `.env` and open it in a text editor.

    Copy this template into the file:
    ``` py
    DISCORD_TOKEN = ""
    DEV_GUILD =  ""
    ```
    In the quotes after `DISCORD_TOKEN` with your Discord Bot Token that you got in [step 4 of the previous section](discordapp.md#creating-a-discord-app).

    In the quotes after `DEV_GUILD` with the Server ID of the server you have invited the bot to. To get this:

    1. Enable Developer mode in Discord:
        - Go to settings
        - Scroll to the bottom of the sidebar and click 'Developer'
        - Enable Developer Mode in the menu that appears
    2. Right click your Discord server in the sidebar.
    3. Click 'Copy Server ID'.

3. Run `docker compose up` in a terminal. This will:
    - Auto install Python and all dependencies
    - Run the bot

4. From there it should work!