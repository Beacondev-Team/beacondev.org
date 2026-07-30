---
title: Manual Setup
sidebar_position: 4
---
# Manual Setup
:::warning
    Whilst manual setup *is* supported, it is **much** easier to use Docker, as it installs all the dependencies for you. We only recommend this if you know what you're doing.
:::

## Prerequesites
- Python

## Steps
1. Clone the GitHub repository into a location of your choice
    - With Git installed: In a terminal, run:
    ``` sh
    git clone https://github.com/Beacondev-Team/Beacon.git
    ```
    - Without Git installed, go to the [GitHub repo online](https://github.com/Beacondev-Team/Beacon.git), click the green 'Code' button at the top and click 'Download ZIP' in the dropdown that appears. Extract the downloaded ZIP to a folder of your choosing.
2. Fill in the `.env` file.

    There are some environment variables that need to be filled in for the bot to work properly. Create an empty file called `.env` and open it in a text editor. (1)

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

3. Create a Python virtual environment and activate it.

4. Install the required pip packages:
    ```
    pip install -r requirements.txt
    ```
5. You can now run `main.py` and it should work!