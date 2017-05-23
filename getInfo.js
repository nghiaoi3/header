module.exports = {

getIP : function  (add) {
    var IP;
   if (add.indexOf(':')>=0) {
       IP = add.split(':').reverse()[0];
   } else {
       IP =add;
   }
   return IP;
},


getOS: function (useragent) {
    var OS = useragent.split(/[\(\)]/)[1];
    return OS.trim();
},

getLang: function  (langs) {
    var Lang = langs.split(',')[0].trim()
    return Lang;
}

}