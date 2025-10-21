declare const DeleteContractTemplateId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly templateId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Template ID";
                };
            };
            readonly required: readonly ["templateId"];
        }];
    };
};
declare const DeleteDocupassReference: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly reference: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["reference"];
        }];
    };
};
declare const DeleteProfileProfileid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly profileId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "KYC Profile ID";
                };
            };
            readonly required: readonly ["profileId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteTransactionTransactionid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Transaction ID";
                };
            };
            readonly required: readonly ["transactionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                };
            };
            readonly required: readonly ["success"];
            readonly "x-examples": {
                readonly "example-1": {
                    readonly success: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteWebhookId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Webhook ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetContract: {
    readonly body: {
        readonly type: "object";
        readonly additionalProperties: true;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items returned per call";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Start from a particular entry";
                };
                readonly order: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort results by newest(-1) or oldest(1)";
                };
                readonly templateid: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter result by template ID";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                };
                readonly offset: {
                    readonly type: "integer";
                };
                readonly nextOffset: {
                    readonly type: "integer";
                };
                readonly total: {
                    readonly type: "integer";
                };
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly createdAt: {
                            readonly type: "integer";
                        };
                        readonly updatedAt: {
                            readonly type: "integer";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetContractTemplateId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly templateId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Template ID";
                };
            };
            readonly required: readonly ["templateId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly content: {
                    readonly type: "string";
                };
                readonly orientation: {
                    readonly type: "string";
                };
                readonly timezone: {
                    readonly type: "string";
                };
                readonly font: {
                    readonly type: "string";
                };
                readonly createdAt: {
                    readonly type: "integer";
                };
                readonly updatedAt: {
                    readonly type: "integer";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDocupass: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly sort: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort by id or completedat";
                };
                readonly order: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "-1=Newest First (default); 1=Oldest First";
                };
                readonly offset: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Index of the starting entry";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items returned per call";
                };
                readonly reference: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by reference";
                };
                readonly customData: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by custom data";
                };
                readonly profileId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by profile ID";
                };
                readonly decision: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by decision";
                };
                readonly createdAtMin: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Time range filter";
                };
                readonly createdAtMax: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Time range filter";
                };
                readonly completedAtMin: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Time range filter";
                };
                readonly completedAtMax: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Time range filter";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                };
                readonly offset: {
                    readonly type: "integer";
                };
                readonly nextOffset: {
                    readonly type: "integer";
                };
                readonly total: {
                    readonly type: "integer";
                };
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly reference: {
                            readonly type: "string";
                        };
                        readonly mode: {
                            readonly type: "integer";
                        };
                        readonly profileId: {
                            readonly type: "string";
                        };
                        readonly verifyDocumentNo: {
                            readonly type: "string";
                        };
                        readonly verifyName: {
                            readonly type: "string";
                        };
                        readonly verifyDob: {
                            readonly type: "string";
                        };
                        readonly verifyAge: {
                            readonly type: "string";
                        };
                        readonly verifyAddress: {
                            readonly type: "string";
                        };
                        readonly verifyPostcode: {
                            readonly type: "string";
                        };
                        readonly userPhone: {
                            readonly type: "string";
                        };
                        readonly validatedPhone: {
                            readonly type: "string";
                            readonly description: "Phone number that has been successfully validated";
                        };
                        readonly language: {
                            readonly type: "string";
                        };
                        readonly transactionId: {
                            readonly type: "string";
                            readonly description: "Completed final transaction ID";
                        };
                        readonly decision: {
                            readonly type: "string";
                            readonly description: "Completed final decision";
                        };
                        readonly customData: {
                            readonly type: "string";
                        };
                        readonly ip: {
                            readonly type: "string";
                            readonly description: "IP address of user completing the transaction";
                        };
                        readonly completedAt: {
                            readonly type: "integer";
                        };
                        readonly createdAt: {
                            readonly type: "integer";
                        };
                        readonly expiry: {
                            readonly type: "integer";
                        };
                        readonly reusable: {
                            readonly type: "integer";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDocupassReference: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly reference: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["reference"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly reference: {
                    readonly type: "string";
                };
                readonly mode: {
                    readonly type: "integer";
                };
                readonly profileId: {
                    readonly type: "string";
                };
                readonly finalTransaction: {
                    readonly type: "object";
                    readonly description: "If completed, this object will contain the full transaction data.";
                    readonly additionalProperties: true;
                };
                readonly intermediateTransactions: {
                    readonly type: "array";
                    readonly description: "This object contains all pending and failed transaction data.";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly auditLog: {
                    readonly type: "array";
                    readonly description: "Audit log listing user actions";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly session: {
                                readonly type: "string";
                            };
                            readonly action: {
                                readonly type: "string";
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly latitude: {
                                readonly type: "string";
                            };
                            readonly Longitude: {
                                readonly type: "string";
                            };
                            readonly accuracy: {
                                readonly type: "string";
                            };
                            readonly ip: {
                                readonly type: "string";
                            };
                            readonly time: {
                                readonly type: "integer";
                            };
                        };
                    };
                };
                readonly verifyDocumentNo: {
                    readonly type: "string";
                };
                readonly verifyName: {
                    readonly type: "string";
                };
                readonly verifyDob: {
                    readonly type: "string";
                };
                readonly verifyAge: {
                    readonly type: "string";
                };
                readonly verifyAddress: {
                    readonly type: "string";
                };
                readonly verifyPostcode: {
                    readonly type: "string";
                };
                readonly userPhone: {
                    readonly type: "string";
                };
                readonly reusable: {
                    readonly type: "integer";
                };
                readonly expiry: {
                    readonly type: "integer";
                    readonly description: "Expiry timestamp";
                };
                readonly language: {
                    readonly type: "string";
                };
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "If completed, shows the result transaction ID.";
                };
                readonly decision: {
                    readonly type: "string";
                    readonly description: "If completed, shows the result decision.";
                };
                readonly customData: {
                    readonly type: "string";
                };
                readonly createdAt: {
                    readonly type: "integer";
                    readonly description: "Link creation time";
                };
                readonly completedAt: {
                    readonly type: "integer";
                    readonly description: "Completion Time";
                };
                readonly url: {
                    readonly type: "string";
                    readonly description: "URL for the Docupass";
                };
                readonly urlSign: {
                    readonly type: "object";
                    readonly description: "eSignature URL for multi-party sign";
                    readonly additionalProperties: {
                        readonly type: "string";
                    };
                };
                readonly partySigned: {
                    readonly type: "object";
                    readonly description: "A dictionary listing all parties and whether they have signed the document (for multi-party eSignure mode only)";
                    readonly additionalProperties: {
                        readonly type: "boolean";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetExportProfileId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "KYC Profile ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetFilevaultFilename: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly fileName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "File name returned by transaction API";
                };
            };
            readonly required: readonly ["fileName"];
        }];
    };
};
declare const GetImagevaultImagetoken: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly imageToken: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Image token retrieved from transaction image response";
                };
            };
            readonly required: readonly ["imageToken"];
        }];
    };
};
declare const GetMyaccount: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly description: "ID Analyzer Account ID";
                };
                readonly firstName: {
                    readonly type: "string";
                    readonly description: "Firstname";
                };
                readonly lastName: {
                    readonly type: "string";
                    readonly description: "Lastname";
                };
                readonly email: {
                    readonly type: "string";
                    readonly description: "Email";
                };
                readonly company: {
                    readonly type: "string";
                    readonly description: "Company name";
                };
                readonly address: {
                    readonly type: "string";
                    readonly description: "Address";
                };
                readonly country: {
                    readonly type: "string";
                    readonly description: "Country ISO2 code";
                };
                readonly state: {
                    readonly type: "string";
                    readonly description: "State";
                };
                readonly postcode: {
                    readonly type: "string";
                    readonly description: "Postcode";
                };
                readonly contactNumber: {
                    readonly type: "string";
                    readonly description: "Contact number";
                };
                readonly taxType: {
                    readonly type: "string";
                    readonly description: "Tax Type";
                };
                readonly taxId: {
                    readonly type: "string";
                    readonly description: "Tax ID";
                };
                readonly emailNews: {
                    readonly type: "integer";
                    readonly description: "Opt for receiving newsletter";
                };
                readonly emailWarning: {
                    readonly type: "integer";
                    readonly description: "Opt for receiving quota warnings";
                };
                readonly emailBilling: {
                    readonly type: "integer";
                    readonly description: "Opt for receiving billing reminders";
                };
                readonly hits: {
                    readonly type: "integer";
                    readonly description: "Your current API usage";
                };
                readonly quota: {
                    readonly type: "integer";
                    readonly description: "Your current API allowance";
                };
                readonly credit: {
                    readonly type: "integer";
                    readonly description: "Your current test credits";
                };
                readonly hostList: {
                    readonly type: "string";
                    readonly description: "Host IP Whitelist";
                };
                readonly privateKey: {
                    readonly type: "string";
                    readonly description: "Your account private API Key";
                };
                readonly restrictedKey: {
                    readonly type: "string";
                    readonly description: "Your account restricted API Key";
                };
                readonly planName: {
                    readonly type: "string";
                    readonly description: "Your current subscription plan name";
                };
                readonly planCode: {
                    readonly type: "string";
                    readonly description: "Your current subscription plan code";
                };
                readonly planDescription: {
                    readonly type: "string";
                    readonly description: "Your current subscription plan description";
                };
                readonly billingDate: {
                    readonly type: "integer";
                    readonly description: "Next date your account will be billed if you have an active subscription";
                };
                readonly billingAmount: {
                    readonly type: "integer";
                    readonly description: "Next amount your account will be billed if you have an active subscription";
                };
                readonly billingCurrency: {
                    readonly type: "string";
                    readonly description: "Next currency your account will be billed if you have an active subscription";
                };
                readonly billingPeriod: {
                    readonly type: "integer";
                    readonly description: "Your subscription plan length";
                };
                readonly subscriptionId: {
                    readonly type: "string";
                    readonly description: "Your subscription identifier";
                };
                readonly autoRenew: {
                    readonly type: "integer";
                    readonly description: "Whether auto-renew is enabled on your plan";
                };
                readonly overcharge: {
                    readonly type: "integer";
                    readonly description: "Your current plan excessive use charge rate";
                };
                readonly allowOvercharge: {
                    readonly type: "integer";
                    readonly description: "Whether you have enabled exessive use under your account to allow API calls over your quota";
                };
                readonly hitsLastMonth: {
                    readonly type: "integer";
                    readonly description: "Number of API credit spent last month";
                };
                readonly autoInvoice: {
                    readonly type: "integer";
                    readonly description: "Your subscription invoice ID";
                };
                readonly twoFactorEnabled: {
                    readonly type: "boolean";
                    readonly description: "Whether you have enabled 2FA on your account";
                };
                readonly banned: {
                    readonly type: "integer";
                    readonly description: "Whether your account has been disabled";
                };
                readonly bannedreason: {
                    readonly type: "string";
                    readonly description: "If your account has been disabled, the reason why it is disabled";
                };
            };
            readonly "x-examples": {
                readonly "Example 1": {
                    readonly id: 12345;
                    readonly firstName: "Bob";
                    readonly lastName: "Smith";
                    readonly email: "email@example.com";
                    readonly company: "Company name";
                    readonly address: "123 My Avenue";
                    readonly country: "US";
                    readonly state: "CA";
                    readonly postcode: "12345";
                    readonly contactNumber: "0000000000000";
                    readonly taxType: "";
                    readonly taxId: "";
                    readonly emailNews: 1;
                    readonly emailWarning: 1;
                    readonly emailBilling: 0;
                    readonly hits: 0;
                    readonly quota: 5;
                    readonly credit: 142;
                    readonly hostList: "";
                    readonly privateKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXX";
                    readonly restrictedKey: "YYYYYYYYYYYYYYYYYYYYYYYYYYY";
                    readonly planName: "";
                    readonly planCode: "";
                    readonly planDescription: "";
                    readonly billingDate: 0;
                    readonly billingAmount: 0;
                    readonly billingCurrency: "0";
                    readonly billingPeriod: 0;
                    readonly subscriptionId: "";
                    readonly autoRenew: 0;
                    readonly overcharge: 0;
                    readonly allowOvercharge: 0;
                    readonly hitsLastMonth: 1;
                    readonly autoInvoice: 0;
                    readonly twoFactorEnabled: false;
                    readonly banned: 0;
                    readonly bannedreason: "";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetProfile: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly minItems: 1;
            readonly uniqueItems: true;
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly minLength: 1;
                    };
                    readonly profileName: {
                        readonly type: "string";
                        readonly minLength: 1;
                    };
                    readonly createdAt: {
                        readonly type: "number";
                    };
                };
            };
            readonly "x-examples": {
                readonly "example-1": readonly [{
                    readonly id: "60c1627340a09ce39d8bf48f";
                    readonly profileName: "TEST";
                    readonly createdAt: 1623286387;
                }, {
                    readonly id: "60c1627240a09ce39d8bf48e";
                    readonly profileName: "TEST";
                    readonly createdAt: 1623286386;
                }, {
                    readonly id: "60c1627040a09ce39d8bf48d";
                    readonly profileName: "TEST";
                    readonly createdAt: 1623286384;
                }];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetProfileProfileid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly profileId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "KYC Profile ID";
                };
            };
            readonly required: readonly ["profileId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly "x-examples": {
                readonly "example-1": {
                    readonly name: "456";
                    readonly canvasSize: 1500;
                    readonly orientationCorrection: true;
                    readonly saveResult: false;
                    readonly saveImage: false;
                    readonly outputImage: true;
                    readonly outputType: "base64";
                    readonly crop: true;
                    readonly advancedCrop: true;
                    readonly outputSize: 1000;
                    readonly obscure: readonly [];
                    readonly webhook: "";
                    readonly thresholds: {
                        readonly face: 0.5;
                        readonly nameDualSide: 0.5;
                        readonly nameVerification: 0.7;
                        readonly addressVerification: 0.9;
                        readonly imageForgery: 0.5;
                        readonly textForgery: 0.5;
                        readonly recapture: 0.5;
                        readonly screenDetection: 0.4;
                        readonly lowTextConfidence: 0.3;
                        readonly artificialImage: 0.5;
                        readonly artificialText: 0.5;
                        readonly faceIdentical: 0.5;
                        readonly smallImage: 0.5;
                        readonly blurryImage: 0.5;
                        readonly cameraPerspective: 0.5;
                    };
                    readonly decisionTrigger: {
                        readonly review: 1;
                        readonly reject: 1;
                    };
                    readonly decisions: {
                        readonly UNRECOGNIZED_DOCUMENT: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly UNRECOGNIZED_BACK_DOCUMENT: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly UNRECOGNIZED_BACK_BARCODE: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly INVALID_BACK_DOCUMENT: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly SELFIE_FACE_NOT_FOUND: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly SELFIE_MULTIPLE_FACES: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly DOCUMENT_FACE_NOT_FOUND: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly DOCUMENT_FACE_LANDMARK_ERR: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly SELFIE_FACE_LANDMARK_ERR: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly INTERNAL_FACE_VERIFICATION_ERR: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly FACE_MISMATCH: {
                            readonly enabled: true;
                            readonly review: 0.45;
                            readonly reject: 0.5;
                            readonly weight: 1;
                        };
                        readonly FACE_IDENTICAL: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly DOCUMENT_COUNTRY_MISMATCH: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly DOCUMENT_STATE_MISMATCH: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly DOCUMENT_NAME_MISMATCH: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly DOCUMENT_DOB_MISMATCH: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly MISSING_EXPIRY_DATE: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly MISSING_ISSUE_DATE: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly MISSING_BIRTH_DATE: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly MISSING_DOCUMENT_NUMBER: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly MISSING_PERSONAL_NUMBER: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly MISSING_ADDRESS: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly MISSING_POSTCODE: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly MISSING_NAME: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly MISSING_LOCAL_NAME: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly MISSING_GENDER: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly MISSING_HEIGHT: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly MISSING_WEIGHT: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly MISSING_HAIR_COLOR: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly MISSING_EYE_COLOR: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly MISSING_RESTRICTIONS: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly MISSING_VEHICLE_CLASS: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly MISSING_ENDORSEMENT: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly UNDER_18: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly UNDER_19: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly UNDER_20: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly UNDER_21: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly DOCUMENT_EXPIRED: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly NAME_VERIFICATION_FAILED: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly DOB_VERIFICATION_FAILED: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly AGE_VERIFICATION_FAILED: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly ID_NUMBER_VERIFICATION_FAILED: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly ADDRESS_VERIFICATION_FAILED: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly POSTCODE_VERIFICATION_FAILED: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly TYPE_NOT_ACCEPTED: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly COUNTRY_NOT_ACCEPTED: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly STATE_NOT_ACCEPTED: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly RECAPTURED_DOCUMENT: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly SCREEN_DETECTED: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly IMAGE_FORGERY: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly FEATURE_VERIFICATION_FAILED: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly IMAGE_EDITED: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly AML_SANCTION: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly AML_CRIME: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly AML_PEP: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly LOW_TEXT_CONFIDENCE: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly FAKE_ID: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly ARTIFICIAL_IMAGE: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly ARTIFICIAL_TEXT: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly TEXT_FORGERY: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly IP_COUNTRY_MISMATCH: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly IMAGE_TOO_SMALL: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly IMAGE_TOO_BLURRY: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: 0;
                            readonly weight: 1;
                        };
                        readonly INVALID_CAMERA_PERSPECTIVE: {
                            readonly enabled: true;
                            readonly review: 0;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                        readonly CHECK_DIGIT_FAILED: {
                            readonly enabled: false;
                            readonly review: 0;
                            readonly reject: 0;
                            readonly weight: 0;
                        };
                        readonly UNKNOWN: {
                            readonly enabled: true;
                            readonly review: -1;
                            readonly reject: -1;
                            readonly weight: 1;
                        };
                    };
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTransaction: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items to be returned per call";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Start the list from a particular entry index";
                };
                readonly order: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort results by newest(-1) or oldest(1)";
                };
                readonly profileId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter result by KYC Profile ID";
                };
                readonly decision: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter result by current decision";
                };
                readonly customData: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter result by customData field";
                };
                readonly createdAtMin: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List transactions that were created after this timestamp";
                };
                readonly createdAtMax: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List transactions that were created before this timestamp";
                };
                readonly docupass: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter result by Docupass reference";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Return item limit per call";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly description: "Current cursor offset";
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "Total number of transactions";
                };
                readonly transactions: {
                    readonly type: "array";
                    readonly description: "Transactions comes in similar format as API scan result, refer to Standard Scan API response for details about each field.";
                    readonly minItems: 1;
                    readonly uniqueItems: true;
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly minLength: 1;
                            };
                            readonly data: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly fieldKey: {
                                        readonly type: "array";
                                        readonly minItems: 1;
                                        readonly uniqueItems: true;
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly value: {
                                                    readonly type: "string";
                                                    readonly minLength: 1;
                                                };
                                                readonly confidence: {
                                                    readonly type: "number";
                                                };
                                                readonly source: {
                                                    readonly type: "string";
                                                    readonly minLength: 1;
                                                };
                                                readonly index: {
                                                    readonly type: "number";
                                                };
                                                readonly inputBox: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly "0": {
                                                                readonly type: "array";
                                                                readonly uniqueItems: true;
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                            readonly "1": {
                                                                readonly type: "array";
                                                                readonly uniqueItems: true;
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                            readonly "2": {
                                                                readonly type: "array";
                                                                readonly uniqueItems: true;
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                            readonly "3": {
                                                                readonly type: "array";
                                                                readonly uniqueItems: true;
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly outputBox: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly "0": {
                                                                readonly type: "array";
                                                                readonly uniqueItems: true;
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                            readonly "1": {
                                                                readonly type: "array";
                                                                readonly uniqueItems: true;
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                            readonly "2": {
                                                                readonly type: "array";
                                                                readonly uniqueItems: true;
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                            readonly "3": {
                                                                readonly type: "array";
                                                                readonly uniqueItems: true;
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly outputImage: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly front: {
                                        readonly type: "string";
                                        readonly description: "Secure image token";
                                        readonly minLength: 1;
                                    };
                                    readonly back: {
                                        readonly type: "string";
                                        readonly description: "Secure image token";
                                        readonly minLength: 1;
                                    };
                                    readonly face: {
                                        readonly type: "string";
                                        readonly description: "Secure image token";
                                        readonly minLength: 1;
                                    };
                                };
                            };
                            readonly outputFile: {
                                readonly type: "array";
                                readonly description: "Contains contract generated or audit reports";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "File description \"Transsaction Audit Report\" or \"Template Name + Template ID\" ";
                                        };
                                        readonly fileName: {
                                            readonly type: "string";
                                            readonly description: "File name";
                                        };
                                        readonly fileUrl: {
                                            readonly type: "string";
                                            readonly description: "Download URL";
                                        };
                                    };
                                };
                            };
                            readonly warning: {
                                readonly type: "array";
                                readonly minItems: 1;
                                readonly uniqueItems: true;
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly code: {
                                            readonly type: "string";
                                            readonly minLength: 1;
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly minLength: 1;
                                        };
                                        readonly severity: {
                                            readonly type: "string";
                                            readonly minLength: 1;
                                        };
                                        readonly confidence: {
                                            readonly type: "number";
                                        };
                                        readonly decision: {
                                            readonly type: "string";
                                        };
                                        readonly data: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                    };
                                };
                            };
                            readonly missingFields: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly profileId: {
                                readonly type: "string";
                                readonly minLength: 1;
                            };
                            readonly reviewScore: {
                                readonly type: "number";
                            };
                            readonly rejectScore: {
                                readonly type: "number";
                            };
                            readonly decision: {
                                readonly type: "string";
                                readonly minLength: 1;
                            };
                            readonly customData: {
                                readonly type: "string";
                                readonly minLength: 1;
                            };
                            readonly createdAt: {
                                readonly type: "number";
                                readonly description: "Timestamp when the transaction was created";
                            };
                            readonly updatedAt: {
                                readonly type: "number";
                                readonly description: "Timestamp when decision was manually updated";
                            };
                        };
                    };
                };
            };
            readonly "x-examples": {
                readonly "example-1": {
                    readonly limit: 5;
                    readonly offset: 0;
                    readonly total: 2;
                    readonly transactions: readonly [{
                        readonly id: "60c16f8d74334f0fd2747339";
                        readonly data: {
                            readonly fieldKey: readonly [{
                                readonly value: "123 Example Street";
                                readonly confidence: 0.993;
                                readonly source: "visual";
                                readonly index: 0;
                                readonly inputBox: readonly [readonly [568, 686], readonly [825, 687], readonly [825, 716], readonly [568, 715]];
                                readonly outputBox: readonly [readonly [457, 552], readonly [664, 553], readonly [664, 576], readonly [457, 575]];
                            }];
                        };
                        readonly outputImage: {
                            readonly front: "https://127.0.0.1/image/60c16f8d74334f0fd2747339/daafbbd35f13e7113dfea62501eb07d1bf6c9e930c33b052d19c4ecb9d3d4ae0/front.jpg";
                        };
                        readonly warning: readonly [{
                            readonly code: "IMAGE_EDITED";
                            readonly description: "The front document image contains exif header indicating that it was edited in GIMP 2.10.24.";
                            readonly severity: "medium";
                            readonly confidence: 1;
                        }];
                        readonly missingFields: readonly ["someField"];
                        readonly profileId: "60c1627340a09ce39d8bf48f";
                        readonly reviewScore: 1;
                        readonly rejectScore: 0;
                        readonly decision: "review";
                        readonly customData: "abc";
                        readonly createdAt: 1623288702;
                        readonly updatedAt: 0;
                    }];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTransactionTransactionid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Transaction ID";
                };
            };
            readonly required: readonly ["transactionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly key: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                    readonly confidence: {
                                        readonly type: "number";
                                    };
                                    readonly source: {
                                        readonly type: "string";
                                    };
                                    readonly index: {
                                        readonly type: "integer";
                                    };
                                    readonly inputBox: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "integer";
                                        };
                                    };
                                    readonly outputBox: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "integer";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly outputImage: {
                    readonly type: "object";
                    readonly properties: {
                        readonly front: {
                            readonly type: "string";
                        };
                        readonly back: {
                            readonly type: "string";
                        };
                        readonly face: {
                            readonly type: "string";
                        };
                    };
                };
                readonly outputFile: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly fileName: {
                                readonly type: "string";
                            };
                            readonly fileUrl: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly warning: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly severity: {
                                readonly type: "string";
                            };
                            readonly confidence: {
                                readonly type: "number";
                            };
                            readonly decision: {
                                readonly type: "string";
                            };
                            readonly data: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly address: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly alias: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly birthplace: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly database: {
                                        readonly type: "string";
                                    };
                                    readonly documentnumber: {
                                        readonly type: "string";
                                    };
                                    readonly entity: {
                                        readonly type: "string";
                                    };
                                    readonly fullname: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly nationality: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly note: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly schema: {
                                        readonly type: "string";
                                    };
                                    readonly source: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly status: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly time: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
                readonly missingFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly profileId: {
                    readonly type: "string";
                };
                readonly reviewScore: {
                    readonly type: "integer";
                };
                readonly rejectScore: {
                    readonly type: "integer";
                };
                readonly decision: {
                    readonly type: "string";
                };
                readonly createdAt: {
                    readonly type: "integer";
                };
                readonly updatedAt: {
                    readonly type: "integer";
                };
            };
            readonly "x-examples": {
                readonly "Example 1": {
                    readonly id: "abf22fde81b046c989291c9bc5b672a1";
                    readonly data: {
                        readonly address1: readonly [{
                            readonly value: "2570 24TH STREET";
                            readonly confidence: 0.99;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [343, 315], readonly [570, 315], readonly [570, 340], readonly [343, 340]];
                            readonly outputBox: readonly [readonly [343, 315], readonly [570, 315], readonly [570, 340], readonly [343, 340]];
                        }];
                        readonly address2: readonly [{
                            readonly value: "ANYTOWN, CA";
                            readonly confidence: 0.994;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [345, 341], readonly [516, 341], readonly [516, 365], readonly [345, 365]];
                            readonly outputBox: readonly [readonly [345, 341], readonly [516, 341], readonly [516, 365], readonly [345, 365]];
                        }];
                        readonly age: readonly [{
                            readonly value: "46";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                            readonly outputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                        }];
                        readonly countryFull: readonly [{
                            readonly value: "United States";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly countryIso2: readonly [{
                            readonly value: "US";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly countryIso3: readonly [{
                            readonly value: "USA";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly daysFromIssue: readonly [{
                            readonly value: "5300";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                            readonly outputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                        }];
                        readonly daysToExpiry: readonly [{
                            readonly value: "-3474";
                            readonly confidence: 0.992;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                            readonly outputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                        }];
                        readonly dob: readonly [{
                            readonly value: "1977-08-31";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                            readonly outputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                        }];
                        readonly dobDay: readonly [{
                            readonly value: "31";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                            readonly outputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                        }];
                        readonly dobMonth: readonly [{
                            readonly value: "8";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                            readonly outputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                        }];
                        readonly dobYear: readonly [{
                            readonly value: "1977";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                            readonly outputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                        }];
                        readonly document: readonly [{
                            readonly value: "";
                            readonly confidence: 0.6971232295036316;
                            readonly index: 0;
                        }];
                        readonly documentNumber: readonly [{
                            readonly value: "03062567";
                            readonly confidence: 0.955;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [385, 152], readonly [603, 152], readonly [603, 188], readonly [385, 188]];
                            readonly outputBox: readonly [readonly [385, 152], readonly [603, 152], readonly [603, 188], readonly [385, 188]];
                        }];
                        readonly documentSide: readonly [{
                            readonly value: "FRONT";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly documentType: readonly [{
                            readonly value: "D";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly endorsement: readonly [{
                            readonly value: "NONE";
                            readonly confidence: 0.989;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 207], readonly [655, 207], readonly [655, 231], readonly [655, 231]];
                            readonly outputBox: readonly [readonly [655, 207], readonly [655, 207], readonly [655, 231], readonly [655, 231]];
                        }];
                        readonly expiry: readonly [{
                            readonly value: "2014-08-31";
                            readonly confidence: 0.992;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                            readonly outputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                        }];
                        readonly expiryDay: readonly [{
                            readonly value: "31";
                            readonly confidence: 0.992;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                            readonly outputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                        }];
                        readonly expiryMonth: readonly [{
                            readonly value: "8";
                            readonly confidence: 0.992;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                            readonly outputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                        }];
                        readonly expiryYear: readonly [{
                            readonly value: "2014";
                            readonly confidence: 0.992;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                            readonly outputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                        }];
                        readonly face: readonly [{
                            readonly value: "";
                            readonly confidence: 1;
                            readonly index: 0;
                        }, {
                            readonly value: "";
                            readonly confidence: 0.8092089666253984;
                            readonly index: 0;
                        }];
                        readonly firstName: readonly [{
                            readonly value: "UMAR";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [388, 286], readonly [474, 286], readonly [474, 313], readonly [388, 313]];
                            readonly outputBox: readonly [readonly [388, 286], readonly [474, 286], readonly [474, 313], readonly [388, 313]];
                        }];
                        readonly fullName: readonly [{
                            readonly value: "UMAR HAMMAMI";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [388, 245], readonly [557, 245], readonly [557, 313], readonly [388, 313]];
                            readonly outputBox: readonly [readonly [388, 245], readonly [557, 245], readonly [557, 313], readonly [388, 313]];
                        }];
                        readonly hairColor: readonly [{
                            readonly value: "BRN";
                            readonly confidence: 0.998;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 506], readonly [655, 506], readonly [655, 528], readonly [655, 528]];
                            readonly outputBox: readonly [readonly [655, 506], readonly [655, 506], readonly [655, 528], readonly [655, 528]];
                        }];
                        readonly height: readonly [{
                            readonly value: "5'-05\"";
                            readonly confidence: 0.944;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [508, 532], readonly [578, 532], readonly [578, 557], readonly [508, 557]];
                            readonly outputBox: readonly [readonly [508, 532], readonly [578, 532], readonly [578, 557], readonly [508, 557]];
                        }];
                        readonly internalId: readonly [{
                            readonly value: "1739";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly issued: readonly [{
                            readonly value: "2009-08-31";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                            readonly outputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                        }];
                        readonly issuedDay: readonly [{
                            readonly value: "31";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                            readonly outputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                        }];
                        readonly issuedMonth: readonly [{
                            readonly value: "8";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                            readonly outputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                        }];
                        readonly issuedYear: readonly [{
                            readonly value: "2009";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                            readonly outputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                        }];
                        readonly lastName: readonly [{
                            readonly value: "HAMMAMI";
                            readonly confidence: 0.996;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [388, 245], readonly [557, 245], readonly [557, 277], readonly [388, 277]];
                            readonly outputBox: readonly [readonly [388, 245], readonly [557, 245], readonly [557, 277], readonly [388, 277]];
                        }];
                        readonly nationalityFull: readonly [{
                            readonly value: "United States";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly nationalityIso2: readonly [{
                            readonly value: "US";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly nationalityIso3: readonly [{
                            readonly value: "USA";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly postcode: readonly [{
                            readonly value: "403062567";
                            readonly confidence: 0.955;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [385, 152], readonly [603, 152], readonly [603, 188], readonly [385, 188]];
                            readonly outputBox: readonly [readonly [385, 152], readonly [603, 152], readonly [603, 188], readonly [385, 188]];
                        }];
                        readonly restrictions: readonly [{
                            readonly value: "NONE";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [415, 414], readonly [485, 414], readonly [485, 438], readonly [415, 438]];
                            readonly outputBox: readonly [readonly [415, 414], readonly [485, 414], readonly [485, 438], readonly [415, 438]];
                        }];
                        readonly sex: readonly [{
                            readonly value: "F";
                            readonly confidence: 0.996;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [506, 505], readonly [521, 505], readonly [521, 529], readonly [506, 529]];
                            readonly outputBox: readonly [readonly [506, 505], readonly [521, 505], readonly [521, 529], readonly [506, 529]];
                        }];
                        readonly signature: readonly [{
                            readonly value: "";
                            readonly confidence: 0.8522607088088989;
                            readonly index: 0;
                        }];
                        readonly stateFull: readonly [{
                            readonly value: "California";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly stateShort: readonly [{
                            readonly value: "CA";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly vehicleClass: readonly [{
                            readonly value: "C";
                            readonly confidence: 0.998;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 141], readonly [655, 141], readonly [655, 166], readonly [655, 166]];
                            readonly outputBox: readonly [readonly [655, 141], readonly [655, 141], readonly [655, 166], readonly [655, 166]];
                        }];
                        readonly weight: readonly [{
                            readonly value: "125";
                            readonly confidence: 0.998;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 534], readonly [655, 534], readonly [655, 557], readonly [655, 557]];
                            readonly outputBox: readonly [readonly [655, 534], readonly [655, 534], readonly [655, 557], readonly [655, 557]];
                        }];
                    };
                    readonly outputImage: {
                        readonly front: "a49b3ffc6b0ac99b9fb6589ceb7bff1f6c983d5a0929a840da62553ae1a43bf5";
                        readonly face: "eb8489ec83539193075faebf040a85dd6cdaa3b7025f02f4b9e53d29c5b9e006";
                    };
                    readonly outputFile: readonly [{
                        readonly name: "Transaction Audit Report";
                        readonly fileName: "transaction-audit-report_jbCV4jEoq5obj9TPG4aThOyRaNni5nr9.pdf";
                        readonly fileUrl: "https://api2-eu.idanalyzer.com/filevault/transaction-audit-report_jbCV4jEoq5obj9TPG4aThOyRaNni5nr9.pdf";
                    }];
                    readonly warning: readonly [{
                        readonly code: "IP_COUNTRY_MISMATCH";
                        readonly description: "Inconsistency between user IP address country (TW) and document country (US).";
                        readonly severity: "low";
                        readonly confidence: 1;
                        readonly decision: "accept";
                    }, {
                        readonly code: "MISSING_EYE_COLOR";
                        readonly description: "Eye color is missing or cannot be read.";
                        readonly severity: "low";
                        readonly confidence: 1;
                        readonly decision: "accept";
                    }, {
                        readonly code: "DOCUMENT_EXPIRED";
                        readonly description: "Document has already expired.";
                        readonly severity: "high";
                        readonly confidence: 0.992;
                        readonly decision: "reject";
                    }, {
                        readonly code: "INVALID_CAMERA_PERSPECTIVE";
                        readonly description: "The document image is not a naturally taken photo using a camera, it could be scanned or computer generated.";
                        readonly severity: "medium";
                        readonly confidence: 0.5;
                        readonly decision: "review";
                    }, {
                        readonly code: "FAKE_ID";
                        readonly description: "The document uploaded is a fake or sample document, not an authentic document. Matching keyword from database.";
                        readonly severity: "high";
                        readonly confidence: 1;
                        readonly decision: "reject";
                    }, {
                        readonly code: "IMAGE_EDITED";
                        readonly description: "The front document image contains exif header indicating that it was edited in Adobe Photoshop 25.5.";
                        readonly severity: "medium";
                        readonly confidence: 1;
                        readonly decision: "review";
                    }, {
                        readonly code: "AML_SANCTION";
                        readonly description: "Potential match from AML sanction database.";
                        readonly severity: "medium";
                        readonly confidence: 1;
                        readonly decision: "review";
                        readonly data: {
                            readonly address: readonly ["Somalia"];
                            readonly alias: readonly ["Abu Mansour Al-Amriki", "Umar Hammami", "Abu Maansuur Al-Amriki", "Abu Mansuur Al-Amriki", "Abu Mansur Al-Amriki"];
                            readonly birthplace: readonly ["Alabama, United States"];
                            readonly database: "au_dfat";
                            readonly documentnumber: any;
                            readonly entity: "person";
                            readonly fullname: readonly ["Omar Hammami"];
                            readonly nationality: readonly ["US"];
                            readonly note: readonly ["Also believed to hold Syrian nationality. Passport: 403062567 (US). Social Security Number: 423-31-3021 (US).  Married to a Somali woman. Lived in Egypt in 2005 and moved to Somalia in 2009"];
                            readonly schema: "sanction";
                            readonly source: readonly ["http://dfat.gov.au/international-relations/security/sanctions/Pages/sanctions.aspx"];
                            readonly status: readonly ["Listed by UN 751 Committee on 28 July 2011"];
                            readonly time: "2012-02-27T07:00:00+08:00";
                        };
                    }, {
                        readonly code: "AML_SANCTION";
                        readonly description: "Potential match from AML sanction database.";
                        readonly severity: "medium";
                        readonly confidence: 1;
                        readonly decision: "review";
                        readonly data: {
                            readonly alias: readonly ["Abu Mansur AL-AMRIKI", "Omar Shafik HAMMAMI", "Abu Mansour AL-AMRIKI", "Farouq", "Abu Mansuur AL-AMRIKI", "Farouk", "Umar HAMMAMI"];
                            readonly birthplace: readonly ["Alabama, USA"];
                            readonly database: "us_ofac";
                            readonly documentnumber: "[{\"id\":\"403062567\",\"id_formatted\":\"403062567\",\"country\":\"us\",\"type\":\"P\"},{\"id\":\"423-31-3021\",\"id_formatted\":\"423313021\",\"country\":\"us\",\"type\":\"I\"}]";
                            readonly entity: "person";
                            readonly fullname: readonly ["Omar HAMMAMI"];
                            readonly nationality: readonly ["US"];
                            readonly note: readonly ["Unknown"];
                            readonly program: readonly ["SDN List"];
                            readonly schema: "sanction";
                            readonly source: readonly ["https://www.treasury.gov/resource-center/sanctions/Pages/default.aspx"];
                            readonly time: "2011-07-29T06:00:00+08:00";
                        };
                    }, {
                        readonly code: "IMAGE_FORGERY";
                        readonly description: "The document image possibly contains forged elements which warrants a manual review or rejection.";
                        readonly severity: "high";
                        readonly confidence: 0.9515808820724487;
                        readonly decision: "review";
                    }, {
                        readonly code: "FACE_LIVENESS_ERR";
                        readonly description: "Selfie photo liveness verification failed.";
                        readonly severity: "high";
                        readonly confidence: 0.6584155559539795;
                        readonly decision: "reject";
                    }, {
                        readonly code: "FACE_IDENTICAL";
                        readonly description: "Selfie photo appears to be the exact same photo as document photo.";
                        readonly severity: "medium";
                        readonly confidence: 1;
                        readonly decision: "review";
                    }, {
                        readonly code: "GLARE_DETECTED";
                        readonly description: "The document image contains possible glare.";
                        readonly severity: "low";
                        readonly confidence: 1;
                        readonly decision: "review";
                    }];
                    readonly missingFields: readonly ["eyeColor"];
                    readonly profileId: "3ed13669b87f48e3bf884f02534e430b";
                    readonly reviewScore: 7;
                    readonly rejectScore: 3;
                    readonly decision: "reject";
                    readonly createdAt: 1709675065;
                    readonly updatedAt: 0;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWebhook: {
    readonly body: {
        readonly type: "object";
        readonly additionalProperties: true;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items returned per call";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Start from a particular entry";
                };
                readonly order: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort results by newest(-1) or oldest(1)";
                };
                readonly event: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter result by event name";
                };
                readonly success: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter result by success status";
                };
                readonly createdAtMin: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List transactions that were created after this timestamp";
                };
                readonly createdAtMax: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List transactions that were created before this timestamp";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Return item limit per call";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly description: "Current cursor offset";
                };
                readonly nextOffset: {
                    readonly type: "number";
                    readonly description: "Current cursor offset";
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "Total number of transactions";
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                            readonly event: {
                                readonly type: "string";
                            };
                            readonly success: {
                                readonly type: "boolean";
                            };
                            readonly createdAt: {
                                readonly type: "integer";
                            };
                            readonly lastAttempt: {
                                readonly type: "integer";
                            };
                            readonly errorMessage: {
                                readonly type: "string";
                            };
                            readonly canResend: {
                                readonly type: "boolean";
                            };
                        };
                    };
                };
            };
            readonly "x-examples": {
                readonly "example-1": {
                    readonly limit: 5;
                    readonly offset: 0;
                    readonly total: 2;
                    readonly transactions: readonly [{
                        readonly id: "60c16f8d74334f0fd2747339";
                        readonly data: {
                            readonly fieldKey: readonly [{
                                readonly value: "123 Example Street";
                                readonly confidence: 0.993;
                                readonly source: "visual";
                                readonly index: 0;
                                readonly inputBox: readonly [readonly [568, 686], readonly [825, 687], readonly [825, 716], readonly [568, 715]];
                                readonly outputBox: readonly [readonly [457, 552], readonly [664, 553], readonly [664, 576], readonly [457, 575]];
                            }];
                        };
                        readonly outputImage: {
                            readonly front: "https://127.0.0.1/image/60c16f8d74334f0fd2747339/daafbbd35f13e7113dfea62501eb07d1bf6c9e930c33b052d19c4ecb9d3d4ae0/front.jpg";
                        };
                        readonly warning: readonly [{
                            readonly code: "IMAGE_EDITED";
                            readonly description: "The front document image contains exif header indicating that it was edited in GIMP 2.10.24.";
                            readonly severity: "medium";
                            readonly confidence: 1;
                        }];
                        readonly missingFields: readonly ["someField"];
                        readonly profileId: "60c1627340a09ce39d8bf48f";
                        readonly reviewScore: 1;
                        readonly rejectScore: 0;
                        readonly decision: "review";
                        readonly customData: "abc";
                        readonly createdAt: 1623288702;
                        readonly updatedAt: 0;
                    }];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchTransactionTransactionid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly decision: {
                readonly type: "string";
                readonly minLength: 1;
                readonly examples: readonly ["reject"];
            };
        };
        readonly required: readonly ["decision"];
        readonly "x-examples": {
            readonly "example-1": {
                readonly decision: "reject";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Transaction ID";
                };
            };
            readonly required: readonly ["transactionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                };
            };
            readonly required: readonly ["success"];
            readonly "x-examples": {
                readonly "example-1": {
                    readonly success: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostAml: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Search AML database with person's name or business name";
            };
            readonly idNumber: {
                readonly type: "string";
                readonly description: "Search AML database with document number";
            };
            readonly entity: {
                readonly type: "integer";
                readonly description: "0=Person, 1=Corporation/Legal Entity";
            };
            readonly country: {
                readonly type: "string";
                readonly description: "Return only entities with matching country/nationality or no country information. Use two digit ISO country code.";
            };
            readonly database: {
                readonly type: "array";
                readonly description: "If unspecified all databases will be searched, alternatively you may specify one or more databases to search in: \"au_dfat\",\"ca_dfatd\",\"ch_seco\",\"eu_cor\",\"eu_fsf\",\"eu_meps\",\"global_politicians\",\"fr_tresor_gels_avoir\",\"gb_hmt\",\"interpol_red\",\"ua_sfms\",\"un_sc\",\"us_ofac\"";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly "x-examples": {
            readonly "example-1": {
                readonly profile: "60c1627340a09ce39d8bf48f";
                readonly document: "";
                readonly documentBack: "";
                readonly face: "";
                readonly acceptedCountry: "US,CA";
                readonly acceptedState: "CA,TX";
                readonly acceptedType: "PI";
                readonly verifyName: "";
                readonly verifyDob: "";
                readonly verifyAge: "";
                readonly verifyAddress: "";
                readonly verifyPostcode: "";
                readonly verifyDocumentNumber: "";
                readonly ip: "user";
                readonly customData: "abc";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly match: {
                    readonly type: "array";
                    readonly minItems: 1;
                    readonly uniqueItems: true;
                    readonly items: {};
                };
                readonly executionTime: {
                    readonly type: "number";
                };
            };
            readonly required: readonly ["match"];
            readonly "x-examples": {
                readonly "example-1": {
                    readonly match: readonly [{
                        readonly address: readonly ["Believed status/location: Sultanate of Oman, Sultanate of Oman"];
                        readonly birthplace: readonly ["Tripoli, Libya"];
                        readonly database: "un_sc";
                        readonly dob: readonly ["1970"];
                        readonly documentnumber: any;
                        readonly entity: "person";
                        readonly fullname: readonly ["MOHAMMED"];
                        readonly note: readonly ["Listed pursuant to paragraphs 15 and 17 of resolution 1970 (Travel Ban,\nAsset Freeze). INTERPOL-UN Security Council Special Notice web link: https://www.interpol.int/en/How-we-work/Notices/View-UN-Notices-Individuals"];
                        readonly program: readonly ["Libya (LYi.012)"];
                        readonly schema: "sanction";
                        readonly source: readonly ["https://www.un.org/securitycouncil/sanctions/information"];
                        readonly time: "2014-09-26T06:00:00+08:00";
                    }, {
                        readonly address: readonly ["location since 2015, Syrian Arab Republic"];
                        readonly birthplace: readonly ["Indonesia"];
                        readonly database: "un_sc";
                        readonly dob: readonly ["1978-10-11"];
                        readonly documentnumber: any;
                        readonly entity: "person";
                        readonly fullname: readonly ["MOHAMMED"];
                        readonly nationality: readonly ["ID"];
                        readonly note: readonly ["Senior member of Islamic State in Iraq and the Levant (ISIL), listed as Al-Qaida in Iraq (QDe.115). Recruited for ISIL and instructed individuals to perpetrate terrorist acts via online video. Physical description: hair colour: black; build: slight. Speaks Indonesian, Arabic and Mindanao  dialect. INTERPOL-UN Security Council Special Notice web link: https://www.interpol.int/en/How-we-work/Notices/View-UN-Notices-Individuals"];
                        readonly program: readonly ["Al-Qaida (QDi.416)"];
                        readonly schema: "sanction";
                        readonly source: readonly ["https://www.un.org/securitycouncil/sanctions/information"];
                        readonly time: any;
                    }];
                    readonly executionTime: 0.047844828;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostContract: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Name of template";
            };
            readonly content: {
                readonly type: "string";
                readonly description: "HTML content";
            };
            readonly orientation: {
                readonly type: "string";
                readonly description: "0=Portrait(Default) 1=Landscape";
            };
            readonly font: {
                readonly type: "string";
                readonly description: "Google font name";
            };
            readonly timezone: {
                readonly type: "string";
                readonly description: "TZ Database Name";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly templateId: {
                    readonly type: "string";
                    readonly description: "Created template ID";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostContractTemplateId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
            };
            readonly content: {
                readonly type: "string";
            };
            readonly orientation: {
                readonly type: "string";
            };
            readonly font: {
                readonly type: "string";
            };
            readonly timezone: {
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly templateId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Template ID";
                };
            };
            readonly required: readonly ["templateId"];
        }];
    };
};
declare const PostDocupass: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly version: {
                readonly type: "string";
                readonly description: "| Version | Description |\r\n|--|--|\r\n| `3` | Latest Docupass version with improved UI, security and more languages supports. |\r\n| `2` | Deprecated Docupass version. |\r\n\r\nIf no version parameter is not provided, a version 2 Docupass link will be generated for compatability. On August 1st 2024, the default version will be switched to the newest version 3.";
            };
            readonly profile: {
                readonly type: "string";
                readonly description: "Custom KYC Profile ID, make sure to edit the Docupass section under the profile, you may also add a webhook to receive information when user completes Docupass.";
            };
            readonly mode: {
                readonly type: "integer";
                readonly description: "| Value | Features |\n| --- | --- |\n| `0`   | ID verification + Face verification against uploaded ID |\n| `1`   | ID verification only |\n| `2`   | Face verification only (must supply `referenceFace` image) |\n| `3`   | e-Signature only (must supply `contractSign` template ID) |\n\nNote. If `contractSign` parameter is supplifed, e-Signature will be obtained after user has completed all verifications required, using any of the modes.";
            };
            readonly customData: {
                readonly type: "string";
                readonly description: "Any arbitary customer data you want to include with this Docupass transaction, for example, database id of your user.";
            };
            readonly contractSign: {
                readonly type: "string";
                readonly description: "Generate a document using information from uploaded ID, and have the user review and sign the document after identity verification. Required for mode=3.";
            };
            readonly userPhone: {
                readonly type: "string";
                readonly description: "Supply user phone number for verification, must enable phoneVerification in profile settings. If no number is provided, users will be asked to enter their phone number for verification.";
            };
            readonly verifyAddress: {
                readonly type: "string";
                readonly description: "User must present ID matching the address provided";
            };
            readonly verifyDocumentNumber: {
                readonly type: "string";
                readonly description: "User must present ID matching the document number provided";
            };
            readonly verifyAge: {
                readonly type: "string";
                readonly description: "User must be between the specified age to pass verification.";
            };
            readonly verifyName: {
                readonly type: "string";
                readonly description: "User must present ID matching the name provided";
            };
            readonly verifyDOB: {
                readonly type: "string";
                readonly description: "User must present ID matching the date of birth provided. For example, \"20-40\", a warning will be trigger if age is under 20 or over 40.";
            };
            readonly verifyPostcode: {
                readonly type: "string";
                readonly description: "User must present ID matching the postcode provided";
            };
            readonly language: {
                readonly type: "string";
                readonly description: "Docupass will auto detect and display language based on end-user system, to override this you can provide a language code.\r\n\r\n| Code | Language |\r\n|--|--|\r\n| en | English |\r\n| tw | 繁體中文 |\r\n| cn | 简体中文 |\r\n| fr | Français |\r\n| nl | Nederlands |\r\n| de | Deutsch |\r\n| es | Español |\r\n| ja | 日本語 |\r\n| ko | 한국어 |\r\n| tl | Tagalog |\r\n| th | ภาษาไทย |\r\n| id | Bahasa Indonesia |\r\n| vi | Tiếng Việt |\r\n| hi | हिन्दी |\r\n| pt | Português |\r\n| ar | العربية |\r\n| bn | বাংলা |\r\n| ur | اردو |";
            };
            readonly contractGenerate: {
                readonly type: "string";
                readonly description: "Generate up to 5 documents using information from uploaded ID, without user reviewing or signing the document.";
            };
            readonly contractFormat: {
                readonly type: "string";
                readonly description: "`PDF` `DOCX` `HTML`";
            };
            readonly contractPrefill: {
                readonly type: "object";
                readonly description: "JSON data in key-value pairs to autofill dynamic fields, data from user ID will be used first in case of a conflict. For example, passing `{\"myparameter\":\"abc\"}` would fill `%{myparameter}` in contract template with \"abc\".";
                readonly additionalProperties: true;
            };
            readonly referenceDocumentBack: {
                readonly type: "string";
                readonly description: "Base64 encoded document back image, if supplied, no document back image will be captured.";
            };
            readonly referenceDocument: {
                readonly type: "string";
                readonly description: "Base64 encoded document image, if supplied, no document front image will be captured.";
            };
            readonly referenceFace: {
                readonly type: "string";
                readonly description: "Base64 encoded face image, if supplied, no face image will be captured. Required for face verification only mode without uploading documents.";
            };
            readonly profileOverride: {
                readonly type: "object";
                readonly description: "Override one or more parameters on the existing profile, the object should be JSON style object adhereing to Get KYC Profile API response.";
                readonly additionalProperties: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly reference: {
                    readonly type: "string";
                    readonly description: "Docupass Unique Reference Code";
                };
                readonly url: {
                    readonly type: "string";
                    readonly description: "Docupass Link URL";
                };
                readonly urlSign: {
                    readonly type: "object";
                    readonly description: "Only applicable under Multi-party eSignature mode";
                    readonly additionalProperties: {
                        readonly type: "string";
                    };
                };
                readonly expiry: {
                    readonly type: "integer";
                    readonly description: "Timestamp for Docupass link expiry";
                };
                readonly customData: {
                    readonly type: "string";
                };
                readonly qrCode: {
                    readonly type: "string";
                    readonly description: "Base64 encoded QR Code image";
                };
                readonly quota: {
                    readonly type: "integer";
                    readonly description: "Remaining API Quota";
                };
                readonly credit: {
                    readonly type: "integer";
                    readonly description: "Remaining Test Credits";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostExportTransaction: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly exportType: {
                readonly type: "string";
                readonly description: "csv or json";
            };
            readonly ignoreUnrecognized: {
                readonly type: "boolean";
                readonly description: "Ignore unrecognized documents";
            };
            readonly ignoreDuplicate: {
                readonly type: "boolean";
                readonly description: "Ignore duplicated entries";
            };
            readonly transactionId: {
                readonly type: "array";
                readonly description: "List of transaction to export";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly customData: {
                readonly type: "string";
                readonly description: "If not transaction ID is specified, filter by customData";
            };
            readonly profileId: {
                readonly type: "string";
                readonly description: "If not transaction ID is specified, filter by profile ID";
            };
            readonly decision: {
                readonly type: "string";
                readonly description: "If not transaction ID is specified, filter by decision";
            };
            readonly createdAtMin: {
                readonly type: "string";
                readonly description: "If not transaction ID is specified, filter time range";
            };
            readonly createdAtMax: {
                readonly type: "string";
                readonly description: "If not transaction ID is specified, filter time range";
            };
            readonly docupass: {
                readonly type: "string";
                readonly description: "If not transaction ID is specified, filter docupass reference";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                };
                readonly url: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostFace: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly reference: {
                readonly type: "string";
                readonly description: "Reference Image in base64 or remote URL. You may also reference image from another transaction by passing \"ref:abcde\" where abcde is the output image reference.";
            };
            readonly face: {
                readonly type: "string";
                readonly description: "Selfie photo in base64 or URL, you can provide multiple frames of images captured continuously by separating each image with a comma (,). You may also reference image from another transaction by passing \"ref:abcde\" where abcde is the output image reference.";
            };
            readonly faceVideo: {
                readonly type: "string";
                readonly description: "Selfie video in base64 or remote URL";
            };
            readonly profile: {
                readonly type: "string";
                readonly description: "Profile ID";
            };
            readonly profileOverride: {
                readonly type: "string";
                readonly description: "Override any particular setting on the existing profile";
            };
            readonly customData: {
                readonly type: "string";
                readonly description: "Any arbitrary string you wish to save with the transaction. e.g Internal customer reference number ";
            };
        };
        readonly required: readonly ["reference", "face", "faceVideo", "profile"];
        readonly "x-examples": {
            readonly "example-1": {
                readonly profile: "profileid";
                readonly reference: "";
                readonly face: "";
                readonly faceVideo: "";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
};
declare const PostGenerate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly templateId: {
                readonly type: "string";
                readonly description: "Template ID";
                readonly examples: readonly ["60c1627340a09ce39d8bf48f"];
            };
            readonly format: {
                readonly type: "string";
                readonly description: "PDF, DOCX or HTML";
            };
            readonly transactionId: {
                readonly type: "string";
                readonly description: "Fill the template with data from specified transaction";
            };
            readonly fillData: {
                readonly type: "object";
                readonly description: "JSON data in key-value pairs to autofill dynamic fields, data from user ID will be used first in case of a conflict. For example, passing {\"myparameter\":\"abc\"} would fill %{myparameter} in contract template with \"abc\".";
                readonly additionalProperties: true;
            };
        };
        readonly required: readonly ["templateId", "format"];
        readonly "x-examples": {
            readonly "example-1": {
                readonly profile: "60c1627340a09ce39d8bf48f";
                readonly document: "";
                readonly documentBack: "";
                readonly face: "";
                readonly acceptedCountry: "US,CA";
                readonly acceptedState: "CA,TX";
                readonly acceptedType: "PI";
                readonly verifyName: "";
                readonly verifyDob: "";
                readonly verifyAge: "";
                readonly verifyAddress: "";
                readonly verifyPostcode: "";
                readonly verifyDocumentNumber: "";
                readonly ip: "user";
                readonly customData: "abc";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                };
                readonly outputFile: {
                    readonly type: "array";
                    readonly minItems: 1;
                    readonly uniqueItems: true;
                    readonly items: {};
                };
                readonly executionTime: {
                    readonly type: "number";
                };
            };
            readonly required: readonly ["outputFile"];
            readonly "x-examples": {
                readonly "example-1": {
                    readonly success: true;
                    readonly outputFile: readonly [{
                        readonly name: "Template Name";
                        readonly fileName: "template_U7vBqo6ZnZ4jrUAZg4ef78aQsUzVjEgi.pdf";
                        readonly fileUrl: "https://api.example.com/filevault/template_U7vBqo6ZnZ4jrUAZg4ef78aQsUzVjEgi.pdf";
                    }];
                    readonly executionTime: 7.382889638;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostLiveness: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly face: {
                readonly type: "string";
                readonly description: "Reference Image in base64 or remote URL";
            };
            readonly faceVideo: {
                readonly type: "string";
                readonly description: "Selfie video in base64 or remote URL";
            };
            readonly profile: {
                readonly type: "string";
                readonly description: "Profile ID";
            };
            readonly profileOverride: {
                readonly type: "object";
                readonly description: "Override any particular setting on the existing profile";
                readonly additionalProperties: true;
            };
            readonly customData: {
                readonly type: "string";
                readonly description: "Any arbitrary string you wish to save with the transaction. e.g Internal customer reference number ";
            };
        };
        readonly required: readonly ["profile"];
        readonly "x-examples": {
            readonly "example-1": {
                readonly profile: "";
                readonly face: "";
                readonly faceVideo: "";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
};
declare const PostProfile: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Profile Name";
                readonly minLength: 1;
                readonly examples: readonly ["My Profile"];
            };
            readonly canvasSize: {
                readonly type: "number";
                readonly description: "Canvas Size in pixels, input image larger than this size will be scaled down before further processing, reduced image size will improve inference time but reduce result accuracy.";
            };
            readonly orientationCorrection: {
                readonly type: "boolean";
                readonly description: "Correct image orientation for rotated images";
            };
            readonly objectDetection: {
                readonly type: "boolean";
                readonly description: "Enable to automatically detect and return the locations of signature, document and face.";
            };
            readonly AAMVABarcodeParsing: {
                readonly type: "boolean";
                readonly description: "Enable to parse AAMVA barcode for US/CA ID/DL. Disable this to improve performance if you are not planning on scanning ID/DL from US or Canada.";
            };
            readonly saveResult: {
                readonly type: "boolean";
                readonly description: "Whether transaction results should be saved";
            };
            readonly saveImage: {
                readonly type: "boolean";
                readonly description: "If saveResult is enabled, whether output images should also be saved on cloud.";
            };
            readonly outputImage: {
                readonly type: "boolean";
                readonly description: "Whether to return output image as part of API response";
            };
            readonly outputType: {
                readonly type: "string";
                readonly description: "Output processed image in either \"base64\" or \"url\".";
                readonly minLength: 1;
            };
            readonly crop: {
                readonly type: "boolean";
                readonly description: "Enable to automatically remove any irrelevant pixels from the uploaded image before saving and outputting the final image. ";
            };
            readonly advancedCrop: {
                readonly type: "boolean";
                readonly description: "Enable to use advanced deskew feature on documents that are sheared.";
            };
            readonly outputSize: {
                readonly type: "number";
                readonly description: "Maximum pixel width/height for output & saved image.";
            };
            readonly inferFullName: {
                readonly type: "boolean";
                readonly description: "Generate a full name field using parsed first name, middle name and last name.";
            };
            readonly splitFirstName: {
                readonly type: "boolean";
                readonly description: "If first name contains more than one word, move second word onwards into middle name field.";
            };
            readonly transactionAuditReport: {
                readonly type: "boolean";
                readonly description: "Enable to generate a detailed PDF audit report for every transaction.";
            };
            readonly timezone: {
                readonly type: "string";
                readonly description: "Set timezone for audit reports. If left blank, UTC will be used. Refer to https://en.wikipedia.org/wiki/List_of_tz_database_time_zones TZ database name list.";
            };
            readonly obscure: {
                readonly type: "array";
                readonly description: "A list of data fields key to be redacted before transaction storage, these fields will also be blurred from output & saved image.";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly webhook: {
                readonly type: "string";
                readonly description: "Enter a server URL to listen for Docupass verification and scan transaction results";
            };
            readonly thresholds: {
                readonly type: "object";
                readonly description: "Control the threshold of Document Validation Components, numbers should be float between 0 to 1.";
                readonly properties: {
                    readonly face: {
                        readonly type: "number";
                        readonly description: "Biometric Verification Threshold";
                    };
                    readonly nameDualSide: {
                        readonly type: "number";
                        readonly description: "Threshold for algorithm to compare names between front and back of the document";
                    };
                    readonly nameVerification: {
                        readonly type: "number";
                        readonly description: "Threshold for string comparision algorithm for customer name verification";
                    };
                    readonly addressVerification: {
                        readonly type: "number";
                        readonly description: "Threshold for string comparision algorithm for customer address verification";
                    };
                    readonly imageForgery: {
                        readonly type: "number";
                        readonly description: "Threshold for AI image forgery model";
                    };
                    readonly textForgery: {
                        readonly type: "number";
                        readonly description: "Threshold for AI text forgery model";
                    };
                    readonly recapture: {
                        readonly type: "number";
                        readonly description: "Threshold for AI image recapture detection model";
                    };
                    readonly screenDetection: {
                        readonly type: "number";
                        readonly description: "Threshold for AI screen object detection model";
                    };
                    readonly lowTextConfidence: {
                        readonly type: "number";
                        readonly description: "Threshold to treat texts as low confidence text";
                    };
                    readonly artificialImage: {
                        readonly type: "number";
                        readonly description: "Threshold for AI artificial image detection model";
                    };
                    readonly artificialText: {
                        readonly type: "number";
                        readonly description: "Threshold for AI artificial text detection model";
                    };
                    readonly faceIdentical: {
                        readonly type: "number";
                        readonly description: "Threshold for checking if selfie is the same photo as the document photo";
                    };
                    readonly smallImage: {
                        readonly type: "number";
                        readonly description: "Threshold to consider the image as too small";
                    };
                    readonly blurryImage: {
                        readonly type: "number";
                        readonly description: "Threshold to consider the image as too blurry";
                    };
                    readonly cameraPerspective: {
                        readonly type: "number";
                        readonly description: "Threshold to detect whether the image is detected as taken naturally using a camera";
                    };
                    readonly faceLiveness: {
                        readonly type: "number";
                        readonly description: "Threshold to detect face representation attacks";
                    };
                    readonly faceRecapture: {
                        readonly type: "number";
                        readonly description: "Threshold to detect recaptured face";
                    };
                    readonly glareDetect: {
                        readonly type: "number";
                        readonly description: "Threshold to detect document affected by glare";
                    };
                };
                readonly required: readonly ["face", "nameDualSide", "nameVerification", "addressVerification", "imageForgery", "textForgery", "recapture", "screenDetection", "lowTextConfidence", "artificialImage", "artificialText", "faceIdentical", "smallImage", "blurryImage", "cameraPerspective", "faceLiveness", "faceRecapture", "glareDetect"];
            };
            readonly decisionTrigger: {
                readonly type: "object";
                readonly description: "For every failed validation";
                readonly properties: {
                    readonly review: {
                        readonly type: "number";
                        readonly description: "If the final total review score is equal to or greater than this value, the final KYC decision will be \"review\"";
                    };
                    readonly reject: {
                        readonly type: "number";
                        readonly description: "If the final total review score is equal to or greater than this value, the final KYC decision will be \"reject\". Reject has higher priority than review.";
                    };
                };
                readonly required: readonly ["review", "reject"];
            };
            readonly decisions: {
                readonly type: "object";
                readonly description: "Enable/Disable and fine-tune how each Document Validation Component affects the final decision.";
                readonly properties: {
                    readonly UNRECOGNIZED_DOCUMENT: {
                        readonly type: "object";
                        readonly description: "Document not recognized.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                                readonly description: "Enable the current Document Validation Component ";
                            };
                            readonly review: {
                                readonly type: "number";
                                readonly description: "If the current validation has failed to pass, and the specified number is greater than or equal to zero, and the confidence of this warning is greater than or equal to the specified value, the \"total review score\" will be added by the weight value.";
                            };
                            readonly reject: {
                                readonly type: "number";
                                readonly description: "If the current validation has failed to pass, and the specified number is greater than or equal to zero, and the confidence of this warning is greater than or equal to the specified value, the \"total reject score\" will be added by the weight value.";
                            };
                            readonly weight: {
                                readonly type: "number";
                                readonly description: "Weight to add to the total review and reject score if the validation has failed to pass.";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly UNRECOGNIZED_BACK_DOCUMENT: {
                        readonly type: "object";
                        readonly description: "Back document not recognized.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly UNRECOGNIZED_BACK_BARCODE: {
                        readonly type: "object";
                        readonly description: "Cannot read barcode from back document, barcode reading requires high resolution focused image.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly INVALID_BACK_DOCUMENT: {
                        readonly type: "object";
                        readonly description: "Document back is invalid.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly SELFIE_FACE_NOT_FOUND: {
                        readonly type: "object";
                        readonly description: "Could not detect face in selfie image.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly SELFIE_MULTIPLE_FACES: {
                        readonly type: "object";
                        readonly description: "Multiple faces detected in selfie image.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly DOCUMENT_FACE_NOT_FOUND: {
                        readonly type: "object";
                        readonly description: "Could not detect face in document image.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly DOCUMENT_FACE_LANDMARK_ERR: {
                        readonly type: "object";
                        readonly description: "Could not calculate facial landmarks for document photo.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly SELFIE_FACE_LANDMARK_ERR: {
                        readonly type: "object";
                        readonly description: "Could not calculate facial landmarks for selfie photo.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly INTERNAL_FACE_VERIFICATION_ERR: {
                        readonly type: "object";
                        readonly description: "Internal server error occurred when verifying faces.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly FACE_MISMATCH: {
                        readonly type: "object";
                        readonly description: "Face mismatch between document photo and selfie photo, similarity score: %.2f.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly FACE_LIVENESS_ERR: {
                        readonly type: "object";
                        readonly description: "Selfie photo liveness verification failed.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly RECAPTURED_FACE: {
                        readonly type: "object";
                        readonly description: "Face appears to be recaptured.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly FACE_IDENTICAL: {
                        readonly type: "object";
                        readonly description: "Selfie photo appears to be the exact same photo as document photo.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly DOCUMENT_COUNTRY_MISMATCH: {
                        readonly type: "object";
                        readonly description: "Issuing country discrepancy between front and back document. Front: %s, Back: %s.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly DOCUMENT_STATE_MISMATCH: {
                        readonly type: "object";
                        readonly description: "Issuing state discrepancy between front and back document. Front: %s, Back: %s.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly DOCUMENT_NAME_MISMATCH: {
                        readonly type: "object";
                        readonly description: "Name discrepancy between front and back document. Front: %s, Back: %s.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly DOCUMENT_DOB_MISMATCH: {
                        readonly type: "object";
                        readonly description: "Birthday discrepancy between front and back document. Front: %s, Back: %s.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_EXPIRY_DATE: {
                        readonly type: "object";
                        readonly description: "Document expiry date is missing or cannot be read. ";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_ISSUE_DATE: {
                        readonly type: "object";
                        readonly description: "Document issue date is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_BIRTH_DATE: {
                        readonly type: "object";
                        readonly description: "Birthday information is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_DOCUMENT_NUMBER: {
                        readonly type: "object";
                        readonly description: "Document number is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_PERSONAL_NUMBER: {
                        readonly type: "object";
                        readonly description: "Personal number or national ID number is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_ADDRESS: {
                        readonly type: "object";
                        readonly description: "Address is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_POSTCODE: {
                        readonly type: "object";
                        readonly description: "Postcode is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_NAME: {
                        readonly type: "object";
                        readonly description: "Given name or family name is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_LOCAL_NAME: {
                        readonly type: "object";
                        readonly description: "Localized name is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_GENDER: {
                        readonly type: "object";
                        readonly description: "Gender is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_HEIGHT: {
                        readonly type: "object";
                        readonly description: "Height is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_WEIGHT: {
                        readonly type: "object";
                        readonly description: "Weight is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_HAIR_COLOR: {
                        readonly type: "object";
                        readonly description: "Hair color is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_EYE_COLOR: {
                        readonly type: "object";
                        readonly description: "Eye color is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_RESTRICTIONS: {
                        readonly type: "object";
                        readonly description: "Driving license restriction is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_VEHICLE_CLASS: {
                        readonly type: "object";
                        readonly description: "Driving license vehicle class is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_ENDORSEMENT: {
                        readonly type: "object";
                        readonly description: "Endorsement is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_BUSINESS_NAME: {
                        readonly type: "object";
                        readonly description: "Business name is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_BUSINESS_NAME_LOCAL: {
                        readonly type: "object";
                        readonly description: "Localized business name is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_BUSINESS_REGISTRATION_NUMBER: {
                        readonly type: "object";
                        readonly description: "Business registration number is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly MISSING_ENTITY_TYPE: {
                        readonly type: "object";
                        readonly description: "Business registration entity type is missing or cannot be read.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly UNDER_18: {
                        readonly type: "object";
                        readonly description: "Document holder is under 18.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly UNDER_19: {
                        readonly type: "object";
                        readonly description: "Document holder is under 19.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly UNDER_20: {
                        readonly type: "object";
                        readonly description: "Document holder is under 20.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly UNDER_21: {
                        readonly type: "object";
                        readonly description: "Document holder is under 21.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly DOCUMENT_EXPIRED: {
                        readonly type: "object";
                        readonly description: "Document has already expired.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly NAME_VERIFICATION_FAILED: {
                        readonly type: "object";
                        readonly description: "Failed to verify document holder's name against supplied name.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly DOB_VERIFICATION_FAILED: {
                        readonly type: "object";
                        readonly description: "Failed to verify document holder's birthday against supplied name.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly AGE_VERIFICATION_FAILED: {
                        readonly type: "object";
                        readonly description: "Failed to verify document holder's age against supplied age range.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly ID_NUMBER_VERIFICATION_FAILED: {
                        readonly type: "object";
                        readonly description: "Failed to verify ID number against supplied ID number.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly ADDRESS_VERIFICATION_FAILED: {
                        readonly type: "object";
                        readonly description: "Failed to verify document holder's address against supplied address.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly POSTCODE_VERIFICATION_FAILED: {
                        readonly type: "object";
                        readonly description: "Failed to verify document holder's postcode against supplied postcode.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly TYPE_NOT_ACCEPTED: {
                        readonly type: "object";
                        readonly description: "This type of document is not on the accepted document type list.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly COUNTRY_NOT_ACCEPTED: {
                        readonly type: "object";
                        readonly description: "This document is issued by a country outside of the accepted country list.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly STATE_NOT_ACCEPTED: {
                        readonly type: "object";
                        readonly description: "This document is issued by a state outside of the accepted state list.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly RECAPTURED_DOCUMENT: {
                        readonly type: "object";
                        readonly description: "The document is possibly recaptured from a screen.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly SCREEN_DETECTED: {
                        readonly type: "object";
                        readonly description: "The document image contains a screen, monitor or mobile device therefore is possibly recaptured.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly IMAGE_FORGERY: {
                        readonly type: "object";
                        readonly description: "The document image possibly contains forged elements which warrants a manual review or rejection.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly FEATURE_VERIFICATION_FAILED: {
                        readonly type: "object";
                        readonly description: "Document features does not match with official document, the document could be fake, blurry or low resolution.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly IMAGE_EDITED: {
                        readonly type: "object";
                        readonly description: "The %s document image contains exif header indicating that it was edited in %s.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly AML_SANCTION: {
                        readonly type: "object";
                        readonly description: "Potential match from AML sanction database.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly AML_CRIME: {
                        readonly type: "object";
                        readonly description: "Potential match from AML crime database.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly AML_PEP: {
                        readonly type: "object";
                        readonly description: "Potential match from AML politically exposed person database.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly LOW_TEXT_CONFIDENCE: {
                        readonly type: "object";
                        readonly description: "Low text confidence score detected for important data fields due to blurry image, some data extracted may be incorrect.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly FAKE_ID: {
                        readonly type: "object";
                        readonly description: "The document uploaded is a fake or sample document, not an authentic document.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly ARTIFICIAL_IMAGE: {
                        readonly type: "object";
                        readonly description: "Document appears to be created artificially, not a naturally taken photo.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly ARTIFICIAL_TEXT: {
                        readonly type: "object";
                        readonly description: "Most texts within the image appears to be created artificially.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly TEXT_FORGERY: {
                        readonly type: "object";
                        readonly description: "Possible artificial text modification detected on the following text fragments: %s.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly IP_COUNTRY_MISMATCH: {
                        readonly type: "object";
                        readonly description: "Inconsistency between user IP address country (%s) and document country (%s).";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly IMAGE_TOO_SMALL: {
                        readonly type: "object";
                        readonly description: "The document image is too small and unlikely to be a genuine document.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly IMAGE_TOO_BLURRY: {
                        readonly type: "object";
                        readonly description: "The document image is too blurry and should be retaken for improved result accuracy.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly INVALID_CAMERA_PERSPECTIVE: {
                        readonly type: "object";
                        readonly description: "The document image is not a naturally taken photo using a camera, it could be scanned or computer generated.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly CHECK_DIGIT_FAILED: {
                        readonly type: "object";
                        readonly description: "The document is not a valid document because %s contains invalid check digit.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly BLACK_WHITE_DOCUMENT: {
                        readonly type: "object";
                        readonly description: "The document appears to be black & white photocopy.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly GLARE_DETECTED: {
                        readonly type: "object";
                        readonly description: "The document appears to be affected by glare or reflection";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly PHYSICAL_DOCUMENT_MISSING: {
                        readonly type: "object";
                        readonly description: "Could not detect physical card or passport object.";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly UNKNOWN: {
                        readonly type: "object";
                        readonly description: "Unknown";
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                            };
                            readonly review: {
                                readonly type: "number";
                            };
                            readonly reject: {
                                readonly type: "number";
                            };
                            readonly weight: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["enabled", "review", "reject", "weight"];
                    };
                    readonly "": {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["UNRECOGNIZED_DOCUMENT", "UNRECOGNIZED_BACK_DOCUMENT", "UNRECOGNIZED_BACK_BARCODE", "INVALID_BACK_DOCUMENT", "SELFIE_FACE_NOT_FOUND", "SELFIE_MULTIPLE_FACES", "DOCUMENT_FACE_NOT_FOUND", "DOCUMENT_FACE_LANDMARK_ERR", "SELFIE_FACE_LANDMARK_ERR", "INTERNAL_FACE_VERIFICATION_ERR", "FACE_MISMATCH", "FACE_LIVENESS_ERR", "RECAPTURED_FACE", "FACE_IDENTICAL", "DOCUMENT_COUNTRY_MISMATCH", "DOCUMENT_STATE_MISMATCH", "DOCUMENT_NAME_MISMATCH", "DOCUMENT_DOB_MISMATCH", "MISSING_EXPIRY_DATE", "MISSING_ISSUE_DATE", "MISSING_BIRTH_DATE", "MISSING_DOCUMENT_NUMBER", "MISSING_PERSONAL_NUMBER", "MISSING_ADDRESS", "MISSING_POSTCODE", "MISSING_NAME", "MISSING_LOCAL_NAME", "MISSING_GENDER", "MISSING_HEIGHT", "MISSING_WEIGHT", "MISSING_HAIR_COLOR", "MISSING_EYE_COLOR", "MISSING_RESTRICTIONS", "MISSING_VEHICLE_CLASS", "MISSING_ENDORSEMENT", "MISSING_BUSINESS_NAME", "MISSING_BUSINESS_NAME_LOCAL", "MISSING_BUSINESS_REGISTRATION_NUMBER", "MISSING_ENTITY_TYPE", "UNDER_18", "UNDER_19", "UNDER_20", "UNDER_21", "DOCUMENT_EXPIRED", "NAME_VERIFICATION_FAILED", "DOB_VERIFICATION_FAILED", "AGE_VERIFICATION_FAILED", "ID_NUMBER_VERIFICATION_FAILED", "ADDRESS_VERIFICATION_FAILED", "POSTCODE_VERIFICATION_FAILED", "TYPE_NOT_ACCEPTED", "COUNTRY_NOT_ACCEPTED", "STATE_NOT_ACCEPTED", "RECAPTURED_DOCUMENT", "SCREEN_DETECTED", "IMAGE_FORGERY", "FEATURE_VERIFICATION_FAILED", "IMAGE_EDITED", "AML_SANCTION", "AML_CRIME", "AML_PEP", "LOW_TEXT_CONFIDENCE", "FAKE_ID", "ARTIFICIAL_IMAGE", "ARTIFICIAL_TEXT", "TEXT_FORGERY", "IP_COUNTRY_MISMATCH", "IMAGE_TOO_SMALL", "IMAGE_TOO_BLURRY", "INVALID_CAMERA_PERSPECTIVE", "CHECK_DIGIT_FAILED", "BLACK_WHITE_DOCUMENT", "GLARE_DETECTED", "PHYSICAL_DOCUMENT_MISSING", "UNKNOWN"];
            };
            readonly docupass: {
                readonly type: "object";
                readonly description: "Docupass express identity verification / e-signature module settings";
                readonly properties: {
                    readonly docupassAuditReport: {
                        readonly type: "boolean";
                        readonly description: "Generate an audit report for every completed Docupass session";
                    };
                    readonly companyName: {
                        readonly type: "string";
                        readonly description: "Company name to be displayed on footer and title";
                    };
                    readonly welcomeMessage: {
                        readonly type: "string";
                        readonly description: "Show a welcome screen with customized message";
                    };
                    readonly logoURL: {
                        readonly type: "string";
                        readonly description: "Custom Logo URL to replace ID Analyzer logo (Business+ Customers Only)";
                    };
                    readonly allowIframe: {
                        readonly type: "boolean";
                        readonly description: "This parameter is obsolete in newest version of Docupass\r\n\r\nAllow url to be embbed in iframe";
                    };
                    readonly restrictDevice: {
                        readonly type: "integer";
                        readonly description: "This parameter is obsolete in newest version of Docupass\r\n\r\nRestrict device 0=No Restriction 1=Mobile/Tablet Only 2=Desktop Only";
                    };
                    readonly allowFileUpload: {
                        readonly type: "boolean";
                        readonly description: "Allow file upload if no camera can be found. Default False";
                    };
                    readonly documentCaptureMode: {
                        readonly type: "integer";
                        readonly description: "This parameter is obsolete in newest version of Docupass\r\n\r\n0=Single Shot via HTML5 File Input, 1=Live Scan via Getusermedia";
                    };
                    readonly faceCaptureMode: {
                        readonly type: "integer";
                        readonly description: "This parameter is obsolete in newest version of Docupass\r\n\r\n0=Single Shot via HTML5 File Input, 1=Live Scan via Getusermedia, 2=Video Recording via HTML5 File Input";
                    };
                    readonly documentSide: {
                        readonly type: "integer";
                        readonly description: "Side of ID documents that should be captured. `0`=Front + Back, `1`=Front Only";
                    };
                    readonly cameraMode: {
                        readonly type: "integer";
                        readonly description: "This parameter is obsolete in newest version of Docupass\r\n\r\n0=Auto(Back for ID and Front for Selfie), 1=Always Use Back Camera, 2=Always Use Front Camera";
                    };
                    readonly reviewData: {
                        readonly type: "boolean";
                        readonly description: "This parameter is obsolete in newest version of Docupass\r\n\r\nAllow user to review their personal information captured by OCR system before submitting for verification";
                    };
                    readonly maxAttempt: {
                        readonly type: "integer";
                        readonly description: "This parameter is obsolete in newest version of Docupass\r\n\r\nAllow user to resubmit document if rejected, default 2";
                    };
                    readonly trackGps: {
                        readonly type: "boolean";
                        readonly description: "Track user location using GPS Geolocation (For Docupass Audit Report Only)";
                    };
                    readonly acceptUrl: {
                        readonly type: "string";
                        readonly description: "URL where the user should be redirected to if transaction decision is \"accept\"";
                    };
                    readonly reviewUrl: {
                        readonly type: "string";
                        readonly description: "URL where the user should be redirected to if transaction decision is \"review\"";
                    };
                    readonly rejectUrl: {
                        readonly type: "string";
                        readonly description: "URL where the user should be redirected to if transaction decision is \"reject\"";
                    };
                    readonly expireUrl: {
                        readonly type: "string";
                        readonly description: "This parameter is obsolete in newest version of Docupass, expired Docupass will be redirected to `rejectUrl`\r\n\r\nURL where the user should be redirected to if Docupass URL has expired";
                    };
                    readonly phoneVerification: {
                        readonly type: "integer";
                        readonly description: "Perform phone verification before ID verification or e-signature. `0`=Disabled, `1`= Verification Within Docupass App, `2`=Send SMS to user when Docupass URL is created\r\n\r\nOption `2` is obsolete in newest version of Docupass\r\n";
                    };
                    readonly smsContent: {
                        readonly type: "string";
                        readonly description: "This parameter is obsolete in newest version of Docupass\r\n";
                    };
                    readonly customField: {
                        readonly type: "array";
                        readonly description: "Ask user to input additional information";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly fieldLabel: {
                                    readonly type: "string";
                                    readonly description: "Field label";
                                };
                                readonly fieldDescription: {
                                    readonly type: "string";
                                    readonly description: "Field description";
                                };
                                readonly fieldId: {
                                    readonly type: "string";
                                    readonly description: "Field ID (A-z0-9_- Only)";
                                };
                                readonly fieldType: {
                                    readonly type: "integer";
                                    readonly description: "0=Single Line Text, 1=Multiline Text, 2=Dropdown Select";
                                };
                                readonly fieldData: {
                                    readonly type: "string";
                                    readonly description: "(For dropdown select only) Options for dropdown select: \"Male;M\\nFemale;F\"";
                                };
                            };
                        };
                    };
                    readonly customDocuPassURL: {
                        readonly type: "string";
                        readonly description: "Enter URL path if you choose to host docupass client app on your own server. (Business+ customer only)\r\n\r\nPlease contact us to get the web client package.";
                    };
                    readonly expiry: {
                        readonly type: "integer";
                        readonly description: "How long the docupass link shall remain active (seconds) set 0 to never expire";
                    };
                    readonly qrColor: {
                        readonly type: "string";
                        readonly description: "QR Code foreground color in 6 digit hex default 000000";
                    };
                    readonly qrBGColor: {
                        readonly type: "string";
                        readonly description: "QR Code background color in 6 digit hex default FFFFFF";
                    };
                    readonly qrSize: {
                        readonly type: "integer";
                        readonly description: "Default 8";
                    };
                    readonly qrMargin: {
                        readonly type: "integer";
                        readonly description: "Default 8";
                    };
                };
                readonly required: readonly ["docupassAuditReport", "companyName", "welcomeMessage", "logoURL", "allowIframe", "restrictDevice", "allowFileUpload", "documentCaptureMode", "faceCaptureMode", "documentSide", "cameraMode", "reviewData", "maxAttempt", "trackGps", "acceptUrl", "reviewUrl", "rejectUrl", "expireUrl", "phoneVerification", "smsContent", "customField", "customDocuPassURL", "expiry", "qrColor", "qrBGColor", "qrSize", "qrMargin"];
            };
            readonly acceptedDocuments: {
                readonly type: "object";
                readonly description: "Only accept specified type of document from specific countries and/or states.";
                readonly properties: {
                    readonly documentType: {
                        readonly type: "string";
                        readonly description: "Accepted ID Type";
                    };
                    readonly documentCountry: {
                        readonly type: "string";
                        readonly description: "Accepted Issuer Country (ISO-Alpha2 Code separated by comma)";
                    };
                    readonly documentState: {
                        readonly type: "string";
                        readonly description: "Accepted Issuer State (ISO-Alpha2 Code separated by comma)";
                    };
                };
                readonly required: readonly ["documentType", "documentCountry", "documentState"];
            };
        };
        readonly required: readonly ["name", "canvasSize", "orientationCorrection", "objectDetection", "AAMVABarcodeParsing", "saveResult", "saveImage", "outputImage", "outputType", "crop", "advancedCrop", "outputSize", "inferFullName", "splitFirstName", "transactionAuditReport", "timezone", "obscure", "webhook", "thresholds", "decisionTrigger", "decisions", "docupass", "acceptedDocuments"];
        readonly "x-examples": {
            readonly "example-1": {
                readonly name: "My Profile";
                readonly canvasSize: 1500;
                readonly orientationCorrection: true;
                readonly saveResult: true;
                readonly saveImage: true;
                readonly outputImage: true;
                readonly outputType: "base64";
                readonly crop: true;
                readonly advancedCrop: true;
                readonly outputSize: 1000;
                readonly obscure: readonly [];
                readonly webhook: "";
                readonly thresholds: {
                    readonly face: 0.5;
                    readonly nameDualSide: 0.5;
                    readonly nameVerification: 0.7;
                    readonly addressVerification: 0.9;
                    readonly imageForgery: 0.5;
                    readonly textForgery: 0.5;
                    readonly recapture: 0.5;
                    readonly screenDetection: 0.4;
                    readonly lowTextConfidence: 0.3;
                    readonly artificialImage: 0.5;
                    readonly artificialText: 0.5;
                    readonly faceIdentical: 0.5;
                    readonly smallImage: 0.5;
                    readonly blurryImage: 0.5;
                    readonly cameraPerspective: 0.5;
                };
                readonly decisionTrigger: {
                    readonly review: 1;
                    readonly reject: 1;
                };
                readonly decisions: {
                    readonly UNRECOGNIZED_DOCUMENT: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly UNRECOGNIZED_BACK_DOCUMENT: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly UNRECOGNIZED_BACK_BARCODE: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly INVALID_BACK_DOCUMENT: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly SELFIE_FACE_NOT_FOUND: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly SELFIE_MULTIPLE_FACES: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly DOCUMENT_FACE_NOT_FOUND: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly DOCUMENT_FACE_LANDMARK_ERR: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly SELFIE_FACE_LANDMARK_ERR: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly INTERNAL_FACE_VERIFICATION_ERR: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly FACE_MISMATCH: {
                        readonly enabled: true;
                        readonly review: 0.45;
                        readonly reject: 0.5;
                        readonly weight: 1;
                    };
                    readonly FACE_IDENTICAL: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly DOCUMENT_COUNTRY_MISMATCH: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly DOCUMENT_STATE_MISMATCH: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly DOCUMENT_NAME_MISMATCH: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly DOCUMENT_DOB_MISMATCH: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_EXPIRY_DATE: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_ISSUE_DATE: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_BIRTH_DATE: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_DOCUMENT_NUMBER: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_PERSONAL_NUMBER: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_ADDRESS: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_POSTCODE: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_NAME: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_LOCAL_NAME: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_GENDER: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_HEIGHT: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_WEIGHT: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_HAIR_COLOR: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_EYE_COLOR: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_RESTRICTIONS: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_VEHICLE_CLASS: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_ENDORSEMENT: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly UNDER_18: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly UNDER_19: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly UNDER_20: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly UNDER_21: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly DOCUMENT_EXPIRED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly NAME_VERIFICATION_FAILED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly DOB_VERIFICATION_FAILED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly AGE_VERIFICATION_FAILED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly ID_NUMBER_VERIFICATION_FAILED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly ADDRESS_VERIFICATION_FAILED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly POSTCODE_VERIFICATION_FAILED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly TYPE_NOT_ACCEPTED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly COUNTRY_NOT_ACCEPTED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly STATE_NOT_ACCEPTED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly RECAPTURED_DOCUMENT: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly SCREEN_DETECTED: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly IMAGE_FORGERY: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly FEATURE_VERIFICATION_FAILED: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly IMAGE_EDITED: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly AML_SANCTION: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly AML_CRIME: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly AML_PEP: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly LOW_TEXT_CONFIDENCE: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly FAKE_ID: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly ARTIFICIAL_IMAGE: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly ARTIFICIAL_TEXT: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly TEXT_FORGERY: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly IP_COUNTRY_MISMATCH: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly IMAGE_TOO_SMALL: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly IMAGE_TOO_BLURRY: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly INVALID_CAMERA_PERSPECTIVE: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly CHECK_DIGIT_FAILED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly UNKNOWN: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                };
                readonly id: {
                    readonly type: "string";
                    readonly minLength: 1;
                };
            };
            readonly "x-examples": {
                readonly "example-1": {
                    readonly success: true;
                    readonly id: "60c1627340a09ce39d8bf48f";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostQuickscan: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly document: {
                readonly type: "string";
                readonly description: "Base64-encoded Document Image";
                readonly examples: readonly ["Base64 encoded image"];
            };
            readonly documentBack: {
                readonly type: "string";
                readonly description: "Base64-encoded Document(Back) Image";
            };
            readonly saveFile: {
                readonly type: "boolean";
                readonly description: "Cache uploaded image(s) for 24 hours and obtain a cache hash for each image, the reference hash can be used to start standard scan transaction without re-uploading the file.";
            };
        };
        readonly required: readonly ["document"];
        readonly "x-examples": {
            readonly "example-1": {
                readonly profile: "60c1627340a09ce39d8bf48f";
                readonly document: "";
                readonly documentBack: "";
                readonly face: "";
                readonly acceptedCountry: "US,CA";
                readonly acceptedState: "CA,TX";
                readonly acceptedType: "PI";
                readonly verifyName: "";
                readonly verifyDob: "";
                readonly verifyAge: "";
                readonly verifyAddress: "";
                readonly verifyPostcode: "";
                readonly verifyDocumentNumber: "";
                readonly ip: "user";
                readonly customData: "abc";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly description: "Boolean indicating whether the API request succeeded";
                };
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID for the current API request, will only be returned if save to cloud is enabled.";
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Data contains all the information extracted from the uploaded document";
                    readonly properties: {
                        readonly key: {
                            readonly type: "array";
                            readonly description: "The key for the extracted data, refer to \"Data Fields\" page in developer guide for all possible field key. ";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                        readonly description: "String value of the field";
                                    };
                                    readonly confidence: {
                                        readonly type: "number";
                                        readonly description: "OCR confidence score, lower score indicating blurry text.";
                                    };
                                    readonly source: {
                                        readonly type: "string";
                                        readonly description: "Source of data: \"visual\", \"mrz\" or \"barcode\"";
                                    };
                                    readonly index: {
                                        readonly type: "integer";
                                        readonly description: "0=Front 1=Back";
                                    };
                                    readonly inputBox: {
                                        readonly type: "array";
                                        readonly description: "Bounding box relative to the uploaded image. Comes in the following order: Top Left, Top Right, Bottom Right, Bottom Left.";
                                        readonly minItems: 4;
                                        readonly maxItems: 4;
                                        readonly items: {
                                            readonly type: "array";
                                            readonly minItems: 2;
                                            readonly maxItems: 2;
                                            readonly items: {
                                                readonly type: "integer";
                                            };
                                        };
                                    };
                                    readonly outputBox: {
                                        readonly type: "array";
                                        readonly description: "Bounding box relative to the output or cropped image. Comes in the following order: Top Left, Top Right, Bottom Right, Bottom Left.";
                                        readonly minItems: 4;
                                        readonly maxItems: 4;
                                        readonly items: {
                                            readonly type: "array";
                                            readonly minItems: 2;
                                            readonly maxItems: 2;
                                            readonly items: {
                                                readonly type: "integer";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly outputImage: {
                    readonly type: "object";
                    readonly description: "If image output is enabled in profile, cropped and obscured image will be produced.";
                    readonly properties: {
                        readonly front: {
                            readonly type: "string";
                            readonly description: "URL or base64 content to proccessed front document image";
                        };
                        readonly back: {
                            readonly type: "string";
                            readonly description: "URL or base64 content to processed back document image";
                        };
                        readonly face: {
                            readonly type: "string";
                            readonly description: "URL or base64 content to processed face image";
                        };
                    };
                };
                readonly outputFile: {
                    readonly type: "array";
                    readonly description: "Contains a list of additional files generated, eg. Audit report, contracts etc.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Description of the file: \"Transaction Audit Report\" or contract template name and ID.";
                            };
                            readonly fileName: {
                                readonly type: "string";
                                readonly description: "Unique file name, you may use /filevault API to retrieve the file.";
                            };
                            readonly fileUrl: {
                                readonly type: "string";
                                readonly description: "URL to download the file";
                            };
                        };
                    };
                };
                readonly warning: {
                    readonly type: "array";
                    readonly description: "Contains a list of failed document validations";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Refer to \"Validation & Warnings\" guide for full list of warning codes.";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description of warning";
                            };
                            readonly severity: {
                                readonly type: "string";
                                readonly description: "The severity of the validation failure";
                            };
                            readonly confidence: {
                                readonly type: "number";
                                readonly description: "Confidence score of the warning bewteen 0 to 1. Some warnings will always return 1.";
                            };
                            readonly decision: {
                                readonly type: "string";
                                readonly description: "The decision for this particular warning: accept, review or reject, based on your KYC Profile configuration.";
                            };
                            readonly data: {
                                readonly type: "object";
                                readonly description: "Extra data for AML warnings, will only be returned of an AML validation has failed. Refer to sample JSON response for object structure and data.";
                                readonly properties: {
                                    readonly address: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly alias: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly birthplace: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly database: {
                                        readonly type: "string";
                                    };
                                    readonly documentnumber: {
                                        readonly type: "string";
                                    };
                                    readonly entity: {
                                        readonly type: "string";
                                    };
                                    readonly fullname: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly nationality: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly note: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly schema: {
                                        readonly type: "string";
                                    };
                                    readonly source: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly status: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly time: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
                readonly missingFields: {
                    readonly type: "array";
                    readonly description: "Fields that should be found on the current document but cannot be parsed by the system, possibly too blurry or obscured by user.";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly profileId: {
                    readonly type: "string";
                    readonly description: "KYC Profile used for this transaction";
                };
                readonly reviewScore: {
                    readonly type: "integer";
                    readonly description: "Total Review Score based on warnings";
                };
                readonly rejectScore: {
                    readonly type: "integer";
                    readonly description: "Total Reject Score based on warnings";
                };
                readonly decision: {
                    readonly type: "string";
                    readonly description: "Final KYC decision: accept, review or reject";
                };
                readonly quota: {
                    readonly type: "integer";
                    readonly description: "Remaining API quota for your account, you may enable excess usage under web portal to continue calling API even when you have exhausted all your quota.";
                };
                readonly credit: {
                    readonly type: "integer";
                    readonly description: "Remaining test credit for your account, test credits will be consumed before your quota.";
                };
                readonly customerData: {
                    readonly type: "string";
                    readonly description: "Any custom data sent through the customerData parameter when making the request";
                };
                readonly executionTime: {
                    readonly type: "number";
                    readonly description: "Execution time in seconds";
                };
            };
            readonly "x-examples": {
                readonly "Example 1": {
                    readonly success: true;
                    readonly transactionId: "abf22fde81b046c989291c9bc5b672a1";
                    readonly data: {
                        readonly address1: readonly [{
                            readonly value: "2570 24TH STREET";
                            readonly confidence: 0.99;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [343, 315], readonly [570, 315], readonly [570, 340], readonly [343, 340]];
                            readonly outputBox: readonly [readonly [343, 315], readonly [570, 315], readonly [570, 340], readonly [343, 340]];
                        }];
                        readonly address2: readonly [{
                            readonly value: "ANYTOWN, CA";
                            readonly confidence: 0.994;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [345, 341], readonly [516, 341], readonly [516, 365], readonly [345, 365]];
                            readonly outputBox: readonly [readonly [345, 341], readonly [516, 341], readonly [516, 365], readonly [345, 365]];
                        }];
                        readonly age: readonly [{
                            readonly value: "46";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                            readonly outputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                        }];
                        readonly countryFull: readonly [{
                            readonly value: "United States";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly countryIso2: readonly [{
                            readonly value: "US";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly countryIso3: readonly [{
                            readonly value: "USA";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly daysFromIssue: readonly [{
                            readonly value: "5300";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                            readonly outputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                        }];
                        readonly daysToExpiry: readonly [{
                            readonly value: "-3474";
                            readonly confidence: 0.992;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                            readonly outputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                        }];
                        readonly dob: readonly [{
                            readonly value: "1977-08-31";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                            readonly outputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                        }];
                        readonly dobDay: readonly [{
                            readonly value: "31";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                            readonly outputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                        }];
                        readonly dobMonth: readonly [{
                            readonly value: "8";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                            readonly outputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                        }];
                        readonly dobYear: readonly [{
                            readonly value: "1977";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                            readonly outputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                        }];
                        readonly document: readonly [{
                            readonly value: "";
                            readonly confidence: 0.6971232295036316;
                            readonly index: 0;
                        }];
                        readonly documentNumber: readonly [{
                            readonly value: "03062567";
                            readonly confidence: 0.955;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [385, 152], readonly [603, 152], readonly [603, 188], readonly [385, 188]];
                            readonly outputBox: readonly [readonly [385, 152], readonly [603, 152], readonly [603, 188], readonly [385, 188]];
                        }];
                        readonly documentSide: readonly [{
                            readonly value: "FRONT";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly documentType: readonly [{
                            readonly value: "D";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly endorsement: readonly [{
                            readonly value: "NONE";
                            readonly confidence: 0.989;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 207], readonly [655, 207], readonly [655, 231], readonly [655, 231]];
                            readonly outputBox: readonly [readonly [655, 207], readonly [655, 207], readonly [655, 231], readonly [655, 231]];
                        }];
                        readonly expiry: readonly [{
                            readonly value: "2014-08-31";
                            readonly confidence: 0.992;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                            readonly outputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                        }];
                        readonly expiryDay: readonly [{
                            readonly value: "31";
                            readonly confidence: 0.992;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                            readonly outputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                        }];
                        readonly expiryMonth: readonly [{
                            readonly value: "8";
                            readonly confidence: 0.992;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                            readonly outputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                        }];
                        readonly expiryYear: readonly [{
                            readonly value: "2014";
                            readonly confidence: 0.992;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                            readonly outputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                        }];
                        readonly face: readonly [{
                            readonly value: "";
                            readonly confidence: 1;
                            readonly index: 0;
                        }, {
                            readonly value: "";
                            readonly confidence: 0.8092089666253984;
                            readonly index: 0;
                        }];
                        readonly firstName: readonly [{
                            readonly value: "UMAR";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [388, 286], readonly [474, 286], readonly [474, 313], readonly [388, 313]];
                            readonly outputBox: readonly [readonly [388, 286], readonly [474, 286], readonly [474, 313], readonly [388, 313]];
                        }];
                        readonly fullName: readonly [{
                            readonly value: "UMAR HAMMAMI";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [388, 245], readonly [557, 245], readonly [557, 313], readonly [388, 313]];
                            readonly outputBox: readonly [readonly [388, 245], readonly [557, 245], readonly [557, 313], readonly [388, 313]];
                        }];
                        readonly hairColor: readonly [{
                            readonly value: "BRN";
                            readonly confidence: 0.998;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 506], readonly [655, 506], readonly [655, 528], readonly [655, 528]];
                            readonly outputBox: readonly [readonly [655, 506], readonly [655, 506], readonly [655, 528], readonly [655, 528]];
                        }];
                        readonly height: readonly [{
                            readonly value: "5'-05\"";
                            readonly confidence: 0.944;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [508, 532], readonly [578, 532], readonly [578, 557], readonly [508, 557]];
                            readonly outputBox: readonly [readonly [508, 532], readonly [578, 532], readonly [578, 557], readonly [508, 557]];
                        }];
                        readonly internalId: readonly [{
                            readonly value: "1739";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly issued: readonly [{
                            readonly value: "2009-08-31";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                            readonly outputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                        }];
                        readonly issuedDay: readonly [{
                            readonly value: "31";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                            readonly outputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                        }];
                        readonly issuedMonth: readonly [{
                            readonly value: "8";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                            readonly outputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                        }];
                        readonly issuedYear: readonly [{
                            readonly value: "2009";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                            readonly outputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                        }];
                        readonly lastName: readonly [{
                            readonly value: "HAMMAMI";
                            readonly confidence: 0.996;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [388, 245], readonly [557, 245], readonly [557, 277], readonly [388, 277]];
                            readonly outputBox: readonly [readonly [388, 245], readonly [557, 245], readonly [557, 277], readonly [388, 277]];
                        }];
                        readonly nationalityFull: readonly [{
                            readonly value: "United States";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly nationalityIso2: readonly [{
                            readonly value: "US";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly nationalityIso3: readonly [{
                            readonly value: "USA";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly postcode: readonly [{
                            readonly value: "403062567";
                            readonly confidence: 0.955;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [385, 152], readonly [603, 152], readonly [603, 188], readonly [385, 188]];
                            readonly outputBox: readonly [readonly [385, 152], readonly [603, 152], readonly [603, 188], readonly [385, 188]];
                        }];
                        readonly restrictions: readonly [{
                            readonly value: "NONE";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [415, 414], readonly [485, 414], readonly [485, 438], readonly [415, 438]];
                            readonly outputBox: readonly [readonly [415, 414], readonly [485, 414], readonly [485, 438], readonly [415, 438]];
                        }];
                        readonly sex: readonly [{
                            readonly value: "F";
                            readonly confidence: 0.996;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [506, 505], readonly [521, 505], readonly [521, 529], readonly [506, 529]];
                            readonly outputBox: readonly [readonly [506, 505], readonly [521, 505], readonly [521, 529], readonly [506, 529]];
                        }];
                        readonly signature: readonly [{
                            readonly value: "";
                            readonly confidence: 0.8522607088088989;
                            readonly index: 0;
                        }];
                        readonly stateFull: readonly [{
                            readonly value: "California";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly stateShort: readonly [{
                            readonly value: "CA";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly vehicleClass: readonly [{
                            readonly value: "C";
                            readonly confidence: 0.998;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 141], readonly [655, 141], readonly [655, 166], readonly [655, 166]];
                            readonly outputBox: readonly [readonly [655, 141], readonly [655, 141], readonly [655, 166], readonly [655, 166]];
                        }];
                        readonly weight: readonly [{
                            readonly value: "125";
                            readonly confidence: 0.998;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 534], readonly [655, 534], readonly [655, 557], readonly [655, 557]];
                            readonly outputBox: readonly [readonly [655, 534], readonly [655, 534], readonly [655, 557], readonly [655, 557]];
                        }];
                    };
                    readonly outputImage: {
                        readonly front: "https://api2-eu.idanalyzer.com/image/abf22fde81b046c989291c9bc5b672a1/9787616b88e925de5e0fe418154979f3f4cb16c239be07e0259f828c543d90d7/front.jpg";
                        readonly face: "https://api2-eu.idanalyzer.com/image/abf22fde81b046c989291c9bc5b672a1/9787616b88e925de5e0fe418154979f3f4cb16c239be07e0259f828c543d90d7/face.jpg";
                    };
                    readonly outputFile: readonly [{
                        readonly name: "Transaction Audit Report";
                        readonly fileName: "transaction-audit-report_jbCV4jEoq5obj9TPG4aThOyRaNni5nr9.pdf";
                        readonly fileUrl: "https://api2-eu.idanalyzer.com/filevault/transaction-audit-report_jbCV4jEoq5obj9TPG4aThOyRaNni5nr9.pdf";
                    }];
                    readonly warning: readonly [{
                        readonly code: "IP_COUNTRY_MISMATCH";
                        readonly description: "Inconsistency between user IP address country (TW) and document country (US).";
                        readonly severity: "low";
                        readonly confidence: 1;
                        readonly decision: "accept";
                    }, {
                        readonly code: "MISSING_EYE_COLOR";
                        readonly description: "Eye color is missing or cannot be read.";
                        readonly severity: "low";
                        readonly confidence: 1;
                        readonly decision: "accept";
                    }, {
                        readonly code: "DOCUMENT_EXPIRED";
                        readonly description: "Document has already expired.";
                        readonly severity: "high";
                        readonly confidence: 0.992;
                        readonly decision: "reject";
                    }, {
                        readonly code: "INVALID_CAMERA_PERSPECTIVE";
                        readonly description: "The document image is not a naturally taken photo using a camera, it could be scanned or computer generated.";
                        readonly severity: "medium";
                        readonly confidence: 0.5;
                        readonly decision: "review";
                    }, {
                        readonly code: "FAKE_ID";
                        readonly description: "The document uploaded is a fake or sample document, not an authentic document. Matching keyword from database.";
                        readonly severity: "high";
                        readonly confidence: 1;
                        readonly decision: "reject";
                    }, {
                        readonly code: "IMAGE_EDITED";
                        readonly description: "The front document image contains exif header indicating that it was edited in Adobe Photoshop 25.5.";
                        readonly severity: "medium";
                        readonly confidence: 1;
                        readonly decision: "review";
                    }, {
                        readonly code: "AML_SANCTION";
                        readonly description: "Potential match from AML sanction database.";
                        readonly severity: "medium";
                        readonly confidence: 1;
                        readonly decision: "review";
                        readonly data: {
                            readonly address: readonly ["Somalia"];
                            readonly alias: readonly ["Abu Mansour Al-Amriki", "Umar Hammami", "Abu Maansuur Al-Amriki", "Abu Mansuur Al-Amriki", "Abu Mansur Al-Amriki"];
                            readonly birthplace: readonly ["Alabama, United States"];
                            readonly database: "au_dfat";
                            readonly documentnumber: any;
                            readonly entity: "person";
                            readonly fullname: readonly ["Omar Hammami"];
                            readonly nationality: readonly ["US"];
                            readonly note: readonly ["Also believed to hold Syrian nationality. Passport: 403062567 (US). Social Security Number: 423-31-3021 (US).  Married to a Somali woman. Lived in Egypt in 2005 and moved to Somalia in 2009"];
                            readonly schema: "sanction";
                            readonly source: readonly ["http://dfat.gov.au/international-relations/security/sanctions/Pages/sanctions.aspx"];
                            readonly status: readonly ["Listed by UN 751 Committee on 28 July 2011"];
                            readonly time: "2012-02-27T07:00:00+08:00";
                        };
                    }, {
                        readonly code: "AML_SANCTION";
                        readonly description: "Potential match from AML sanction database.";
                        readonly severity: "medium";
                        readonly confidence: 1;
                        readonly decision: "review";
                        readonly data: {
                            readonly alias: readonly ["Abu Mansur AL-AMRIKI", "Omar Shafik HAMMAMI", "Abu Mansour AL-AMRIKI", "Farouq", "Abu Mansuur AL-AMRIKI", "Farouk", "Umar HAMMAMI"];
                            readonly birthplace: readonly ["Alabama, USA"];
                            readonly database: "us_ofac";
                            readonly documentnumber: "[{\"id\":\"403062567\",\"id_formatted\":\"403062567\",\"country\":\"us\",\"type\":\"P\"},{\"id\":\"423-31-3021\",\"id_formatted\":\"423313021\",\"country\":\"us\",\"type\":\"I\"}]";
                            readonly entity: "person";
                            readonly fullname: readonly ["Omar HAMMAMI"];
                            readonly nationality: readonly ["US"];
                            readonly note: readonly ["Unknown"];
                            readonly program: readonly ["SDN List"];
                            readonly schema: "sanction";
                            readonly source: readonly ["https://www.treasury.gov/resource-center/sanctions/Pages/default.aspx"];
                            readonly time: "2011-07-29T06:00:00+08:00";
                        };
                    }, {
                        readonly code: "IMAGE_FORGERY";
                        readonly description: "The document image possibly contains forged elements which warrants a manual review or rejection.";
                        readonly severity: "high";
                        readonly confidence: 0.9515808820724487;
                        readonly decision: "review";
                    }, {
                        readonly code: "FACE_LIVENESS_ERR";
                        readonly description: "Selfie photo liveness verification failed.";
                        readonly severity: "high";
                        readonly confidence: 0.6584155559539795;
                        readonly decision: "reject";
                    }, {
                        readonly code: "FACE_IDENTICAL";
                        readonly description: "Selfie photo appears to be the exact same photo as document photo.";
                        readonly severity: "medium";
                        readonly confidence: 1;
                        readonly decision: "review";
                    }, {
                        readonly code: "GLARE_DETECTED";
                        readonly description: "The document image contains possible glare.";
                        readonly severity: "low";
                        readonly confidence: 1;
                        readonly decision: "review";
                    }];
                    readonly missingFields: readonly ["eyeColor"];
                    readonly profileId: "3ed13669b87f48e3bf884f02534e430b";
                    readonly reviewScore: 7;
                    readonly rejectScore: 3;
                    readonly decision: "reject";
                    readonly quota: 100;
                    readonly credit: 126;
                    readonly customerData: "";
                    readonly executionTime: 2.686818772;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                };
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "number";
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly minLength: 1;
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly minLength: 1;
                        };
                    };
                    readonly required: readonly ["status", "code", "message"];
                };
            };
            readonly required: readonly ["success", "error"];
            readonly "x-examples": {
                readonly "example-1": {
                    readonly success: false;
                    readonly error: {
                        readonly status: 401;
                        readonly code: "ERROR_UNAUTHORIZED";
                        readonly message: "Failed to authenticate user, make sure valid credentials are set in Authorization header.";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostScan: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly document: {
                readonly type: "string";
                readonly description: "Base64-encoded Document Image, you may also reference image from another transaction by passing \"ref:abcde\" where abcde is the output image reference.";
                readonly examples: readonly ["Base64 encoded image"];
            };
            readonly documentBack: {
                readonly type: "string";
                readonly description: "Base64-encoded Document(Back) Image, you may also reference image from another transaction by passing \"ref:abcde\" where abcde is the output image reference.";
            };
            readonly face: {
                readonly type: "string";
                readonly description: "Base64-encoded Face Image for Biometric Verification, you may submit multiple images by separating each image with a comma. Multiple images will improve liveness verification accuracy. You may also reference image from another transaction by passing \"ref:abcde\" where abcde is the output image reference.";
            };
            readonly faceVideo: {
                readonly type: "string";
                readonly description: "Base64-encoded selfie video for Biometric Verification.";
            };
            readonly profile: {
                readonly type: "string";
                readonly description: "Your custom KYC profile ID, or use one of the following preset profiles: \"security_none\", \"security_low\", \"security_medium\", \"security_high\"";
            };
            readonly profileOverride: {
                readonly type: "object";
                readonly description: "Override one or more parameters on the existing profile, the object should be JSON style object adhereing to Get KYC Profile API response.";
                readonly additionalProperties: true;
            };
            readonly restrictCountry: {
                readonly type: "string";
                readonly description: "Accepted Issuer Country (ISO-Alpha2 Code separated by comma)";
            };
            readonly restrictState: {
                readonly type: "string";
                readonly description: "Accepted Issuer State (ISO-Alpha2 Code separated by comma)";
            };
            readonly restrictType: {
                readonly type: "string";
                readonly description: "Accepted ID Type (I=ID, P=Passport, D=Driving License, V=Visa, R=Residence Permit)";
            };
            readonly verifyName: {
                readonly type: "string";
                readonly description: "Supply customer name to match with document";
            };
            readonly verifyDob: {
                readonly type: "string";
                readonly description: "Supply customer birthday to match with document";
            };
            readonly verifyAge: {
                readonly type: "string";
                readonly description: "Supply an age range to check if customer is within the age range. For example, \"20-40\", a warning will be trigger if age is under 20 or over 40.";
            };
            readonly verifyAddress: {
                readonly type: "string";
                readonly description: "Supply customer address to match with document";
            };
            readonly verifyPostcode: {
                readonly type: "string";
                readonly description: "Supply customer postcode to match with document";
            };
            readonly verifyDocumentNumber: {
                readonly type: "string";
                readonly description: "Supply customer ID number to match with document";
            };
            readonly contractGenerate: {
                readonly type: "string";
                readonly description: "Enter up to 5 contract template ID (seperated by comma) to automatically generate contract document using value parsed from uploaded ID";
            };
            readonly contractFormat: {
                readonly type: "string";
                readonly description: "PDF, DOCX or HTML";
            };
            readonly contractPrefill: {
                readonly type: "object";
                readonly description: "JSON data in key-value pairs to autofill dynamic fields, data from user ID will be used first in case of a conflict. For example, passing {\"myparameter\":\"abc\"} would fill %{myparameter} in contract template with \"abc\".";
                readonly additionalProperties: true;
            };
            readonly ip: {
                readonly type: "string";
                readonly description: "Pass in user IP address to check if ID is issued from the same country as the IP address, use value \"user\" to use connection IP.";
            };
            readonly customData: {
                readonly type: "string";
                readonly description: "Any arbitrary string you wish to save with the transaction. e.g Internal customer reference number ";
            };
        };
        readonly required: readonly ["document", "profile"];
        readonly "x-examples": {
            readonly "example-1": {
                readonly profile: "60c1627340a09ce39d8bf48f";
                readonly document: "";
                readonly documentBack: "";
                readonly face: "";
                readonly acceptedCountry: "US,CA";
                readonly acceptedState: "CA,TX";
                readonly acceptedType: "PI";
                readonly verifyName: "";
                readonly verifyDob: "";
                readonly verifyAge: "";
                readonly verifyAddress: "";
                readonly verifyPostcode: "";
                readonly verifyDocumentNumber: "";
                readonly ip: "user";
                readonly customData: "abc";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly description: "Boolean indicating whether the API request succeeded";
                };
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID for the current API request, will only be returned if save to cloud is enabled.";
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Data contains all the information extracted from the uploaded document";
                    readonly properties: {
                        readonly key: {
                            readonly type: "array";
                            readonly description: "The key for the extracted data, refer to \"Data Fields\" page in developer guide for all possible field key. ";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                        readonly description: "String value of the field";
                                    };
                                    readonly confidence: {
                                        readonly type: "number";
                                        readonly description: "OCR confidence score, lower score indicating blurry text.";
                                    };
                                    readonly source: {
                                        readonly type: "string";
                                        readonly description: "Source of data: \"visual\", \"mrz\" or \"barcode\"";
                                    };
                                    readonly index: {
                                        readonly type: "integer";
                                        readonly description: "0=Front 1=Back";
                                    };
                                    readonly inputBox: {
                                        readonly type: "array";
                                        readonly description: "Bounding box relative to the uploaded image. Comes in the following order: Top Left, Top Right, Bottom Right, Bottom Left.";
                                        readonly minItems: 4;
                                        readonly maxItems: 4;
                                        readonly items: {
                                            readonly type: "array";
                                            readonly minItems: 2;
                                            readonly maxItems: 2;
                                            readonly items: {
                                                readonly type: "integer";
                                            };
                                        };
                                    };
                                    readonly outputBox: {
                                        readonly type: "array";
                                        readonly description: "Bounding box relative to the output or cropped image. Comes in the following order: Top Left, Top Right, Bottom Right, Bottom Left.";
                                        readonly minItems: 4;
                                        readonly maxItems: 4;
                                        readonly items: {
                                            readonly type: "array";
                                            readonly minItems: 2;
                                            readonly maxItems: 2;
                                            readonly items: {
                                                readonly type: "integer";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly outputImage: {
                    readonly type: "object";
                    readonly description: "If image output is enabled in profile, cropped and obscured image will be produced.";
                    readonly properties: {
                        readonly front: {
                            readonly type: "string";
                            readonly description: "URL or base64 content to proccessed front document image";
                        };
                        readonly back: {
                            readonly type: "string";
                            readonly description: "URL or base64 content to processed back document image";
                        };
                        readonly face: {
                            readonly type: "string";
                            readonly description: "URL or base64 content to processed face image";
                        };
                    };
                };
                readonly outputFile: {
                    readonly type: "array";
                    readonly description: "Contains a list of additional files generated, eg. Audit report, contracts etc.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Description of the file: \"Transaction Audit Report\" or contract template name and ID.";
                            };
                            readonly fileName: {
                                readonly type: "string";
                                readonly description: "Unique file name, you may use /filevault API to retrieve the file.";
                            };
                            readonly fileUrl: {
                                readonly type: "string";
                                readonly description: "URL to download the file";
                            };
                        };
                    };
                };
                readonly warning: {
                    readonly type: "array";
                    readonly description: "Contains a list of failed document validations";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Refer to \"Validation & Warnings\" guide for full list of warning codes.";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description of warning";
                            };
                            readonly severity: {
                                readonly type: "string";
                                readonly description: "The severity of the validation failure";
                            };
                            readonly confidence: {
                                readonly type: "number";
                                readonly description: "Confidence score of the warning bewteen 0 to 1. Some warnings will always return 1.";
                            };
                            readonly decision: {
                                readonly type: "string";
                                readonly description: "The decision for this particular warning: accept, review or reject, based on your KYC Profile configuration.";
                            };
                            readonly data: {
                                readonly type: "object";
                                readonly description: "Extra data for AML warnings, will only be returned of an AML validation has failed. Refer to sample JSON response for object structure and data.";
                                readonly properties: {
                                    readonly address: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly alias: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly birthplace: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly database: {
                                        readonly type: "string";
                                    };
                                    readonly documentnumber: {
                                        readonly type: "string";
                                    };
                                    readonly entity: {
                                        readonly type: "string";
                                    };
                                    readonly fullname: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly nationality: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly note: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly schema: {
                                        readonly type: "string";
                                    };
                                    readonly source: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly status: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly time: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
                readonly missingFields: {
                    readonly type: "array";
                    readonly description: "Fields that should be found on the current document but cannot be parsed by the system, possibly too blurry or obscured by user.";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly profileId: {
                    readonly type: "string";
                    readonly description: "KYC Profile used for this transaction";
                };
                readonly reviewScore: {
                    readonly type: "integer";
                    readonly description: "Total Review Score based on warnings";
                };
                readonly rejectScore: {
                    readonly type: "integer";
                    readonly description: "Total Reject Score based on warnings";
                };
                readonly decision: {
                    readonly type: "string";
                    readonly description: "Final KYC decision: accept, review or reject";
                };
                readonly quota: {
                    readonly type: "integer";
                    readonly description: "Remaining API quota for your account, you may enable excess usage under web portal to continue calling API even when you have exhausted all your quota.";
                };
                readonly credit: {
                    readonly type: "integer";
                    readonly description: "Remaining test credit for your account, test credits will be consumed before your quota.";
                };
                readonly customerData: {
                    readonly type: "string";
                    readonly description: "Any custom data sent through the customerData parameter when making the request";
                };
                readonly executionTime: {
                    readonly type: "number";
                    readonly description: "Execution time in seconds";
                };
            };
            readonly "x-examples": {
                readonly "Example 1": {
                    readonly success: true;
                    readonly transactionId: "abf22fde81b046c989291c9bc5b672a1";
                    readonly data: {
                        readonly address1: readonly [{
                            readonly value: "2570 24TH STREET";
                            readonly confidence: 0.99;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [343, 315], readonly [570, 315], readonly [570, 340], readonly [343, 340]];
                            readonly outputBox: readonly [readonly [343, 315], readonly [570, 315], readonly [570, 340], readonly [343, 340]];
                        }];
                        readonly address2: readonly [{
                            readonly value: "ANYTOWN, CA";
                            readonly confidence: 0.994;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [345, 341], readonly [516, 341], readonly [516, 365], readonly [345, 365]];
                            readonly outputBox: readonly [readonly [345, 341], readonly [516, 341], readonly [516, 365], readonly [345, 365]];
                        }];
                        readonly age: readonly [{
                            readonly value: "46";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                            readonly outputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                        }];
                        readonly countryFull: readonly [{
                            readonly value: "United States";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly countryIso2: readonly [{
                            readonly value: "US";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly countryIso3: readonly [{
                            readonly value: "USA";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly daysFromIssue: readonly [{
                            readonly value: "5300";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                            readonly outputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                        }];
                        readonly daysToExpiry: readonly [{
                            readonly value: "-3474";
                            readonly confidence: 0.992;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                            readonly outputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                        }];
                        readonly dob: readonly [{
                            readonly value: "1977-08-31";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                            readonly outputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                        }];
                        readonly dobDay: readonly [{
                            readonly value: "31";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                            readonly outputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                        }];
                        readonly dobMonth: readonly [{
                            readonly value: "8";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                            readonly outputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                        }];
                        readonly dobYear: readonly [{
                            readonly value: "1977";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                            readonly outputBox: readonly [readonly [400, 373], readonly [590, 373], readonly [590, 409], readonly [400, 409]];
                        }];
                        readonly document: readonly [{
                            readonly value: "";
                            readonly confidence: 0.6971232295036316;
                            readonly index: 0;
                        }];
                        readonly documentNumber: readonly [{
                            readonly value: "03062567";
                            readonly confidence: 0.955;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [385, 152], readonly [603, 152], readonly [603, 188], readonly [385, 188]];
                            readonly outputBox: readonly [readonly [385, 152], readonly [603, 152], readonly [603, 188], readonly [385, 188]];
                        }];
                        readonly documentSide: readonly [{
                            readonly value: "FRONT";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly documentType: readonly [{
                            readonly value: "D";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly endorsement: readonly [{
                            readonly value: "NONE";
                            readonly confidence: 0.989;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 207], readonly [655, 207], readonly [655, 231], readonly [655, 231]];
                            readonly outputBox: readonly [readonly [655, 207], readonly [655, 207], readonly [655, 231], readonly [655, 231]];
                        }];
                        readonly expiry: readonly [{
                            readonly value: "2014-08-31";
                            readonly confidence: 0.992;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                            readonly outputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                        }];
                        readonly expiryDay: readonly [{
                            readonly value: "31";
                            readonly confidence: 0.992;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                            readonly outputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                        }];
                        readonly expiryMonth: readonly [{
                            readonly value: "8";
                            readonly confidence: 0.992;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                            readonly outputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                        }];
                        readonly expiryYear: readonly [{
                            readonly value: "2014";
                            readonly confidence: 0.992;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                            readonly outputBox: readonly [readonly [398, 199], readonly [583, 199], readonly [583, 232], readonly [398, 232]];
                        }];
                        readonly face: readonly [{
                            readonly value: "";
                            readonly confidence: 1;
                            readonly index: 0;
                        }, {
                            readonly value: "";
                            readonly confidence: 0.8092089666253984;
                            readonly index: 0;
                        }];
                        readonly firstName: readonly [{
                            readonly value: "UMAR";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [388, 286], readonly [474, 286], readonly [474, 313], readonly [388, 313]];
                            readonly outputBox: readonly [readonly [388, 286], readonly [474, 286], readonly [474, 313], readonly [388, 313]];
                        }];
                        readonly fullName: readonly [{
                            readonly value: "UMAR HAMMAMI";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [388, 245], readonly [557, 245], readonly [557, 313], readonly [388, 313]];
                            readonly outputBox: readonly [readonly [388, 245], readonly [557, 245], readonly [557, 313], readonly [388, 313]];
                        }];
                        readonly hairColor: readonly [{
                            readonly value: "BRN";
                            readonly confidence: 0.998;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 506], readonly [655, 506], readonly [655, 528], readonly [655, 528]];
                            readonly outputBox: readonly [readonly [655, 506], readonly [655, 506], readonly [655, 528], readonly [655, 528]];
                        }];
                        readonly height: readonly [{
                            readonly value: "5'-05\"";
                            readonly confidence: 0.944;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [508, 532], readonly [578, 532], readonly [578, 557], readonly [508, 557]];
                            readonly outputBox: readonly [readonly [508, 532], readonly [578, 532], readonly [578, 557], readonly [508, 557]];
                        }];
                        readonly internalId: readonly [{
                            readonly value: "1739";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly issued: readonly [{
                            readonly value: "2009-08-31";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                            readonly outputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                        }];
                        readonly issuedDay: readonly [{
                            readonly value: "31";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                            readonly outputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                        }];
                        readonly issuedMonth: readonly [{
                            readonly value: "8";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                            readonly outputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                        }];
                        readonly issuedYear: readonly [{
                            readonly value: "2009";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                            readonly outputBox: readonly [readonly [655, 569], readonly [655, 569], readonly [655, 592], readonly [655, 592]];
                        }];
                        readonly lastName: readonly [{
                            readonly value: "HAMMAMI";
                            readonly confidence: 0.996;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [388, 245], readonly [557, 245], readonly [557, 277], readonly [388, 277]];
                            readonly outputBox: readonly [readonly [388, 245], readonly [557, 245], readonly [557, 277], readonly [388, 277]];
                        }];
                        readonly nationalityFull: readonly [{
                            readonly value: "United States";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly nationalityIso2: readonly [{
                            readonly value: "US";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly nationalityIso3: readonly [{
                            readonly value: "USA";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly postcode: readonly [{
                            readonly value: "403062567";
                            readonly confidence: 0.955;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [385, 152], readonly [603, 152], readonly [603, 188], readonly [385, 188]];
                            readonly outputBox: readonly [readonly [385, 152], readonly [603, 152], readonly [603, 188], readonly [385, 188]];
                        }];
                        readonly restrictions: readonly [{
                            readonly value: "NONE";
                            readonly confidence: 0.991;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [415, 414], readonly [485, 414], readonly [485, 438], readonly [415, 438]];
                            readonly outputBox: readonly [readonly [415, 414], readonly [485, 414], readonly [485, 438], readonly [415, 438]];
                        }];
                        readonly sex: readonly [{
                            readonly value: "F";
                            readonly confidence: 0.996;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [506, 505], readonly [521, 505], readonly [521, 529], readonly [506, 529]];
                            readonly outputBox: readonly [readonly [506, 505], readonly [521, 505], readonly [521, 529], readonly [506, 529]];
                        }];
                        readonly signature: readonly [{
                            readonly value: "";
                            readonly confidence: 0.8522607088088989;
                            readonly index: 0;
                        }];
                        readonly stateFull: readonly [{
                            readonly value: "California";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly stateShort: readonly [{
                            readonly value: "CA";
                            readonly confidence: 1;
                            readonly source: "visual";
                            readonly index: 0;
                        }];
                        readonly vehicleClass: readonly [{
                            readonly value: "C";
                            readonly confidence: 0.998;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 141], readonly [655, 141], readonly [655, 166], readonly [655, 166]];
                            readonly outputBox: readonly [readonly [655, 141], readonly [655, 141], readonly [655, 166], readonly [655, 166]];
                        }];
                        readonly weight: readonly [{
                            readonly value: "125";
                            readonly confidence: 0.998;
                            readonly source: "visual";
                            readonly index: 0;
                            readonly inputBox: readonly [readonly [655, 534], readonly [655, 534], readonly [655, 557], readonly [655, 557]];
                            readonly outputBox: readonly [readonly [655, 534], readonly [655, 534], readonly [655, 557], readonly [655, 557]];
                        }];
                    };
                    readonly outputImage: {
                        readonly front: "https://api2-eu.idanalyzer.com/image/abf22fde81b046c989291c9bc5b672a1/9787616b88e925de5e0fe418154979f3f4cb16c239be07e0259f828c543d90d7/front.jpg";
                        readonly face: "https://api2-eu.idanalyzer.com/image/abf22fde81b046c989291c9bc5b672a1/9787616b88e925de5e0fe418154979f3f4cb16c239be07e0259f828c543d90d7/face.jpg";
                    };
                    readonly outputFile: readonly [{
                        readonly name: "Transaction Audit Report";
                        readonly fileName: "transaction-audit-report_jbCV4jEoq5obj9TPG4aThOyRaNni5nr9.pdf";
                        readonly fileUrl: "https://api2-eu.idanalyzer.com/filevault/transaction-audit-report_jbCV4jEoq5obj9TPG4aThOyRaNni5nr9.pdf";
                    }];
                    readonly warning: readonly [{
                        readonly code: "IP_COUNTRY_MISMATCH";
                        readonly description: "Inconsistency between user IP address country (TW) and document country (US).";
                        readonly severity: "low";
                        readonly confidence: 1;
                        readonly decision: "accept";
                    }, {
                        readonly code: "MISSING_EYE_COLOR";
                        readonly description: "Eye color is missing or cannot be read.";
                        readonly severity: "low";
                        readonly confidence: 1;
                        readonly decision: "accept";
                    }, {
                        readonly code: "DOCUMENT_EXPIRED";
                        readonly description: "Document has already expired.";
                        readonly severity: "high";
                        readonly confidence: 0.992;
                        readonly decision: "reject";
                    }, {
                        readonly code: "INVALID_CAMERA_PERSPECTIVE";
                        readonly description: "The document image is not a naturally taken photo using a camera, it could be scanned or computer generated.";
                        readonly severity: "medium";
                        readonly confidence: 0.5;
                        readonly decision: "review";
                    }, {
                        readonly code: "FAKE_ID";
                        readonly description: "The document uploaded is a fake or sample document, not an authentic document. Matching keyword from database.";
                        readonly severity: "high";
                        readonly confidence: 1;
                        readonly decision: "reject";
                    }, {
                        readonly code: "IMAGE_EDITED";
                        readonly description: "The front document image contains exif header indicating that it was edited in Adobe Photoshop 25.5.";
                        readonly severity: "medium";
                        readonly confidence: 1;
                        readonly decision: "review";
                    }, {
                        readonly code: "AML_SANCTION";
                        readonly description: "Potential match from AML sanction database.";
                        readonly severity: "medium";
                        readonly confidence: 1;
                        readonly decision: "review";
                        readonly data: {
                            readonly address: readonly ["Somalia"];
                            readonly alias: readonly ["Abu Mansour Al-Amriki", "Umar Hammami", "Abu Maansuur Al-Amriki", "Abu Mansuur Al-Amriki", "Abu Mansur Al-Amriki"];
                            readonly birthplace: readonly ["Alabama, United States"];
                            readonly database: "au_dfat";
                            readonly documentnumber: any;
                            readonly entity: "person";
                            readonly fullname: readonly ["Omar Hammami"];
                            readonly nationality: readonly ["US"];
                            readonly note: readonly ["Also believed to hold Syrian nationality. Passport: 403062567 (US). Social Security Number: 423-31-3021 (US).  Married to a Somali woman. Lived in Egypt in 2005 and moved to Somalia in 2009"];
                            readonly schema: "sanction";
                            readonly source: readonly ["http://dfat.gov.au/international-relations/security/sanctions/Pages/sanctions.aspx"];
                            readonly status: readonly ["Listed by UN 751 Committee on 28 July 2011"];
                            readonly time: "2012-02-27T07:00:00+08:00";
                        };
                    }, {
                        readonly code: "AML_SANCTION";
                        readonly description: "Potential match from AML sanction database.";
                        readonly severity: "medium";
                        readonly confidence: 1;
                        readonly decision: "review";
                        readonly data: {
                            readonly alias: readonly ["Abu Mansur AL-AMRIKI", "Omar Shafik HAMMAMI", "Abu Mansour AL-AMRIKI", "Farouq", "Abu Mansuur AL-AMRIKI", "Farouk", "Umar HAMMAMI"];
                            readonly birthplace: readonly ["Alabama, USA"];
                            readonly database: "us_ofac";
                            readonly documentnumber: "[{\"id\":\"403062567\",\"id_formatted\":\"403062567\",\"country\":\"us\",\"type\":\"P\"},{\"id\":\"423-31-3021\",\"id_formatted\":\"423313021\",\"country\":\"us\",\"type\":\"I\"}]";
                            readonly entity: "person";
                            readonly fullname: readonly ["Omar HAMMAMI"];
                            readonly nationality: readonly ["US"];
                            readonly note: readonly ["Unknown"];
                            readonly program: readonly ["SDN List"];
                            readonly schema: "sanction";
                            readonly source: readonly ["https://www.treasury.gov/resource-center/sanctions/Pages/default.aspx"];
                            readonly time: "2011-07-29T06:00:00+08:00";
                        };
                    }, {
                        readonly code: "IMAGE_FORGERY";
                        readonly description: "The document image possibly contains forged elements which warrants a manual review or rejection.";
                        readonly severity: "high";
                        readonly confidence: 0.9515808820724487;
                        readonly decision: "review";
                    }, {
                        readonly code: "FACE_LIVENESS_ERR";
                        readonly description: "Selfie photo liveness verification failed.";
                        readonly severity: "high";
                        readonly confidence: 0.6584155559539795;
                        readonly decision: "reject";
                    }, {
                        readonly code: "FACE_IDENTICAL";
                        readonly description: "Selfie photo appears to be the exact same photo as document photo.";
                        readonly severity: "medium";
                        readonly confidence: 1;
                        readonly decision: "review";
                    }, {
                        readonly code: "GLARE_DETECTED";
                        readonly description: "The document image contains possible glare.";
                        readonly severity: "low";
                        readonly confidence: 1;
                        readonly decision: "review";
                    }];
                    readonly missingFields: readonly ["eyeColor"];
                    readonly profileId: "3ed13669b87f48e3bf884f02534e430b";
                    readonly reviewScore: 7;
                    readonly rejectScore: 3;
                    readonly decision: "reject";
                    readonly quota: 100;
                    readonly credit: 126;
                    readonly customerData: "";
                    readonly executionTime: 2.686818772;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                };
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "number";
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly minLength: 1;
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly minLength: 1;
                        };
                    };
                    readonly required: readonly ["status", "code", "message"];
                };
            };
            readonly required: readonly ["success", "error"];
            readonly "x-examples": {
                readonly "example-1": {
                    readonly success: false;
                    readonly error: {
                        readonly status: 401;
                        readonly code: "ERROR_UNAUTHORIZED";
                        readonly message: "Failed to authenticate user, make sure valid credentials are set in Authorization header.";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostWebhookId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Webhook ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const PutProfileProfileid: {
    readonly body: {
        readonly type: "object";
        readonly "x-examples": {
            readonly "example-1": {
                readonly name: "456";
                readonly canvasSize: 1500;
                readonly orientationCorrection: true;
                readonly saveResult: false;
                readonly saveImage: false;
                readonly outputImage: true;
                readonly outputType: "base64";
                readonly crop: true;
                readonly advancedCrop: true;
                readonly outputSize: 1000;
                readonly obscure: readonly [];
                readonly webhook: "";
                readonly thresholds: {
                    readonly face: 0.5;
                    readonly nameDualSide: 0.5;
                    readonly nameVerification: 0.7;
                    readonly addressVerification: 0.9;
                    readonly imageForgery: 0.5;
                    readonly textForgery: 0.5;
                    readonly recapture: 0.5;
                    readonly screenDetection: 0.4;
                    readonly lowTextConfidence: 0.3;
                    readonly artificialImage: 0.5;
                    readonly artificialText: 0.5;
                    readonly faceIdentical: 0.5;
                    readonly smallImage: 0.5;
                    readonly blurryImage: 0.5;
                    readonly cameraPerspective: 0.5;
                };
                readonly decisionTrigger: {
                    readonly review: 1;
                    readonly reject: 1;
                };
                readonly decisions: {
                    readonly UNRECOGNIZED_DOCUMENT: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly UNRECOGNIZED_BACK_DOCUMENT: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly UNRECOGNIZED_BACK_BARCODE: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly INVALID_BACK_DOCUMENT: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly SELFIE_FACE_NOT_FOUND: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly SELFIE_MULTIPLE_FACES: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly DOCUMENT_FACE_NOT_FOUND: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly DOCUMENT_FACE_LANDMARK_ERR: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly SELFIE_FACE_LANDMARK_ERR: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly INTERNAL_FACE_VERIFICATION_ERR: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly FACE_MISMATCH: {
                        readonly enabled: true;
                        readonly review: 0.45;
                        readonly reject: 0.5;
                        readonly weight: 1;
                    };
                    readonly FACE_IDENTICAL: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly DOCUMENT_COUNTRY_MISMATCH: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly DOCUMENT_STATE_MISMATCH: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly DOCUMENT_NAME_MISMATCH: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly DOCUMENT_DOB_MISMATCH: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_EXPIRY_DATE: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_ISSUE_DATE: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_BIRTH_DATE: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_DOCUMENT_NUMBER: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_PERSONAL_NUMBER: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_ADDRESS: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_POSTCODE: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_NAME: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly MISSING_LOCAL_NAME: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_GENDER: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_HEIGHT: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_WEIGHT: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_HAIR_COLOR: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_EYE_COLOR: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_RESTRICTIONS: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_VEHICLE_CLASS: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly MISSING_ENDORSEMENT: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly UNDER_18: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly UNDER_19: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly UNDER_20: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly UNDER_21: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly DOCUMENT_EXPIRED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly NAME_VERIFICATION_FAILED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly DOB_VERIFICATION_FAILED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly AGE_VERIFICATION_FAILED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly ID_NUMBER_VERIFICATION_FAILED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly ADDRESS_VERIFICATION_FAILED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly POSTCODE_VERIFICATION_FAILED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly TYPE_NOT_ACCEPTED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly COUNTRY_NOT_ACCEPTED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly STATE_NOT_ACCEPTED: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly RECAPTURED_DOCUMENT: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly SCREEN_DETECTED: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly IMAGE_FORGERY: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly FEATURE_VERIFICATION_FAILED: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly IMAGE_EDITED: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly AML_SANCTION: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly AML_CRIME: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly AML_PEP: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly LOW_TEXT_CONFIDENCE: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly FAKE_ID: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly ARTIFICIAL_IMAGE: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly ARTIFICIAL_TEXT: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly TEXT_FORGERY: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly IP_COUNTRY_MISMATCH: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly IMAGE_TOO_SMALL: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly IMAGE_TOO_BLURRY: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: 0;
                        readonly weight: 1;
                    };
                    readonly INVALID_CAMERA_PERSPECTIVE: {
                        readonly enabled: true;
                        readonly review: 0;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                    readonly CHECK_DIGIT_FAILED: {
                        readonly enabled: false;
                        readonly review: 0;
                        readonly reject: 0;
                        readonly weight: 0;
                    };
                    readonly UNKNOWN: {
                        readonly enabled: true;
                        readonly review: -1;
                        readonly reject: -1;
                        readonly weight: 1;
                    };
                };
            };
        };
        readonly additionalProperties: true;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly profileId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "KYC Profile ID";
                };
            };
            readonly required: readonly ["profileId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { DeleteContractTemplateId, DeleteDocupassReference, DeleteProfileProfileid, DeleteTransactionTransactionid, DeleteWebhookId, GetContract, GetContractTemplateId, GetDocupass, GetDocupassReference, GetExportProfileId, GetFilevaultFilename, GetImagevaultImagetoken, GetMyaccount, GetProfile, GetProfileProfileid, GetTransaction, GetTransactionTransactionid, GetWebhook, PatchTransactionTransactionid, PostAml, PostContract, PostContractTemplateId, PostDocupass, PostExportTransaction, PostFace, PostGenerate, PostLiveness, PostProfile, PostQuickscan, PostScan, PostWebhookId, PutProfileProfileid };
