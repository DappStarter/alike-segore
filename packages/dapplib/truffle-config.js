require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski strong razor oval unusual gown light army gate'; 
let testAccounts = [
"0xef63eeb3b32ea65cbdf3088d7e0b3a1e5b9c8463d97af6be002c9e8bc6ba9c3a",
"0x3d4e3238a2edd677ad5251d514eb1fe6db2e1b7bccf733012158e5f4104b6c25",
"0x7457c8949f8592dee9b2a0f720328a9a58df1cb398527317479523c13aeeceb4",
"0x2743f2a675cc9c6c4ff9730345d1c8fdfd07f64713ace73afbe0dbcfad880e65",
"0x9a7586ada569e894289caaf73ff704743434bdcd1a9018f01787d3dc921d6ea2",
"0x571b5d3ebfb4a94bf8747d6c55b952f4a405219567835571669209e2fe7f70c0",
"0x4693cb9b009277e5710bab1e9765f3ac2df3c98d5841f0346f512d7dbc80f0ed",
"0xa6421c081d2010ab4386cfd4afe767499e3705f2af5e6cab81d1cfc1ce6e94c9",
"0xa7d58038ce52c0465ca8ff4c7187130be3a310f2a8c74c793e343f79b2357f28",
"0x80cee93396e8880b31b12b746f0c704566f0a0cbf32167e98e51e60860c7a7d4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
