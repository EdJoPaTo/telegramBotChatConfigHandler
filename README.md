# telegramBotChatConfigHandler

### new ChatConfigHandler(folder, [defaultConfigObject])
Safe all Files to the given Folder. If a config is loaded without an existing file the defaultConfigObject will be returned instead.

### chatConfigHandler.loadConfig(chat)
Config of the Chat will be loaded from the filesystem. If the file does not exist the defaultConfigObject will be returned.

### chatConfigHandler.saveConfig(chat, config)
A config object will be stored in the file of the chat.
