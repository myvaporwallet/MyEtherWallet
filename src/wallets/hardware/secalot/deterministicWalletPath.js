import store from 'store';

const paths = {
  testnetPath: { label: 'Testnets', dpath: "m/44'/1'/0'/0" }, // first address: m/44'/1'/0'/0/0
  classicPath: { label: 'TREZOR (ETC)', dpath: "m/44'/61'/0'/0" }, // first address: m/44'/61'/0'/0/0
  defaultDPath: {
    label: 'Jaxx, Vapormask, Exodus, imToken, TREZOR (VAP) & Digital Bitbox',
    dpath: "m/44'/60'/0'/0"
  }, // first address: m/44'/60'/0'/0/0
  customDPath: { label: 'Custom Path', dpath: "m/44'/60'/1'/0" }, // first address: m/44'/60'/1'/0/0
  hwUbqPath: { label: 'Ubiq (UBQ)', dpath: "m/44'/108'/0'/0" }, // first address: m/44'/40'/0'/0/0
  hwExpansePath: { label: 'Expanse (EXP)', dpath: "m/44'/40'/0'/0" }, // first address: m/44'/40'/0'/0/0
  hwEllaismPath: { label: 'Ellaism (ELLA)', dpath: "m/44'/163'/0'/0" }, // first address: m/44'/163'/0'/0/0
  hwVaporGemPath: { label: 'VaporGem (EGEM)', dpath: "m/44'/1987'/0'/0" }, // first address: m/44'/1987'/0'/0/0
  hwCallistoPath: { label: 'Callisto (CLO)', dpath: "m/44'/820'/0'/0" }, // first address: m/44'/820'/0'/0/0
  hwSocialPath: { label: 'Vapory Social (ETSC)', dpath: "m/44'/1128'/0'/0" }, // first address: m/44'/1128'/0'/0/0
  hwMusicoinPath: { label: 'Musicoin (MUSIC)', dpath: "m/44'/184'/0'/0" }, // first address: m/44'/184'/0'/0/0
  singularDTVPath: { label: 'SingularDTV ', dpath: "m/0'/0'/0'" }, // first address: m/0'/0'/0'/0
  goPath: { label: 'GoChain (GO)', dpath: "m/44'/6060'/0'/0" }, // first address: m/44'/6060'/0'/0/0
  hwEOSClassicPath: { label: 'EOS Classic (EOS)', dpath: "m/44'/2018'/0'/0" }, // first address: m/44'/2018'/0'/0/0
  hwAkromaPath: { label: 'Akroma (AKA)', dpath: "m/44'/200625'/0'/0" }, // first address: m/44'/200625'/0'/0/0
  hwESNetworkPath: { label: 'VaporSocial (ESN)', dpath: "m/44'/31102'/0'/0" } // first address: m/44'/31102'/0'/0/0
};

function getDerivationPath(networkName) {
  if (!networkName) {
    if (store.get('network') !== undefined) {
      networkName = store.get('network').type.name;
    }
  }

  switch (networkName) {
    case 'VAP':
      return paths.defaultDPath;
    case 'ETC':
      return paths.classicPath;
    case 'ROP':
      return paths.testnetPath;
    case 'RIN':
      return paths.testnetPath;
    case 'KOV':
      return paths.testnetPath;
    case 'EXP':
      return paths.hwExpansePath;
    case 'UBQ':
      return paths.hwUbqPath;
    case 'ELLA':
      return paths.hwEllaismPath;
    case 'EGEM':
      return paths.hwVaporGemPath;
    case 'CLO':
      return paths.hwCallistoPath;
    case 'ETSC':
      return paths.hwSocialPath;
    case 'MUSIC':
      return paths.hwMusicoinPath;
    case 'GO':
      return paths.goPath;
    case 'EOSC':
      return paths.hwEOSClassicPath;
    case 'AKROMA':
      return paths.hwAkromaPath;
    case 'ESN':
      return paths.hwESNetworkPath;
    default:
      return paths.defaultDPath;
  }
}

export { paths, getDerivationPath };
