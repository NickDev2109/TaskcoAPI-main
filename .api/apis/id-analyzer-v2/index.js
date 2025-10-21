"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'id-analyzer-v2/2.0 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * List KYC profiles under your account
     *
     * @summary List KYC Profile
     */
    SDK.prototype.getProfile = function () {
        return this.core.fetch('/profile', 'get');
    };
    /**
     * Create a new KYC profile, KYC profile allows user to define how the document should be
     * processed, with customizable thresholds that can be adjusted to suit different kind of
     * industries.
     * Important note: KYC profile can be created under web portal using friendly GUI and
     * wizard.
     *
     * @summary Create New KYC Profile
     */
    SDK.prototype.postProfile = function (body) {
        return this.core.fetch('/profile', 'post', body);
    };
    /**
     * Retrieve a list of transactions under your account, every scan and biometric API
     * response will be saved as a transaction if save to cloud option is enabled under KYC
     * profile.
     *
     * @summary List Transactions
     */
    SDK.prototype.getTransaction = function (metadata) {
        return this.core.fetch('/transaction', 'get', metadata);
    };
    /**
     * Retrieve a list of contract templates
     *
     * @summary List Contract Templates
     */
    SDK.prototype.getContract = function (body, metadata) {
        return this.core.fetch('/contract', 'get', body, metadata);
    };
    /**
     * Create new contract or form template. A template is used for auto-filling and document
     * automation tasks such as generating vehicle rental contract by scanning a driving
     * license.
     * Important note: Templates can be created under web portal using HTML editor.
     *
     * @summary Create Contract Template
     */
    SDK.prototype.postContract = function (body) {
        return this.core.fetch('/contract', 'post', body);
    };
    /**
     * Retrive a list of webhook sent
     *
     * @summary List Webhook History
     */
    SDK.prototype.getWebhook = function (body, metadata) {
        return this.core.fetch('/webhook', 'get', body, metadata);
    };
    /**
     * Start a new identity document scan or ID to face verification transaction by uploading
     * based64-encoded images. You may also perform AML check and document automation tasks
     * while verifying an identity document with this API function.
     *
     * We have prepared some test samples for you to get started, the samples are designed to
     * trigger most response scenarios to help you get a thorough understand of our API.
     *
     * Document Image: https://www.idanalyzer.com/assets/testsample_id.jpg
     * Face Image: https://www.idanalyzer.com/assets/testsample_face.jpg
     * KYC Profile: https://www.idanalyzer.com/assets/testprofile.json
     *
     * The driving license image was edited in Photoshop with specific information to trigger
     * an AML match, the eye color is intentionally obscured to trigger extra warnings.
     * The face image was recaptured using a phone camera.
     * The KYC profile have all the validations enabled and can be imported into your account
     * through web portal.
     *
     * @summary Standard ID Scan
     * @throws FetchError<400, types.PostScanResponse400> Bad Request
     * @throws FetchError<401, types.PostScanResponse401> Unauthorized
     */
    SDK.prototype.postScan = function (body) {
        return this.core.fetch('/scan', 'post', body);
    };
    /**
     * Generate a document using template and extracted OCR data from a specific transaction
     *
     * @summary Generate Document
     */
    SDK.prototype.postGenerate = function (body) {
        return this.core.fetch('/generate', 'post', body);
    };
    /**
     * AML search allows you to monitor politically exposed persons (PEPs), and discover person
     * or organization on under sanctions from worldwide governments. Use Standard ID Scan API
     * instead if you want to check for AML database while uploading a document imag.
     *
     * @summary AML Search
     */
    SDK.prototype.postAml = function (body) {
        return this.core.fetch('/aml', 'post', body);
    };
    /**
     * Initiate a quick identity document OCR scan by uploading based64-encoded images. Quick
     * scan is designed for realtime application such as camera feed for rapid document
     * recognition and data extraction without extensive security checks.
     *
     * @summary Quick ID Scan
     * @throws FetchError<400, types.PostQuickscanResponse400> Bad Request
     * @throws FetchError<401, types.PostQuickscanResponse401> Unauthorized
     */
    SDK.prototype.postQuickscan = function (body) {
        return this.core.fetch('/quickscan', 'post', body);
    };
    /**
     * Retrieve a single transaction data
     *
     * @summary Get Transaction
     */
    SDK.prototype.getTransactionTransactionid = function (metadata) {
        return this.core.fetch('/transaction/{transactionId}', 'get', metadata);
    };
    /**
     * Delete a transaction and associated images
     *
     * @summary Delete Transaction
     */
    SDK.prototype.deleteTransactionTransactionid = function (metadata) {
        return this.core.fetch('/transaction/{transactionId}', 'delete', metadata);
    };
    /**
     * Update transaction decision, updated decision will be relayed to webhook if set.
     *
     * @summary Update Transaction Decision
     */
    SDK.prototype.patchTransactionTransactionid = function (body, metadata) {
        return this.core.fetch('/transaction/{transactionId}', 'patch', body, metadata);
    };
    /**
     * Retrieve image using a secure image token obtained from saved transaction
     *
     * @summary Download Output Image
     */
    SDK.prototype.getImagevaultImagetoken = function (metadata) {
        return this.core.fetch('/imagevault/{imageToken}', 'get', metadata);
    };
    /**
     * Download file using secured file name obtained from transaction outputFile.fileName
     *
     * @summary Download Output File
     */
    SDK.prototype.getFilevaultFilename = function (metadata) {
        return this.core.fetch('/fillevault/{fileName}', 'get', metadata);
    };
    /**
     * Retrieve details of a KYC profile
     *
     * @summary Get KYC Profile
     */
    SDK.prototype.getProfileProfileid = function (metadata) {
        return this.core.fetch('/profile/{profileId}', 'get', metadata);
    };
    SDK.prototype.putProfileProfileid = function (body, metadata) {
        return this.core.fetch('/profile/{profileId}', 'put', body, metadata);
    };
    /**
     * Delete a KYC profile
     *
     * @summary Delete  KYC Profile
     */
    SDK.prototype.deleteProfileProfileid = function (metadata) {
        return this.core.fetch('/profile/{profileId}', 'delete', metadata);
    };
    /**
     * Get current your account information including usage and quota
     *
     * @summary Get Account Information
     */
    SDK.prototype.getMyaccount = function () {
        return this.core.fetch('/myaccount', 'get');
    };
    /**
     * Perform 1:1 face verification using selfie photo or selfie video, against a reference
     * face image. Liveness check can also be performed depending on your KYC profile settings.
     * Use Standard ID Scan API instead if you want to compare selfie with an identity
     * document.
     *
     * @summary Face Verification
     */
    SDK.prototype.postFace = function (body) {
        return this.core.fetch('/face', 'post', body);
    };
    /**
     * Perform standalone liveness check on a selfie photo or video to detect whether the
     * selfie or selfie video is real and authentic.
     *
     * @summary Liveness Verification
     */
    SDK.prototype.postLiveness = function (body) {
        return this.core.fetch('/liveness', 'post', body);
    };
    /**
     * Resend a webhook that has failed to send due to failure to connect to remote server or
     * non-200 response code.
     *
     * @summary Resend Webhook
     */
    SDK.prototype.postWebhookId = function (metadata) {
        return this.core.fetch('/webhook/{id}', 'post', metadata);
    };
    /**
     * Delete a webhook
     *
     * @summary Delete Webhook
     */
    SDK.prototype.deleteWebhookId = function (metadata) {
        return this.core.fetch('/webhook/{id}', 'delete', metadata);
    };
    /**
     * Export transactions into CSV or JSON file
     *
     * @summary Export Transactions
     */
    SDK.prototype.postExportTransaction = function (body) {
        return this.core.fetch('/export/transaction', 'post', body);
    };
    /**
     * Export KYC Profile as JSON, exported profile can be used to create new profiles or
     * imported to another account via web portal.
     *
     * @summary Export KYC Profile
     */
    SDK.prototype.getExportProfileId = function (metadata) {
        return this.core.fetch('/export/profile/{id}', 'get', metadata);
    };
    /**
     * List Docupass links that has been generated under your account
     *
     * @summary List Docupass Links
     */
    SDK.prototype.getDocupass = function (metadata) {
        return this.core.fetch('/docupass', 'get', metadata);
    };
    /**
     * Generate new Docupass link and QR Code for identity verification and/or eSignature.
     *
     * You can:
     *
     * - Embed the link in an iframe or fancybox/lightbox on your website
     * - Send the link to your customer
     * - Display the link/QR Code on your website
     * - Redirect user to this link
     * - Embed the link using WebView in Android and iOS
     *
     * @summary Create Docupass Link
     */
    SDK.prototype.postDocupass = function (body) {
        return this.core.fetch('/docupass', 'post', body);
    };
    /**
     * Delete Docupass Link by reference code
     *
     * @summary Delete Docupass Link
     */
    SDK.prototype.deleteDocupassReference = function (metadata) {
        return this.core.fetch('/docupass/{reference}', 'delete', metadata);
    };
    /**
     * Retrieve Docupass details
     *
     * @summary Get Docupass Detail
     */
    SDK.prototype.getDocupassReference = function (metadata) {
        return this.core.fetch('/docupass/{reference}', 'get', metadata);
    };
    /**
     * Retrieve a contract template
     *
     * @summary Get Template
     */
    SDK.prototype.getContractTemplateId = function (metadata) {
        return this.core.fetch('/contract/{templateId}', 'get', metadata);
    };
    /**
     * Delete a contract template
     *
     * @summary Delete Template
     */
    SDK.prototype.deleteContractTemplateId = function (metadata) {
        return this.core.fetch('/contract/{templateId}', 'delete', metadata);
    };
    SDK.prototype.postContractTemplateId = function (body, metadata) {
        return this.core.fetch('/contract/{templateId}', 'post', body, metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
