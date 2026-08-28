// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConfigurationProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * The application ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile#application_id CcConfigurationProfile#application_id}
    */
    readonly applicationId: string;
    /**
    * On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting. See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile#deletion_protection_check CcConfigurationProfile#deletion_protection_check}
    */
    readonly deletionProtectionCheck?: string;
    /**
    * A description of the configuration profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile#description CcConfigurationProfile#description}
    */
    readonly description?: string;
    /**
    * The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile#kms_key_identifier CcConfigurationProfile#kms_key_identifier}
    */
    readonly kmsKeyIdentifier?: string;
    /**
    * A URI to locate the configuration. You can specify the AWS AppConfig hosted configuration store, Systems Manager (SSM) document, an SSM Parameter Store parameter, or an Amazon S3 object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile#location_uri CcConfigurationProfile#location_uri}
    */
    readonly locationUri: string;
    /**
    * A name for the configuration profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile#name CcConfigurationProfile#name}
    */
    readonly name: string;
    /**
    * The ARN of an IAM role with permission to access the configuration at the specified LocationUri.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile#retrieval_role_arn CcConfigurationProfile#retrieval_role_arn}
    */
    readonly retrievalRoleArn?: string;
    /**
    * Metadata to assign to the configuration profile. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile#tags CcConfigurationProfile#tags}
    */
    readonly tags?: CcConfigurationProfile.TagProperty[] | cdktn.IResolvable;
    /**
    * The type of configurations contained in the profile. When calling this API, enter one of the following values for Type: AWS.AppConfig.FeatureFlags, AWS.Freeform
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile#type CcConfigurationProfile#type}
    */
    readonly type?: string;
    /**
    * A list of methods for validating the configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile#validators CcConfigurationProfile#validators}
    */
    readonly validators?: CcConfigurationProfile.ValidatorsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile awscc_appconfig_configuration_profile}
