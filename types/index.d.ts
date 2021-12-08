export = CardanocliJs;
/**
 * @typedef {number} lovelace
 */
/**
 * @typedef {string} asset
 */
/**
 * @typedef {string} quantity
 */
/**
 * @typedef {string} path
 */
/**
 * @typedef {string} paymentAddr
 */
/**
 * @typedef {string} stakeAddr
 */
/**
 * @typedef {Object} TxIn
 * @property {string} txHash
 * @property {string} txId
 * @property {object=} script
 * @property {object|string|number=} datum
 * @property {object|string|number=} redeemer
 * @property {[number, number]=} executionUnits
 */
/**
 * @typedef {Object} TxOut
 * @property {string} address
 * @property {object} value
 * @property {string} datumHash
 */
/**
 * @typedef {Object} TxInCollateral
 * @property {string} txHash
 * @property {string} txId
 */
/**
 * @typedef {Object} Mint
 * @property {string} action
 * @property {string} quantity
 * @property {string} asset
 * @property {object} script
 * @property {object=} datum
 * @property {object=} redeemer
 * @property {[number, number]=} executionUnits
 */
/**
 * @typedef {Object} Certificate
 * @property {path} cert
 * @property {object=} script
 * @property {object=} datum
 * @property {object=} redeemer
 * @property {[number, number]=} executionUnits
 */
/**
 * @typedef {Object} Withdrawal
 * @property {string} stakingAddress
 * @property {lovelace} reward
 * @property {object=} script
 * @property {object=} datum
 * @property {object=} redeemer
 * @property {[number, number]=} executionUnits
 */
/**
 * @typedef {Object.<string, quantity>} Value
 */
