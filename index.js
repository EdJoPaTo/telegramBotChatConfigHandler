const fs = require('fs');

function clone(a) {
   return JSON.parse(JSON.stringify(a));
}

var ChatConfigHandler = function (folder, defaultConfig) {
  this.folder = folder;
  this.defaultConfig = defaultConfig ? defaultConfig : {};

  try { fs.mkdirSync(folder, '0755'); } catch (e) { }
};

ChatConfigHandler.prototype._readFileContent = function (file) {
  var fileContentString = fs.readFileSync(file, 'utf8')
  var fileContent = JSON.parse(fileContentString);
  return fileContent;
};

ChatConfigHandler.prototype._filenameFromChat = function (chat) {
  var id = chat.id;
  if (id < 0) {
    id = "g" + (id * -1);
  }
  return this.folder + '/' + id + '.json';
};

ChatConfigHandler.prototype.getAllConfigs = function () {
  var files = fs.readdirSync(this.folder);
  return files.map(f => this._readFileContent(this.folder + '/' + f));
};

ChatConfigHandler.prototype.loadConfig = function (chat) {
  try {
    return this._readFileContent(this._filenameFromChat(chat)).config;
  } catch (e) {
    return clone(this.defaultConfig);
  }
};

ChatConfigHandler.prototype.saveConfig = function (chat, config) {
  var obj = { chat: chat, config: config };

  fs.writeFileSync(this._filenameFromChat(chat), JSON.stringify(obj), 'utf8');
};

ChatConfigHandler.prototype.removeConfig = function (chat) {
  var filename = this._filenameFromChat(chat);
  fs.unlinkSync(filename);
};

module.exports = ChatConfigHandler;
