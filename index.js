const genId1 = require('ottq_xid');
const genId2 = require('adps_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|eX20SOAecF|' + genId2()).digest('base64');
}


module.exports = generateKey;
