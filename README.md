# telegramBotChatConfigHandler

### new ChatConfigHandler(folder, [defaultConfigObject])
Safe all Files to the given `folder`. If a `config` is loaded without an existing file the `defaultConfigObject` will be returned instead.

### chatConfigHandler.getAllConfigs()
Load all `config`s.

### chatConfigHandler.loadConfig(chat)
`config` of the `chat` will be loaded from the `folder`. If the file does not exist the `defaultConfigObject` will be returned.

### chatConfigHandler.saveConfig(chat, config)
A `config` object will be stored in the file of the `chat`.

### chatConfigHandler.removeConfig(chat)
Remove the `config` of `chat` from the `folder`.
