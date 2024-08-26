const cds = require("@sap/cds");
const { getData, createData } = require("./src/zTOTEOperations");

module.exports = cds.service.impl(async function () {
    this.on("READ", "ZTOTECNFWCSTOSAPSet", getData);
    this.on("CREATE", "ZTOTECNFWCSTOSAPSet", createData)
});