declare class CardanocliJs {
    /**
     *
     * @param {Object} options
     * @param {path=} options.shelleyGenesisPath
     * @param {path=} options.socketPath - Default: Env Variable
     * @param {path=} options.cliPath - Default: Env Variable
     * @param {path=} options.dir - Default: Working Dir
     * @param {string=} options.era
     * @param {string=} options.network - Default: mainnet
     * @param {string=} options.httpProvider - Optional - Useful when using cli at different location than node or in browser
     */
    constructor(options: {
        shelleyGenesisPath?: path | undefined;
        socketPath?: path | undefined;
        cliPath?: path | undefined;
        dir?: path | undefined;
        era?: string | undefined;
        network?: string | undefined;
        httpProvider?: string | undefined;
    });
    network: string;
    era: string;
    dir: string;
    cliPath: string;
    shelleyGenesis: any;
    httpProvider: string;
    /**
     * @returns {object}
     */
    queryProtocolParameters(): object;
    protocolParametersPath: string;
    /**
     * @returns {object}
     */
    queryTip(): object;
    /**
     *
     * @param {string} data
     */
    txHashScriptData(data: string): any;
    /**
     * @param {stakeAddr} address
     * @returns {object}
     */
    queryStakeAddressInfo(address: stakeAddr): object;
    /**
     * @param {paymentAddr} address
     * @returns {object}
     */
    queryUtxo(address: paymentAddr): object;
    policyAddressKeyGen(): {
        vkey: string;
        skey: string;
    };
    /**
     *
     * @param {string} account - Name of account
     */
    addressKeyGen(account: string): any;
    /**
     *
     * @param {string} account - Name of account
     */
    stakeAddressKeyGen(account: string): any;
    /**
     *
     * @param {string} account - Name of account
     * @returns {path}
     */
    stakeAddressBuild(account: string): path;
    /**
     *
     * @param {string} account - Name of account
     * @param {Object} options
     * @param {path} [options.paymentVkey]
     * @param {path} [options.stakeVkey]
     * @param {object} [options.paymentScript]
     * @param {object} [options.stakeScript]
     */
    addressBuild(account: string, options: {
        paymentVkey: path;
        stakeVkey: path;
        paymentScript: object;
        stakeScript: object;
    }): string;
    /**
     *
     * @param {string} account - Name of account
     */
    addressKeyHash(account: string): any;
    /**
     *
     * @param {string} account - Name of account
     */
    addressKeyHashPath(path: any): any;
    /**
     *
     * @param {paymentAddr} address
     * @returns {object}
     */
    addressInfo(address: paymentAddr): object;
    /**
     *
     * @param {object} script
     * @returns {paymentAddr}
     */
    addressBuildScript(script: object): paymentAddr;
    /**
     *
     * @param {string} account - Name of the account
     */
    wallet(account: string): any;
    /**
     *
     * @param {string} poolName - Name of the pool
     */
    pool(poolName: string): any;
    /**
     *
     * @param {string} account - Name of the account
     * @returns {path}
     */
    stakeAddressRegistrationCertificate(account: string): path;
    /**
     *
     * @param {string} account - Name of the account
     * @returns {path}
     */
    stakeAddressDeregistrationCertificate(account: string): path;
    /**
     *
     * @param {string} account - Name of the account
     * @param {string} poolId - Stake pool verification key (Bech32 or hex-encoded)
     * @returns {path}
     */
    stakeAddressDelegationCertificate(account: string, poolId: string): path;
    /**
     *
     * @param {string} account - Name of the account
     * @returns {string}
     */
    stakeAddressKeyHash(account: string): string;
    /**
     *
     * @param {string} poolName - Name of the pool
     */
    nodeKeyGenKES(poolName: string): any;
    /**
     *
     * @param {string} poolName - Name of the pool
     */
    nodeKeyGen(poolName: string): any;
    /**
     *
     * @param {string} poolName - Name of the pool
     * @param {number=} kesPeriod - Optional (Offline mode)
     * @returns {path}
     */
    nodeIssueOpCert(poolName: string, kesPeriod?: number | undefined): path;
    /**
     *
     * @param {string} poolName - Name of the pool
     */
    nodeKeyGenVRF(poolName: string): any;
    nodeNewCounter(poolName: any, counter: any): any;
    /**
     *
     * @param {string} poolName - Name of the pool
     * @returns {string}
     */
    stakePoolId(poolName: string): string;
    /**
     *
     * @param {string} metadata - Raw File
     * @returns {string}
     */
    stakePoolMetadataHash(metadata: string): string;
    /**
     * @param {string} poolName - Name of the pool
     * @param {Object} options
     * @param {lovelace} options.pledge
     * @param {number} options.margin
     * @param {lovelace} options.cost
     * @param {string} options.url
     * @param {string} options.metaHash
     * @param {path} options.rewardAccount
     * @param {Array<path>} options.owners
     * @param {Array<Object>} options.relays
     * @returns {path}
     */
    stakePoolRegistrationCertificate(poolName: string, options: {
        pledge: lovelace;
        margin: number;
        cost: lovelace;
        url: string;
        metaHash: string;
        rewardAccount: path;
        owners: Array<path>;
        relays: Array<any>;
    }): path;
    /**
     *
     * @param {string} poolName - Name of the pool
     * @param {number} epoch - Retirement Epoch
     * @returns {path}
     */
    stakePoolDeregistrationCertificate(poolName: string, epoch: number): path;
    /**
     *
     * @param {Object} options
     * @param {Array<TxIn>} options.txIn
     * @param {Array<TxOut>} options.txOut
     * @param {Array<TxInCollateral>=} options.txInCollateral
     * @param {Array<Withdrawal>=} options.withdrawals
     * @param {Array<Certificate>=} options.certs
     * @param {lovelace=} options.fee
     * @param {Array<Mint>=} options.mint
     * @param {Array<object>=} options.auxScript
     * @param {object=} options.metadata
     * @param {number=} options.invalidBefore - Default: 0
     * @param {number=} options.invalidAfter - Default: current+10000
     * @param {boolean} options.scriptInvalid - Default: false
     * @returns {path}
     */
    transactionBuildRaw(options: {
        txIn: Array<TxIn>;
        txOut: Array<TxOut>;
        txInCollateral?: Array<TxInCollateral> | undefined;
        withdrawals?: Array<Withdrawal> | undefined;
        certs?: Array<Certificate> | undefined;
        fee?: lovelace | undefined;
        mint?: Array<Mint> | undefined;
        auxScript?: Array<object> | undefined;
        metadata?: object | undefined;
        invalidBefore?: number | undefined;
        invalidAfter?: number | undefined;
        scriptInvalid: boolean;
    }): path;
    /**
     *
     * @param {Object} options
     * @param {Array<TxIn>} options.txIn
     * @param {Array<TxOut>} options.txOut
     * @param {Array<TxInCollateral>=} options.txInCollateral
     * @param {string=} options.changeAddress
     * @param {Array<Withdrawal>=} options.withdrawals
     * @param {Array<Certificate>=} options.certs
     * @param {lovelace=} options.fee
     * @param {Array<Mint>=} options.mint
     * @param {Array<object>=} options.auxScript
     * @param {object=} options.metadata
     * @param {number=} options.invalidBefore - Default: 0
     * @param {number=} options.invalidAfter - Default: current+10000
     * @param {boolean} options.scriptInvalid - Default: false
     * @param {number=} options.witnessOverride
     * @returns {path}
     */
    transactionBuild(options: {
        txIn: Array<TxIn>;
        txOut: Array<TxOut>;
        txInCollateral?: Array<TxInCollateral> | undefined;
        changeAddress?: string | undefined;
        withdrawals?: Array<Withdrawal> | undefined;
        certs?: Array<Certificate> | undefined;
        fee?: lovelace | undefined;
        mint?: Array<Mint> | undefined;
        auxScript?: Array<object> | undefined;
        metadata?: object | undefined;
        invalidBefore?: number | undefined;
        invalidAfter?: number | undefined;
        scriptInvalid: boolean;
        witnessOverride?: number | undefined;
    }): path;
    /**
     *
     * @param {Object} options
     * @param {path} options.txBody
     * @param {Array<object>} options.txIn
     * @param {Array<object>} options.txOut
     * @param {number} options.witnessCount
     * @returns {lovelace}
     */
    transactionCalculateMinFee(options: {
        txBody: path;
        txIn: Array<object>;
        txOut: Array<object>;
        witnessCount: number;
    }): lovelace;
    /**
     *
     * @param {object} script
     * @returns {string} Policy Id
     */
    transactionPolicyid(script: object): string;
    /**
     *
     * @param {object} script
     * @returns {string} Datum hash
     */
    transactionHashScriptData(script: object): string;
    /**
     *
     * @param {Object} options
     * @param {Array<path>} options.signingKeys - One ore more signing keys
     * @param {path} options.txBody
     * @returns {path}
     */
    transactionSign(options: {
        signingKeys: Array<path>;
        txBody: path;
    }): path;
    /**
     *
     * @param {Object} options
     * @param {path} options.txBody
     * @param {path} options.signingKey
     * @returns {path}
     */
    transactionWitness(options: {
        txBody: path;
        signingKey: path;
    }): path;
    /**
     *
     * @param {Object} options
     * @param {path} options.txBody
     * @param {Array<path>} options.witnessFiles
     * @returns {path}
     */
    transactionAssemble(options: {
        txBody: path;
        witnessFiles: Array<path>;
    }): path;
    /**
     *
     *
     * @param {Value} value
     * @returns {lovelace}
     */
    transactionCalculateMinValue(value: Value): lovelace;
    /**
     *
     * @param {path | string} tx - Path or Signed Tx File
     * @returns {string} - Transaction Hash
     */
    transactionSubmit(tx: path | string): string;
    /**
     *
     * @param {Object} options
     * @param {path=} options.txBody
     * @param {path=} options.txFile
     * @returns {path}
     */
    transactionTxid(options: {
        txBody?: path | undefined;
        txFile?: path | undefined;
    }): path;
    /**
     *
     * @param {Object} options
     * @param {path=} options.txBody
     * @param {path=} options.txFile
     * @returns {path}
     */
    transactionView(options: {
        txBody?: path | undefined;
        txFile?: path | undefined;
    }): path;
    /**
     * @returns {number}
     */
    KESPeriod(): number;
    /**
     *
     * @param {path} filePath
     * @returns {path} - Download link for the file
     */
    getDownloadUrl(filePath: path): path;
    /**
     *
     * @param {number} ada
     * @returns {lovelace}
     */
    toLovelace(ada: number): lovelace;
    /**
     *
     * @param {lovelace} lovelace
     * @returns {number}
     */
    toAda(lovelace: lovelace): number;
}
declare namespace CardanocliJs {
    export { lovelace, asset, quantity, path, paymentAddr, stakeAddr, TxIn, TxOut, TxInCollateral, Mint, Certificate, Withdrawal, Value };
}
type stakeAddr = string;
type paymentAddr = string;
type path = string;
type lovelace = number;
type TxIn = {
    txHash: string;
    txId: string;
    script?: object | undefined;
    datum?: (object | string | number) | undefined;
    redeemer?: (object | string | number) | undefined;
    executionUnits?: [number, number] | undefined;
};
type TxOut = {
    address: string;
    value: object;
    datumHash: string;
};
type TxInCollateral = {
    txHash: string;
    txId: string;
};
type Withdrawal = {
    stakingAddress: string;
    reward: lovelace;
    script?: object | undefined;
    datum?: object | undefined;
    redeemer?: object | undefined;
    executionUnits?: [number, number] | undefined;
};
type Certificate = {
    cert: path;
    script?: object | undefined;
    datum?: object | undefined;
    redeemer?: object | undefined;
    executionUnits?: [number, number] | undefined;
};
type Mint = {
    action: string;
    quantity: string;
    asset: string;
    script: object;
    datum?: object | undefined;
    redeemer?: object | undefined;
    executionUnits?: [number, number] | undefined;
};
type Value = {
    [x: string]: string;
};
type asset = string;
type quantity = string;
