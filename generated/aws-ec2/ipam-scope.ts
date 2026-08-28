// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam_scope

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIPAMScopeProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam_scope#description CcIPAMScope#description}
    */
    readonly description?: string;
    /**
    * External service configuration to connect your AWS IPAM scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam_scope#external_authority_configuration CcIPAMScope#external_authority_configuration}
    */
    readonly externalAuthorityConfiguration?: CcIPAMScope.IpamScopeExternalAuthorityConfigurationProperty;
    /**
    * The Id of the IPAM this scope is a part of.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam_scope#ipam_id CcIPAMScope#ipam_id}
    */
    readonly ipamId: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam_scope#tags CcIPAMScope#tags}
    */
    readonly tags?: CcIPAMScope.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam_scope awscc_ec2_ipam_scope}
*/
export class CcIPAMScope extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_ipam_scope";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIPAMScope resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIPAMScope to import
    * @param importFromId The id of the existing CcIPAMScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam_scope#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIPAMScope to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_ipam_scope", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam_scope awscc_ec2_ipam_scope} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIPAMScopeProps
    */
    public constructor(scope: Construct, id: string, config: CcIPAMScopeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_ipam_scope',
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
        this._externalAuthorityConfiguration.internalValue = config.externalAuthorityConfiguration;
        this._ipamId = config.ipamId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // external_authority_configuration - computed: true, optional: true, required: false
    private _externalAuthorityConfiguration = new CcIPAMScope.IpamScopeExternalAuthorityConfigurationPropertyOutputReference(this, "external_authority_configuration");
    public get externalAuthorityConfiguration() {
        return this._externalAuthorityConfiguration;
    }
    public putExternalAuthorityConfiguration(value: CcIPAMScope.IpamScopeExternalAuthorityConfigurationProperty) {
        this._externalAuthorityConfiguration.internalValue = value;
    }
    public resetExternalAuthorityConfiguration() {
        this._externalAuthorityConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalAuthorityConfigurationInput() {
        return this._externalAuthorityConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ipam_arn - computed: true, optional: false, required: false
    public get ipamArn() {
        return this.getStringAttribute('ipam_arn');
    }

    // ipam_id - computed: false, optional: false, required: true
    private _ipamId?: string; 
    public get ipamId() {
        return this.getStringAttribute('ipam_id');
    }
    public set ipamId(value: string) {
        this._ipamId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ipamIdInput() {
        return this._ipamId;
    }

    // ipam_scope_id - computed: true, optional: false, required: false
    public get ipamScopeId() {
        return this.getStringAttribute('ipam_scope_id');
    }

    // ipam_scope_type - computed: true, optional: false, required: false
    public get ipamScopeType() {
        return this.getStringAttribute('ipam_scope_type');
    }

    // is_default - computed: true, optional: false, required: false
    public get isDefault() {
        return this.getBooleanAttribute('is_default');
    }

    // pool_count - computed: true, optional: false, required: false
    public get poolCount() {
        return this.getNumberAttribute('pool_count');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIPAMScope.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIPAMScope.TagProperty[] | cdktn.IResolvable) {
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
            description: cdktn.stringToTerraform(this._description),
            external_authority_configuration: ccIPAMScopeIpamScopeExternalAuthorityConfigurationPropertyToTerraform(this._externalAuthorityConfiguration.internalValue),
            ipam_id: cdktn.stringToTerraform(this._ipamId),
            tags: cdktn.listMapper(ccIPAMScopeTagPropertyToTerraform, false)(this._tags.internalValue),
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
            external_authority_configuration: {
                value: ccIPAMScopeIpamScopeExternalAuthorityConfigurationPropertyToHclTerraform(this._externalAuthorityConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIPAMScope.IpamScopeExternalAuthorityConfigurationProperty",
            },
            ipam_id: {
                value: cdktn.stringToHclTerraform(this._ipamId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIPAMScopeTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIPAMScope.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIPAMScopeIpamScopeExternalAuthorityConfigurationPropertyToTerraform(struct?: CcIPAMScope.IpamScopeExternalAuthorityConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        external_resource_identifier: cdktn.stringToTerraform(struct!.externalResourceIdentifier),
        ipam_scope_external_authority_type: cdktn.stringToTerraform(struct!.ipamScopeExternalAuthorityType),
    }
}


export function ccIPAMScopeIpamScopeExternalAuthorityConfigurationPropertyToHclTerraform(struct?: CcIPAMScope.IpamScopeExternalAuthorityConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        external_resource_identifier: {
            value: cdktn.stringToHclTerraform(struct!.externalResourceIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipam_scope_external_authority_type: {
            value: cdktn.stringToHclTerraform(struct!.ipamScopeExternalAuthorityType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIPAMScopeTagPropertyToTerraform(struct?: CcIPAMScope.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIPAMScopeTagPropertyToHclTerraform(struct?: CcIPAMScope.TagProperty | cdktn.IResolvable): any {
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


export namespace CcIPAMScope {
export interface IpamScopeExternalAuthorityConfigurationProperty {
    /**
    * Resource identifier of the scope in the external service connecting to your AWS IPAM scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam_scope#external_resource_identifier CcIPAMScope#external_resource_identifier}
    */
    readonly externalResourceIdentifier?: string;
    /**
    * An external service connecting to your AWS IPAM scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam_scope#ipam_scope_external_authority_type CcIPAMScope#ipam_scope_external_authority_type}
    */
    readonly ipamScopeExternalAuthorityType?: string;
}
export class IpamScopeExternalAuthorityConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IpamScopeExternalAuthorityConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._externalResourceIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalResourceIdentifier = this._externalResourceIdentifier;
        }
        if (this._ipamScopeExternalAuthorityType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipamScopeExternalAuthorityType = this._ipamScopeExternalAuthorityType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IpamScopeExternalAuthorityConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._externalResourceIdentifier = undefined;
            this._ipamScopeExternalAuthorityType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._externalResourceIdentifier = value.externalResourceIdentifier;
            this._ipamScopeExternalAuthorityType = value.ipamScopeExternalAuthorityType;
        }
    }

    // external_resource_identifier - computed: true, optional: true, required: false
    private _externalResourceIdentifier?: string; 
    public get externalResourceIdentifier() {
        return this.getStringAttribute('external_resource_identifier');
    }
    public set externalResourceIdentifier(value: string) {
        this._externalResourceIdentifier = value;
    }
    public resetExternalResourceIdentifier() {
        this._externalResourceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalResourceIdentifierInput() {
        return this._externalResourceIdentifier;
    }

    // ipam_scope_external_authority_type - computed: true, optional: true, required: false
    private _ipamScopeExternalAuthorityType?: string; 
    public get ipamScopeExternalAuthorityType() {
        return this.getStringAttribute('ipam_scope_external_authority_type');
    }
    public set ipamScopeExternalAuthorityType(value: string) {
        this._ipamScopeExternalAuthorityType = value;
    }
    public resetIpamScopeExternalAuthorityType() {
        this._ipamScopeExternalAuthorityType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipamScopeExternalAuthorityTypeInput() {
        return this._ipamScopeExternalAuthorityType;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam_scope#key CcIPAMScope#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam_scope#value CcIPAMScope#value}
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
