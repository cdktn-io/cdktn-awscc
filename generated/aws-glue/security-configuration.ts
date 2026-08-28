// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_security_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSecurityConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The encryption configuration for the security configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_security_configuration#encryption_configuration CcSecurityConfiguration#encryption_configuration}
    */
    readonly encryptionConfiguration: CcSecurityConfiguration.EncryptionConfigurationProperty;
    /**
    * The name for the security configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_security_configuration#name CcSecurityConfiguration#name}
    */
    readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_security_configuration awscc_glue_security_configuration}
*/
export class CcSecurityConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_security_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSecurityConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSecurityConfiguration to import
    * @param importFromId The id of the existing CcSecurityConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_security_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSecurityConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_security_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_security_configuration awscc_glue_security_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSecurityConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcSecurityConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_security_configuration',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
        this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // encryption_configuration - computed: false, optional: false, required: true
    private _encryptionConfiguration = new CcSecurityConfiguration.EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: CcSecurityConfiguration.EncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            encryption_configuration: ccSecurityConfigurationEncryptionConfigurationPropertyToTerraform(this._encryptionConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            encryption_configuration: {
                value: ccSecurityConfigurationEncryptionConfigurationPropertyToHclTerraform(this._encryptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSecurityConfiguration.EncryptionConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSecurityConfigurationCloudWatchEncryptionPropertyToTerraform(struct?: CcSecurityConfiguration.CloudWatchEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_encryption_mode: cdktn.stringToTerraform(struct!.cloudwatchEncryptionMode),
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccSecurityConfigurationCloudWatchEncryptionPropertyToHclTerraform(struct?: CcSecurityConfiguration.CloudWatchEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_encryption_mode: {
            value: cdktn.stringToHclTerraform(struct!.cloudwatchEncryptionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityConfigurationJobBookmarksEncryptionPropertyToTerraform(struct?: CcSecurityConfiguration.JobBookmarksEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        job_bookmarks_encryption_mode: cdktn.stringToTerraform(struct!.jobBookmarksEncryptionMode),
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccSecurityConfigurationJobBookmarksEncryptionPropertyToHclTerraform(struct?: CcSecurityConfiguration.JobBookmarksEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        job_bookmarks_encryption_mode: {
            value: cdktn.stringToHclTerraform(struct!.jobBookmarksEncryptionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityConfigurationS3EncryptionPropertyToTerraform(struct?: CcSecurityConfiguration.S3EncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
        s3_encryption_mode: cdktn.stringToTerraform(struct!.s3EncryptionMode),
    }
}


export function ccSecurityConfigurationS3EncryptionPropertyToHclTerraform(struct?: CcSecurityConfiguration.S3EncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_encryption_mode: {
            value: cdktn.stringToHclTerraform(struct!.s3EncryptionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityConfigurationEncryptionConfigurationPropertyToTerraform(struct?: CcSecurityConfiguration.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_encryption: ccSecurityConfigurationCloudWatchEncryptionPropertyToTerraform(struct!.cloudwatchEncryption),
        job_bookmarks_encryption: ccSecurityConfigurationJobBookmarksEncryptionPropertyToTerraform(struct!.jobBookmarksEncryption),
        s3_encryptions: cdktn.listMapper(ccSecurityConfigurationS3EncryptionPropertyToTerraform, false)(struct!.s3Encryptions),
    }
}


export function ccSecurityConfigurationEncryptionConfigurationPropertyToHclTerraform(struct?: CcSecurityConfiguration.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_encryption: {
            value: ccSecurityConfigurationCloudWatchEncryptionPropertyToHclTerraform(struct!.cloudwatchEncryption),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchEncryptionProperty",
        },
        job_bookmarks_encryption: {
            value: ccSecurityConfigurationJobBookmarksEncryptionPropertyToHclTerraform(struct!.jobBookmarksEncryption),
            isBlock: true,
            type: "struct",
            storageClassType: "JobBookmarksEncryptionProperty",
        },
        s3_encryptions: {
            value: cdktn.listMapperHcl(ccSecurityConfigurationS3EncryptionPropertyToHclTerraform, false)(struct!.s3Encryptions),
            isBlock: true,
            type: "list",
            storageClassType: "S3EncryptionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSecurityConfiguration {
export interface CloudWatchEncryptionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_security_configuration#cloudwatch_encryption_mode CcSecurityConfiguration#cloudwatch_encryption_mode}
    */
    readonly cloudwatchEncryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_security_configuration#kms_key_arn CcSecurityConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export class CloudWatchEncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchEncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchEncryptionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchEncryptionMode = this._cloudwatchEncryptionMode;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudWatchEncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchEncryptionMode = undefined;
            this._kmsKeyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchEncryptionMode = value.cloudwatchEncryptionMode;
            this._kmsKeyArn = value.kmsKeyArn;
        }
    }

    // cloudwatch_encryption_mode - computed: true, optional: true, required: false
    private _cloudwatchEncryptionMode?: string; 
    public get cloudwatchEncryptionMode() {
        return this.getStringAttribute('cloudwatch_encryption_mode');
    }
    public set cloudwatchEncryptionMode(value: string) {
        this._cloudwatchEncryptionMode = value;
    }
    public resetCloudwatchEncryptionMode() {
        this._cloudwatchEncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchEncryptionModeInput() {
        return this._cloudwatchEncryptionMode;
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
}
export interface JobBookmarksEncryptionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_security_configuration#job_bookmarks_encryption_mode CcSecurityConfiguration#job_bookmarks_encryption_mode}
    */
    readonly jobBookmarksEncryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_security_configuration#kms_key_arn CcSecurityConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export class JobBookmarksEncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JobBookmarksEncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jobBookmarksEncryptionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobBookmarksEncryptionMode = this._jobBookmarksEncryptionMode;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JobBookmarksEncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jobBookmarksEncryptionMode = undefined;
            this._kmsKeyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jobBookmarksEncryptionMode = value.jobBookmarksEncryptionMode;
            this._kmsKeyArn = value.kmsKeyArn;
        }
    }

    // job_bookmarks_encryption_mode - computed: true, optional: true, required: false
    private _jobBookmarksEncryptionMode?: string; 
    public get jobBookmarksEncryptionMode() {
        return this.getStringAttribute('job_bookmarks_encryption_mode');
    }
    public set jobBookmarksEncryptionMode(value: string) {
        this._jobBookmarksEncryptionMode = value;
    }
    public resetJobBookmarksEncryptionMode() {
        this._jobBookmarksEncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobBookmarksEncryptionModeInput() {
        return this._jobBookmarksEncryptionMode;
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
}
export interface S3EncryptionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_security_configuration#kms_key_arn CcSecurityConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_security_configuration#s3_encryption_mode CcSecurityConfiguration#s3_encryption_mode}
    */
    readonly s3EncryptionMode?: string;
}
export class S3EncryptionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): S3EncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._s3EncryptionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3EncryptionMode = this._s3EncryptionMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3EncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyArn = undefined;
            this._s3EncryptionMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyArn = value.kmsKeyArn;
            this._s3EncryptionMode = value.s3EncryptionMode;
        }
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // s3_encryption_mode - computed: true, optional: true, required: false
    private _s3EncryptionMode?: string; 
    public get s3EncryptionMode() {
        return this.getStringAttribute('s3_encryption_mode');
    }
    public set s3EncryptionMode(value: string) {
        this._s3EncryptionMode = value;
    }
    public resetS3EncryptionMode() {
        this._s3EncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3EncryptionModeInput() {
        return this._s3EncryptionMode;
    }
}

export class S3EncryptionPropertyList extends cdktn.ComplexList {
    public internalValue? : S3EncryptionProperty[] | cdktn.IResolvable

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
    public get(index: number): S3EncryptionPropertyOutputReference {
        return new S3EncryptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EncryptionConfigurationProperty {
    /**
    * The encryption configuration for Amazon CloudWatch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_security_configuration#cloudwatch_encryption CcSecurityConfiguration#cloudwatch_encryption}
    */
    readonly cloudwatchEncryption?: CloudWatchEncryptionProperty;
    /**
    * The encryption configuration for job bookmarks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_security_configuration#job_bookmarks_encryption CcSecurityConfiguration#job_bookmarks_encryption}
    */
    readonly jobBookmarksEncryption?: JobBookmarksEncryptionProperty;
    /**
    * The encryption configuration for Amazon Simple Storage Service (Amazon S3) data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_security_configuration#s3_encryptions CcSecurityConfiguration#s3_encryptions}
    */
    readonly s3Encryptions?: S3EncryptionProperty[] | cdktn.IResolvable;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchEncryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchEncryption = this._cloudwatchEncryption?.internalValue;
        }
        if (this._jobBookmarksEncryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobBookmarksEncryption = this._jobBookmarksEncryption?.internalValue;
        }
        if (this._s3Encryptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Encryptions = this._s3Encryptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchEncryption.internalValue = undefined;
            this._jobBookmarksEncryption.internalValue = undefined;
            this._s3Encryptions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchEncryption.internalValue = value.cloudwatchEncryption;
            this._jobBookmarksEncryption.internalValue = value.jobBookmarksEncryption;
            this._s3Encryptions.internalValue = value.s3Encryptions;
        }
    }

    // cloudwatch_encryption - computed: true, optional: true, required: false
    private _cloudwatchEncryption = new CloudWatchEncryptionPropertyOutputReference(this, "cloudwatch_encryption");
    public get cloudwatchEncryption() {
        return this._cloudwatchEncryption;
    }
    public putCloudwatchEncryption(value: CloudWatchEncryptionProperty) {
        this._cloudwatchEncryption.internalValue = value;
    }
    public resetCloudwatchEncryption() {
        this._cloudwatchEncryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchEncryptionInput() {
        return this._cloudwatchEncryption.internalValue;
    }

    // job_bookmarks_encryption - computed: true, optional: true, required: false
    private _jobBookmarksEncryption = new JobBookmarksEncryptionPropertyOutputReference(this, "job_bookmarks_encryption");
    public get jobBookmarksEncryption() {
        return this._jobBookmarksEncryption;
    }
    public putJobBookmarksEncryption(value: JobBookmarksEncryptionProperty) {
        this._jobBookmarksEncryption.internalValue = value;
    }
    public resetJobBookmarksEncryption() {
        this._jobBookmarksEncryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobBookmarksEncryptionInput() {
        return this._jobBookmarksEncryption.internalValue;
    }

    // s3_encryptions - computed: true, optional: true, required: false
    private _s3Encryptions = new S3EncryptionPropertyList(this, "s3_encryptions", false);
    public get s3Encryptions() {
        return this._s3Encryptions;
    }
    public putS3Encryptions(value: S3EncryptionProperty[] | cdktn.IResolvable) {
        this._s3Encryptions.internalValue = value;
    }
    public resetS3Encryptions() {
        this._s3Encryptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3EncryptionsInput() {
        return this._s3Encryptions.internalValue;
    }
}
}
