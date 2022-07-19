require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remember history grid arch sun tragic'; 
let testAccounts = [
"0x3c1ed0ffcb3f6388c7401cd14faac016e66932bc29036eb2eaf0ae72fc16f206",
"0xef79fa166c5c1a8ad9590a96dd1b450525540b99e07695112b3d0d999f5d696d",
"0xd693c5fb2119c4867faf28b41df2f3f17166e2a7688cf84b1619521cccc1b580",
"0x4c816468bdcdb7b332bf56c98e3d43d317a640672ceddd0394cc544dd78c9077",
"0x4897658eeedeee972bf764939d64a544d80036051ab2febc2113b9266a7eed4f",
"0x10c58f1730adb9dd2d9659e401e99328cee54179c7481ac086de1877768d711d",
"0xd7a2f63ef3069da05bd1e13a75572aef206b0488fd3d95d3d12fbc6a21d0535c",
"0xd873d41eba947450afe42f20714ed6ff20099c791be557649f7b4bfa525e3f41",
"0x2d16419df5473303900ecf327bf09e09e8e152159065c29769bab7ddd72dacbb",
"0x40dd26058bb7991df05220de82d6d754daa8409ddc3187fbac44f05f82982fde"
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
            version: '^0.8.0'
        }
    }
};

