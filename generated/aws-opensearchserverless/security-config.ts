// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSecurityConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * Security config description
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#description CcSecurityConfig#description}
    */
    readonly description?: string;
    /**
    * Describe IAM federation options in form of key value map
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#iam_federation_options CcSecurityConfig#iam_federation_options}
    */
    readonly iamFederationOptions?: CcSecurityConfig.IamFederationConfigOptionsProperty;
    /**
    * Describes IAM Identity Center options for an OpenSearch Serverless security configuration in the form of a key-value map
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#iam_identity_center_options CcSecurityConfig#iam_identity_center_options}
    */
    readonly iamIdentityCenterOptions?: CcSecurityConfig.IamIdentityCenterConfigOptionsProperty;
    /**
    * The friendly name of the security config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#name CcSecurityConfig#name}
    */
    readonly name?: string;
    /**
    * Describes saml options in form of key value map
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#saml_options CcSecurityConfig#saml_options}
    */
    readonly samlOptions?: CcSecurityConfig.SamlConfigOptionsProperty;
    /**
    * Config type for security config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#type CcSecurityConfig#type}
    */
    readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config awscc_opensearchserverless_security_config}
*/
export class CcSecurityConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_opensearchserverless_security_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSecurityConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSecurityConfig to import
    * @param importFromId The id of the existing CcSecurityConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSecurityConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_opensearchserverless_security_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config awscc_opensearchserverless_security_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSecurityConfigProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcSecurityConfigProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_opensearchserverless_security_config',
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
        this._description = config.description;
        this._iamFederationOptions.internalValue = config.iamFederationOptions;
        this._iamIdentityCenterOptions.internalValue = config.iamIdentityCenterOptions;
        this._name = config.name;
        this._samlOptions.internalValue = config.samlOptions;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // iam_federation_options - computed: true, optional: true, required: false
    private _iamFederationOptions = new CcSecurityConfig.IamFederationConfigOptionsPropertyOutputReference(this, "iam_federation_options");
    public get iamFederationOptions() {
        return this._iamFederationOptions;
    }
    public putIamFederationOptions(value: CcSecurityConfig.IamFederationConfigOptionsProperty) {
        this._iamFederationOptions.internalValue = value;
    }
    public resetIamFederationOptions() {
        this._iamFederationOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamFederationOptionsInput() {
        return this._iamFederationOptions.internalValue;
    }

    // iam_identity_center_options - computed: true, optional: true, required: false
    private _iamIdentityCenterOptions = new CcSecurityConfig.IamIdentityCenterConfigOptionsPropertyOutputReference(this, "iam_identity_center_options");
    public get iamIdentityCenterOptions() {
        return this._iamIdentityCenterOptions;
    }
    public putIamIdentityCenterOptions(value: CcSecurityConfig.IamIdentityCenterConfigOptionsProperty) {
        this._iamIdentityCenterOptions.internalValue = value;
    }
    public resetIamIdentityCenterOptions() {
        this._iamIdentityCenterOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamIdentityCenterOptionsInput() {
        return this._iamIdentityCenterOptions.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // saml_options - computed: true, optional: true, required: false
    private _samlOptions = new CcSecurityConfig.SamlConfigOptionsPropertyOutputReference(this, "saml_options");
    public get samlOptions() {
        return this._samlOptions;
    }
    public putSamlOptions(value: CcSecurityConfig.SamlConfigOptionsProperty) {
        this._samlOptions.internalValue = value;
    }
    public resetSamlOptions() {
        this._samlOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samlOptionsInput() {
        return this._samlOptions.internalValue;
    }

    // security_config_id - computed: true, optional: false, required: false
    public get securityConfigId() {
        return this.getStringAttribute('security_config_id');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            iam_federation_options: ccSecurityConfigIamFederationConfigOptionsPropertyToTerraform(this._iamFederationOptions.internalValue),
            iam_identity_center_options: ccSecurityConfigIamIdentityCenterConfigOptionsPropertyToTerraform(this._iamIdentityCenterOptions.internalValue),
            name: cdktn.stringToTerraform(this._name),
            saml_options: ccSecurityConfigSamlConfigOptionsPropertyToTerraform(this._samlOptions.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            iam_federation_options: {
                value: ccSecurityConfigIamFederationConfigOptionsPropertyToHclTerraform(this._iamFederationOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSecurityConfig.IamFederationConfigOptionsProperty",
            },
            iam_identity_center_options: {
                value: ccSecurityConfigIamIdentityCenterConfigOptionsPropertyToHclTerraform(this._iamIdentityCenterOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSecurityConfig.IamIdentityCenterConfigOptionsProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            saml_options: {
                value: ccSecurityConfigSamlConfigOptionsPropertyToHclTerraform(this._samlOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSecurityConfig.SamlConfigOptionsProperty",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSecurityConfigIamFederationConfigOptionsPropertyToTerraform(struct?: CcSecurityConfig.IamFederationConfigOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        group_attribute: cdktn.stringToTerraform(struct!.groupAttribute),
        user_attribute: cdktn.stringToTerraform(struct!.userAttribute),
    }
}


export function ccSecurityConfigIamFederationConfigOptionsPropertyToHclTerraform(struct?: CcSecurityConfig.IamFederationConfigOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        group_attribute: {
            value: cdktn.stringToHclTerraform(struct!.groupAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_attribute: {
            value: cdktn.stringToHclTerraform(struct!.userAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityConfigIamIdentityCenterConfigOptionsPropertyToTerraform(struct?: CcSecurityConfig.IamIdentityCenterConfigOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        group_attribute: cdktn.stringToTerraform(struct!.groupAttribute),
        instance_arn: cdktn.stringToTerraform(struct!.instanceArn),
        user_attribute: cdktn.stringToTerraform(struct!.userAttribute),
    }
}


export function ccSecurityConfigIamIdentityCenterConfigOptionsPropertyToHclTerraform(struct?: CcSecurityConfig.IamIdentityCenterConfigOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        group_attribute: {
            value: cdktn.stringToHclTerraform(struct!.groupAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_arn: {
            value: cdktn.stringToHclTerraform(struct!.instanceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_attribute: {
            value: cdktn.stringToHclTerraform(struct!.userAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityConfigSamlConfigOptionsPropertyToTerraform(struct?: CcSecurityConfig.SamlConfigOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        group_attribute: cdktn.stringToTerraform(struct!.groupAttribute),
        metadata: cdktn.stringToTerraform(struct!.metadata),
        open_search_serverless_entity_id: cdktn.stringToTerraform(struct!.openSearchServerlessEntityId),
        session_timeout: cdktn.numberToTerraform(struct!.sessionTimeout),
        user_attribute: cdktn.stringToTerraform(struct!.userAttribute),
    }
}


export function ccSecurityConfigSamlConfigOptionsPropertyToHclTerraform(struct?: CcSecurityConfig.SamlConfigOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        group_attribute: {
            value: cdktn.stringToHclTerraform(struct!.groupAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metadata: {
            value: cdktn.stringToHclTerraform(struct!.metadata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        open_search_serverless_entity_id: {
            value: cdktn.stringToHclTerraform(struct!.openSearchServerlessEntityId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_timeout: {
            value: cdktn.numberToHclTerraform(struct!.sessionTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        user_attribute: {
            value: cdktn.stringToHclTerraform(struct!.userAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSecurityConfig {
export interface IamFederationConfigOptionsProperty {
    /**
    * Group attribute for this IAM federation integration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#group_attribute CcSecurityConfig#group_attribute}
    */
    readonly groupAttribute?: string;
    /**
    * User attribute for this IAM federation integration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#user_attribute CcSecurityConfig#user_attribute}
    */
    readonly userAttribute?: string;
}
export class IamFederationConfigOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IamFederationConfigOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._groupAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupAttribute = this._groupAttribute;
        }
        if (this._userAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.userAttribute = this._userAttribute;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IamFederationConfigOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupAttribute = undefined;
            this._userAttribute = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupAttribute = value.groupAttribute;
            this._userAttribute = value.userAttribute;
        }
    }

    // group_attribute - computed: true, optional: true, required: false
    private _groupAttribute?: string; 
    public get groupAttribute() {
        return this.getStringAttribute('group_attribute');
    }
    public set groupAttribute(value: string) {
        this._groupAttribute = value;
    }
    public resetGroupAttribute() {
        this._groupAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupAttributeInput() {
        return this._groupAttribute;
    }

    // user_attribute - computed: true, optional: true, required: false
    private _userAttribute?: string; 
    public get userAttribute() {
        return this.getStringAttribute('user_attribute');
    }
    public set userAttribute(value: string) {
        this._userAttribute = value;
    }
    public resetUserAttribute() {
        this._userAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userAttributeInput() {
        return this._userAttribute;
    }
}
export interface IamIdentityCenterConfigOptionsProperty {
    /**
    * Group attribute for this IAM Identity Center integration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#group_attribute CcSecurityConfig#group_attribute}
    */
    readonly groupAttribute?: string;
    /**
    * The ARN of the IAM Identity Center instance used to integrate with OpenSearch Serverless
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#instance_arn CcSecurityConfig#instance_arn}
    */
    readonly instanceArn?: string;
    /**
    * User attribute for this IAM Identity Center integration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#user_attribute CcSecurityConfig#user_attribute}
    */
    readonly userAttribute?: string;
}
export class IamIdentityCenterConfigOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IamIdentityCenterConfigOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._groupAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupAttribute = this._groupAttribute;
        }
        if (this._instanceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceArn = this._instanceArn;
        }
        if (this._userAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.userAttribute = this._userAttribute;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IamIdentityCenterConfigOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupAttribute = undefined;
            this._instanceArn = undefined;
            this._userAttribute = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupAttribute = value.groupAttribute;
            this._instanceArn = value.instanceArn;
            this._userAttribute = value.userAttribute;
        }
    }

    // application_arn - computed: true, optional: false, required: false
    public get applicationArn() {
        return this.getStringAttribute('application_arn');
    }

    // application_description - computed: true, optional: false, required: false
    public get applicationDescription() {
        return this.getStringAttribute('application_description');
    }

    // application_name - computed: true, optional: false, required: false
    public get applicationName() {
        return this.getStringAttribute('application_name');
    }

    // group_attribute - computed: true, optional: true, required: false
    private _groupAttribute?: string; 
    public get groupAttribute() {
        return this.getStringAttribute('group_attribute');
    }
    public set groupAttribute(value: string) {
        this._groupAttribute = value;
    }
    public resetGroupAttribute() {
        this._groupAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupAttributeInput() {
        return this._groupAttribute;
    }

    // instance_arn - computed: true, optional: true, required: false
    private _instanceArn?: string; 
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
        this._instanceArn = value;
    }
    public resetInstanceArn() {
        this._instanceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
        return this._instanceArn;
    }

    // user_attribute - computed: true, optional: true, required: false
    private _userAttribute?: string; 
    public get userAttribute() {
        return this.getStringAttribute('user_attribute');
    }
    public set userAttribute(value: string) {
        this._userAttribute = value;
    }
    public resetUserAttribute() {
        this._userAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userAttributeInput() {
        return this._userAttribute;
    }
}
export interface SamlConfigOptionsProperty {
    /**
    * Group attribute for this saml integration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#group_attribute CcSecurityConfig#group_attribute}
    */
    readonly groupAttribute?: string;
    /**
    * The XML saml provider metadata document that you want to use
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#metadata CcSecurityConfig#metadata}
    */
    readonly metadata?: string;
    /**
    * Custom entity id attribute to override default entity id for this saml integration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#open_search_serverless_entity_id CcSecurityConfig#open_search_serverless_entity_id}
    */
    readonly openSearchServerlessEntityId?: string;
    /**
    * Defines the session timeout in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#session_timeout CcSecurityConfig#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Custom attribute for this saml integration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_security_config#user_attribute CcSecurityConfig#user_attribute}
    */
    readonly userAttribute?: string;
}
export class SamlConfigOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SamlConfigOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._groupAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupAttribute = this._groupAttribute;
        }
        if (this._metadata !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadata = this._metadata;
        }
        if (this._openSearchServerlessEntityId !== undefined) {
            hasAnyValues = true;
            internalValueResult.openSearchServerlessEntityId = this._openSearchServerlessEntityId;
        }
        if (this._sessionTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionTimeout = this._sessionTimeout;
        }
        if (this._userAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.userAttribute = this._userAttribute;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SamlConfigOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupAttribute = undefined;
            this._metadata = undefined;
            this._openSearchServerlessEntityId = undefined;
            this._sessionTimeout = undefined;
            this._userAttribute = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupAttribute = value.groupAttribute;
            this._metadata = value.metadata;
            this._openSearchServerlessEntityId = value.openSearchServerlessEntityId;
            this._sessionTimeout = value.sessionTimeout;
            this._userAttribute = value.userAttribute;
        }
    }

    // group_attribute - computed: true, optional: true, required: false
    private _groupAttribute?: string; 
    public get groupAttribute() {
        return this.getStringAttribute('group_attribute');
    }
    public set groupAttribute(value: string) {
        this._groupAttribute = value;
    }
    public resetGroupAttribute() {
        this._groupAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupAttributeInput() {
        return this._groupAttribute;
    }

    // metadata - computed: true, optional: true, required: false
    private _metadata?: string; 
    public get metadata() {
        return this.getStringAttribute('metadata');
    }
    public set metadata(value: string) {
        this._metadata = value;
    }
    public resetMetadata() {
        this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataInput() {
        return this._metadata;
    }

    // open_search_serverless_entity_id - computed: true, optional: true, required: false
    private _openSearchServerlessEntityId?: string; 
    public get openSearchServerlessEntityId() {
        return this.getStringAttribute('open_search_serverless_entity_id');
    }
    public set openSearchServerlessEntityId(value: string) {
        this._openSearchServerlessEntityId = value;
    }
    public resetOpenSearchServerlessEntityId() {
        this._openSearchServerlessEntityId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openSearchServerlessEntityIdInput() {
        return this._openSearchServerlessEntityId;
    }

    // session_timeout - computed: true, optional: true, required: false
    private _sessionTimeout?: number; 
    public get sessionTimeout() {
        return this.getNumberAttribute('session_timeout');
    }
    public set sessionTimeout(value: number) {
        this._sessionTimeout = value;
    }
    public resetSessionTimeout() {
        this._sessionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionTimeoutInput() {
        return this._sessionTimeout;
    }

    // user_attribute - computed: true, optional: true, required: false
    private _userAttribute?: string; 
    public get userAttribute() {
        return this.getStringAttribute('user_attribute');
    }
    public set userAttribute(value: string) {
        this._userAttribute = value;
    }
    public resetUserAttribute() {
        this._userAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userAttributeInput() {
        return this._userAttribute;
    }
}
}
