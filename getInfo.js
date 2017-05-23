function getIP (add) {
    var IP;
   if (add.indexOf(':')>=0) {
       IP = add.split(':')[1];
   } else {
       IP =add;
   }
   return IP;
}


function getOS (useragent) {
    var OS = useragent.split(/[\(\)]/)[1];
    return OS.trim();
}

function getLang (langs) {
    var Lang = langs.split(',')[0].trim()
    return Lang;
}

export { getIP, getOS, getLang }; // exports functions declared earlier