*/
export class CcConfigurationProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appconfig_configuration_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConfigurationProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConfigurationProfile to import
    * @param importFromId The id of the existing CcConfigurationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConfigurationProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appconfig_configuration_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile awscc_appconfig_configuration_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConfigurationProfileProps
    */
    public constructor(scope: Construct, id: string, config: CcConfigurationProfileProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appconfig_configuration_profile',
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
        this._applicationId = config.applicationId;
        this._deletionProtectionCheck = config.deletionProtectionCheck;
        this._description = config.description;
        this._kmsKeyIdentifier = config.kmsKeyIdentifier;
        this._locationUri = config.locationUri;
        this._name = config.name;
        this._retrievalRoleArn = config.retrievalRoleArn;
        this._tags.internalValue = config.tags;
        this._type = config.type;
        this._validators.internalValue = config.validators;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_id - computed: false, optional: false, required: true
    private _applicationId?: string; 
    public get applicationId() {
        return this.getStringAttribute('application_id');
    }
    public set applicationId(value: string) {
        this._applicationId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationIdInput() {
        return this._applicationId;
    }

    // configuration_profile_id - computed: true, optional: false, required: false
    public get configurationProfileId() {
        return this.getStringAttribute('configuration_profile_id');
    }

    // deletion_protection_check - computed: true, optional: true, required: false
    private _deletionProtectionCheck?: string; 
    public get deletionProtectionCheck() {
        return this.getStringAttribute('deletion_protection_check');
    }
    public set deletionProtectionCheck(value: string) {
        this._deletionProtectionCheck = value;
    }
    public resetDeletionProtectionCheck() {
        this._deletionProtectionCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionCheckInput() {
        return this._deletionProtectionCheck;
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_arn - computed: true, optional: false, required: false
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }

    // kms_key_identifier - computed: true, optional: true, required: false
    private _kmsKeyIdentifier?: string; 
    public get kmsKeyIdentifier() {
        return this.getStringAttribute('kms_key_identifier');
    }
    public set kmsKeyIdentifier(value: string) {
        this._kmsKeyIdentifier = value;
    }
    public resetKmsKeyIdentifier() {
        this._kmsKeyIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdentifierInput() {
        return this._kmsKeyIdentifier;
    }

    // location_uri - computed: false, optional: false, required: true
    private _locationUri?: string; 
    public get locationUri() {
        return this.getStringAttribute('location_uri');
    }
    public set locationUri(value: string) {
        this._locationUri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get locationUriInput() {
        return this._locationUri;
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

    // retrieval_role_arn - computed: true, optional: true, required: false
    private _retrievalRoleArn?: string; 
    public get retrievalRoleArn() {
        return this.getStringAttribute('retrieval_role_arn');
    }
    public set retrievalRoleArn(value: string) {
        this._retrievalRoleArn = value;
    }
    public resetRetrievalRoleArn() {
        this._retrievalRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retrievalRoleArnInput() {
        return this._retrievalRoleArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConfigurationProfile.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConfigurationProfile.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // validators - computed: true, optional: true, required: false
    private _validators = new CcConfigurationProfile.ValidatorsPropertyList(this, "validators", false);
    public get validators() {
        return this._validators;
    }
    public putValidators(value: CcConfigurationProfile.ValidatorsProperty[] | cdktn.IResolvable) {
        this._validators.internalValue = value;
    }
    public resetValidators() {
        this._validators.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validatorsInput() {
        return this._validators.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_id: cdktn.stringToTerraform(this._applicationId),
            deletion_protection_check: cdktn.stringToTerraform(this._deletionProtectionCheck),
            description: cdktn.stringToTerraform(this._description),
            kms_key_identifier: cdktn.stringToTerraform(this._kmsKeyIdentifier),
            location_uri: cdktn.stringToTerraform(this._locationUri),
            name: cdktn.stringToTerraform(this._name),
            retrieval_role_arn: cdktn.stringToTerraform(this._retrievalRoleArn),
            tags: cdktn.listMapper(ccConfigurationProfileTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
            validators: cdktn.listMapper(ccConfigurationProfileValidatorsPropertyToTerraform, false)(this._validators.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_id: {
                value: cdktn.stringToHclTerraform(this._applicationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deletion_protection_check: {
                value: cdktn.stringToHclTerraform(this._deletionProtectionCheck),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_identifier: {
                value: cdktn.stringToHclTerraform(this._kmsKeyIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            location_uri: {
                value: cdktn.stringToHclTerraform(this._locationUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            retrieval_role_arn: {
                value: cdktn.stringToHclTerraform(this._retrievalRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConfigurationProfileTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConfigurationProfile.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            validators: {
                value: cdktn.listMapperHcl(ccConfigurationProfileValidatorsPropertyToHclTerraform, false)(this._validators.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConfigurationProfile.ValidatorsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConfigurationProfileTagPropertyToTerraform(struct?: CcConfigurationProfile.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConfigurationProfileTagPropertyToHclTerraform(struct?: CcConfigurationProfile.TagProperty | cdktn.IResolvable): any {
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


export function ccConfigurationProfileValidatorsPropertyToTerraform(struct?: CcConfigurationProfile.ValidatorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content: cdktn.stringToTerraform(struct!.content),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccConfigurationProfileValidatorsPropertyToHclTerraform(struct?: CcConfigurationProfile.ValidatorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content: {
            value: cdktn.stringToHclTerraform(struct!.content),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcConfigurationProfile {
export interface TagProperty {
    /**
    * The key-value string map. The tag key can be up to 128 characters and must not start with aws:.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile#key CcConfigurationProfile#key}
    */
    readonly key?: string;
    /**
    * The tag value can be up to 256 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile#value CcConfigurationProfile#value}
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
export interface ValidatorsProperty {
    /**
    * Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile#content CcConfigurationProfile#content}
    */
    readonly content?: string;
    /**
    * AWS AppConfig supports validators of type JSON_SCHEMA and LAMBDA.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_configuration_profile#type CcConfigurationProfile#type}
    */
    readonly type?: string;
}
export class ValidatorsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ValidatorsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._content !== undefined) {
            hasAnyValues = true;
            internalValueResult.content = this._content;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidatorsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._content = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._content = value.content;
            this._type = value.type;
        }
    }

    // content - computed: true, optional: true, required: false
    private _content?: string; 
    public get content() {
        return this.getStringAttribute('content');
    }
    public set content(value: string) {
        this._content = value;
    }
    public resetContent() {
        this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class ValidatorsPropertyList extends cdktn.ComplexList {
    public internalValue? : ValidatorsProperty[] | cdktn.IResolvable

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
    public get(index: number): ValidatorsPropertyOutputReference {
        return new ValidatorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
