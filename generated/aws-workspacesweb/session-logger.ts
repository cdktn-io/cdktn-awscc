// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSessionLoggerProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#additional_encryption_context CcSessionLogger#additional_encryption_context}
    */
    readonly additionalEncryptionContext?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#customer_managed_key CcSessionLogger#customer_managed_key}
    */
    readonly customerManagedKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#display_name CcSessionLogger#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#event_filter CcSessionLogger#event_filter}
    */
    readonly eventFilter: CcSessionLogger.EventFilterProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#log_configuration CcSessionLogger#log_configuration}
    */
    readonly logConfiguration: CcSessionLogger.LogConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#tags CcSessionLogger#tags}
    */
    readonly tags?: CcSessionLogger.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger awscc_workspacesweb_session_logger}
*/
export class CcSessionLogger extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_workspacesweb_session_logger";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSessionLogger resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSessionLogger to import
    * @param importFromId The id of the existing CcSessionLogger that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSessionLogger to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspacesweb_session_logger", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger awscc_workspacesweb_session_logger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSessionLoggerProps
    */
    public constructor(scope: Construct, id: string, config: CcSessionLoggerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_workspacesweb_session_logger',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._additionalEncryptionContext = config.additionalEncryptionContext;
        this._customerManagedKey = config.customerManagedKey;
        this._displayName = config.displayName;
        this._eventFilter.internalValue = config.eventFilter;
        this._logConfiguration.internalValue = config.logConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_encryption_context - computed: true, optional: true, required: false
    private _additionalEncryptionContext?: { [key: string]: string }; 
    public get additionalEncryptionContext() {
        return this.getStringMapAttribute('additional_encryption_context');
    }
    public set additionalEncryptionContext(value: { [key: string]: string }) {
        this._additionalEncryptionContext = value;
    }
    public resetAdditionalEncryptionContext() {
        this._additionalEncryptionContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalEncryptionContextInput() {
        return this._additionalEncryptionContext;
    }

    // associated_portal_arns - computed: true, optional: false, required: false
    public get associatedPortalArns() {
        return this.getListAttribute('associated_portal_arns');
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
        return this.getStringAttribute('creation_date');
    }

    // customer_managed_key - computed: true, optional: true, required: false
    private _customerManagedKey?: string; 
    public get customerManagedKey() {
        return this.getStringAttribute('customer_managed_key');
    }
    public set customerManagedKey(value: string) {
        this._customerManagedKey = value;
    }
    public resetCustomerManagedKey() {
        this._customerManagedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerManagedKeyInput() {
        return this._customerManagedKey;
    }

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    public resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // event_filter - computed: false, optional: false, required: true
    private _eventFilter = new CcSessionLogger.EventFilterPropertyOutputReference(this, "event_filter");
    public get eventFilter() {
        return this._eventFilter;
    }
    public putEventFilter(value: CcSessionLogger.EventFilterProperty) {
        this._eventFilter.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventFilterInput() {
        return this._eventFilter.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // log_configuration - computed: false, optional: false, required: true
    private _logConfiguration = new CcSessionLogger.LogConfigurationPropertyOutputReference(this, "log_configuration");
    public get logConfiguration() {
        return this._logConfiguration;
    }
    public putLogConfiguration(value: CcSessionLogger.LogConfigurationProperty) {
        this._logConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logConfigurationInput() {
        return this._logConfiguration.internalValue;
    }

    // session_logger_arn - computed: true, optional: false, required: false
    public get sessionLoggerArn() {
        return this.getStringAttribute('session_logger_arn');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSessionLogger.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSessionLogger.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            additional_encryption_context: cdktn.hashMapper(cdktn.stringToTerraform)(this._additionalEncryptionContext),
            customer_managed_key: cdktn.stringToTerraform(this._customerManagedKey),
            display_name: cdktn.stringToTerraform(this._displayName),
            event_filter: ccSessionLoggerEventFilterPropertyToTerraform(this._eventFilter.internalValue),
            log_configuration: ccSessionLoggerLogConfigurationPropertyToTerraform(this._logConfiguration.internalValue),
            tags: cdktn.listMapper(ccSessionLoggerTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            additional_encryption_context: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._additionalEncryptionContext),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            customer_managed_key: {
                value: cdktn.stringToHclTerraform(this._customerManagedKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_filter: {
                value: ccSessionLoggerEventFilterPropertyToHclTerraform(this._eventFilter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSessionLogger.EventFilterProperty",
            },
            log_configuration: {
                value: ccSessionLoggerLogConfigurationPropertyToHclTerraform(this._logConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSessionLogger.LogConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSessionLoggerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSessionLogger.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSessionLoggerEventFilterPropertyToTerraform(struct?: CcSessionLogger.EventFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        all: cdktn.stringToTerraform(struct!.all),
        include: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.include),
    }
}


export function ccSessionLoggerEventFilterPropertyToHclTerraform(struct?: CcSessionLogger.EventFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        all: {
            value: cdktn.stringToHclTerraform(struct!.all),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        include: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.include),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSessionLoggerS3LogConfigurationPropertyToTerraform(struct?: CcSessionLogger.S3LogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
        folder_structure: cdktn.stringToTerraform(struct!.folderStructure),
        key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
        log_file_format: cdktn.stringToTerraform(struct!.logFileFormat),
    }
}


export function ccSessionLoggerS3LogConfigurationPropertyToHclTerraform(struct?: CcSessionLogger.S3LogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.bucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        folder_structure: {
            value: cdktn.stringToHclTerraform(struct!.folderStructure),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_prefix: {
            value: cdktn.stringToHclTerraform(struct!.keyPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_file_format: {
            value: cdktn.stringToHclTerraform(struct!.logFileFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSessionLoggerLogConfigurationPropertyToTerraform(struct?: CcSessionLogger.LogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3: ccSessionLoggerS3LogConfigurationPropertyToTerraform(struct!.s3),
    }
}


export function ccSessionLoggerLogConfigurationPropertyToHclTerraform(struct?: CcSessionLogger.LogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3: {
            value: ccSessionLoggerS3LogConfigurationPropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3LogConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSessionLoggerTagPropertyToTerraform(struct?: CcSessionLogger.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSessionLoggerTagPropertyToHclTerraform(struct?: CcSessionLogger.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSessionLogger {
export interface EventFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#all CcSessionLogger#all}
    */
    readonly all?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#include CcSessionLogger#include}
    */
    readonly include?: string[];
}
export class EventFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._all !== undefined) {
            hasAnyValues = true;
            internalValueResult.all = this._all;
        }
        if (this._include !== undefined) {
            hasAnyValues = true;
            internalValueResult.include = this._include;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._all = undefined;
            this._include = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._all = value.all;
            this._include = value.include;
        }
    }

    // all - computed: true, optional: true, required: false
    private _all?: string; 
    public get all() {
        return this.getStringAttribute('all');
    }
    public set all(value: string) {
        this._all = value;
    }
    public resetAll() {
        this._all = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allInput() {
        return this._all;
    }

    // include - computed: true, optional: true, required: false
    private _include?: string[]; 
    public get include() {
        return this.getListAttribute('include');
    }
    public set include(value: string[]) {
        this._include = value;
    }
    public resetInclude() {
        this._include = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeInput() {
        return this._include;
    }
}
export interface S3LogConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#bucket CcSessionLogger#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#bucket_owner CcSessionLogger#bucket_owner}
    */
    readonly bucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#folder_structure CcSessionLogger#folder_structure}
    */
    readonly folderStructure?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#key_prefix CcSessionLogger#key_prefix}
    */
    readonly keyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#log_file_format CcSessionLogger#log_file_format}
    */
    readonly logFileFormat?: string;
}
export class S3LogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LogConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._bucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketOwner = this._bucketOwner;
        }
        if (this._folderStructure !== undefined) {
            hasAnyValues = true;
            internalValueResult.folderStructure = this._folderStructure;
        }
        if (this._keyPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyPrefix = this._keyPrefix;
        }
        if (this._logFileFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.logFileFormat = this._logFileFormat;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LogConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._bucketOwner = undefined;
            this._folderStructure = undefined;
            this._keyPrefix = undefined;
            this._logFileFormat = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._bucketOwner = value.bucketOwner;
            this._folderStructure = value.folderStructure;
            this._keyPrefix = value.keyPrefix;
            this._logFileFormat = value.logFileFormat;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // bucket_owner - computed: true, optional: true, required: false
    private _bucketOwner?: string; 
    public get bucketOwner() {
        return this.getStringAttribute('bucket_owner');
    }
    public set bucketOwner(value: string) {
        this._bucketOwner = value;
    }
    public resetBucketOwner() {
        this._bucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketOwnerInput() {
        return this._bucketOwner;
    }

    // folder_structure - computed: true, optional: true, required: false
    private _folderStructure?: string; 
    public get folderStructure() {
        return this.getStringAttribute('folder_structure');
    }
    public set folderStructure(value: string) {
        this._folderStructure = value;
    }
    public resetFolderStructure() {
        this._folderStructure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get folderStructureInput() {
        return this._folderStructure;
    }

    // key_prefix - computed: true, optional: true, required: false
    private _keyPrefix?: string; 
    public get keyPrefix() {
        return this.getStringAttribute('key_prefix');
    }
    public set keyPrefix(value: string) {
        this._keyPrefix = value;
    }
    public resetKeyPrefix() {
        this._keyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyPrefixInput() {
        return this._keyPrefix;
    }

    // log_file_format - computed: true, optional: true, required: false
    private _logFileFormat?: string; 
    public get logFileFormat() {
        return this.getStringAttribute('log_file_format');
    }
    public set logFileFormat(value: string) {
        this._logFileFormat = value;
    }
    public resetLogFileFormat() {
        this._logFileFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logFileFormatInput() {
        return this._logFileFormat;
    }
}
export interface LogConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#s3 CcSessionLogger#s3}
    */
    readonly s3?: S3LogConfigurationProperty;
}
export class LogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3.internalValue = value.s3;
        }
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new S3LogConfigurationPropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: S3LogConfigurationProperty) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#key CcSessionLogger#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#value CcSessionLogger#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
