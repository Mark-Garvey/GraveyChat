window.skeleton = function ()
{
    window.app =
    {
        skeleton: function (chat) {
            chat.addSystemMessage("Player has joined the game");
            chat.addUserMessage("global", "Player", "Going to Primm now", "100,100,200");
            chat.addUserMessage("local", "LocalPlayer", "follow me", "200,100,200");
            chat.addUserMessage("faction", "[Leader] Player", "Go to /goodsprings lads", "200,100,200");
            chat.addUserMessage("global", "Player", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis velit eu diam elementum, non ultrices velit tincidunt. Praesent malesuada egestas elit quis faucibus.", "100,100,200");
        },

        on_losefocus: function () { },
        on_message: function (msg) { chat.addUserMessage("global", "Player", msg, "255,0,0") },
        fire_suicide: function () { },
        fire_quit: function () { },

        sio_set: function () { },
        sio_get: function (group, value) {
            switch (group) {
                case "WebKit":
                    {
                        switch (value) {
                            case "SampleScale": return 2;
                        }
                        break;
                    }
                case "Chat":
                    {
                        switch (value) {
                            case "Anchor": return "tl";
                            case "Enabled": return true;
                            case "Width": return 400;
                            case "Height": return 400;
                            case "PositionX": return 0;
                            case "PositionY": return 0;
                            case "ShowSystemMessages": return true;
                            case "ShowChatMessages": return true;
                            case "ShowPlayerMessages": return true;
                        }
                        break;
                    }
            }

            console.warn(group, value);
            return "";
        }
    };
}