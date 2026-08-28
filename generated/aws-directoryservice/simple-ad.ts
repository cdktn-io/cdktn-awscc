// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSimpleADProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the configuration set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad#create_alias CcSimpleAD#create_alias}
    */
    readonly createAlias?: boolean | cdktn.IResolvable;
    /**
    * Description for the directory.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad#description CcSimpleAD#description}
    */
    readonly description?: string;
    /**
    * Whether to enable single sign-on for a Simple Active Directory in AWS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad#enable_sso CcSimpleAD#enable_sso}
    */
    readonly enableSso?: boolean | cdktn.IResolvable;
    /**
    * The fully qualified domain name for the AWS Managed Simple AD directory.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad#name CcSimpleAD#name}
    */
    readonly name: string;
    /**
    * The password for the default administrative user named Admin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad#password CcSimpleAD#password}
    */
    readonly password?: string;
    /**
    * The NetBIOS name for your domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad#short_name CcSimpleAD#short_name}
    */
    readonly shortName?: string;
    /**
    * The size of the directory.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad#size CcSimpleAD#size}
    */
    readonly size: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad#tags CcSimpleAD#tags}
    */
    readonly tags?: CcSimpleAD.TagProperty[] | cdktn.IResolvable;
    /**
    * VPC settings of the Simple AD directory server in AWS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad#vpc_settings CcSimpleAD#vpc_settings}
    */
    readonly vpcSettings: CcSimpleAD.VpcSettingsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad awscc_directoryservice_simple_ad}
*/
export class CcSimpleAD extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_directoryservice_simple_ad";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSimpleAD resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSimpleAD to import
    * @param importFromId The id of the existing CcSimpleAD that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSimpleAD to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_directoryservice_simple_ad", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad awscc_directoryservice_simple_ad} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSimpleADProps
    */
    public constructor(scope: Construct, id: string, config: CcSimpleADProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_directoryservice_simple_ad',
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
        this._createAlias = config.createAlias;
        this._description = config.description;
        this._enableSso = config.enableSso;
        this._name = config.name;
        this._password = config.password;
        this._shortName = config.shortName;
        this._size = config.size;
        this._tags.internalValue = config.tags;
        this._vpcSettings.internalValue = config.vpcSettings;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias - computed: true, optional: false, required: false
    public get alias() {
        return this.getStringAttribute('alias');
    }

    // create_alias - computed: true, optional: true, required: false
    private _createAlias?: boolean | cdktn.IResolvable; 
    public get createAlias() {
        return this.getBooleanAttribute('create_alias');
    }
    public set createAlias(value: boolean | cdktn.IResolvable) {
        this._createAlias = value;
    }
    public resetCreateAlias() {
        this._createAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAliasInput() {
        return this._createAlias;
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

    // directory_id - computed: true, optional: false, required: false
    public get directoryId() {
        return this.getStringAttribute('directory_id');
    }

    // dns_ip_addresses - computed: true, optional: false, required: false
    public get dnsIpAddresses() {
        return this.getListAttribute('dns_ip_addresses');
    }

    // enable_sso - computed: true, optional: true, required: false
    private _enableSso?: boolean | cdktn.IResolvable; 
    public get enableSso() {
        return this.getBooleanAttribute('enable_sso');
    }
    public set enableSso(value: boolean | cdktn.IResolvable) {
        this._enableSso = value;
    }
    public resetEnableSso() {
        this._enableSso = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableSsoInput() {
        return this._enableSso;
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

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // short_name - computed: true, optional: true, required: false
    private _shortName?: string; 
    public get shortName() {
        return this.getStringAttribute('short_name');
    }
    public set shortName(value: string) {
        this._shortName = value;
    }
    public resetShortName() {
        this._shortName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shortNameInput() {
        return this._shortName;
    }

    // size - computed: false, optional: false, required: true
    private _size?: string; 
    public get size() {
        return this.getStringAttribute('size');
    }
    public set size(value: string) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInput() {
        return this._size;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSimpleAD.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSimpleAD.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_settings - computed: false, optional: false, required: true
    private _vpcSettings = new CcSimpleAD.VpcSettingsPropertyOutputReference(this, "vpc_settings");
    public get vpcSettings() {
        return this._vpcSettings;
    }
    public putVpcSettings(value: CcSimpleAD.VpcSettingsProperty) {
        this._vpcSettings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSettingsInput() {
        return this._vpcSettings.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            create_alias: cdktn.booleanToTerraform(this._createAlias),
            description: cdktn.stringToTerraform(this._description),
            enable_sso: cdktn.booleanToTerraform(this._enableSso),
            name: cdktn.stringToTerraform(this._name),
            password: cdktn.stringToTerraform(this._password),
            short_name: cdktn.stringToTerraform(this._shortName),
            size: cdktn.stringToTerraform(this._size),
            tags: cdktn.listMapper(ccSimpleADTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_settings: ccSimpleADVpcSettingsPropertyToTerraform(this._vpcSettings.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            create_alias: {
                value: cdktn.booleanToHclTerraform(this._createAlias),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_sso: {
                value: cdktn.booleanToHclTerraform(this._enableSso),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            password: {
                value: cdktn.stringToHclTerraform(this._password),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            short_name: {
                value: cdktn.stringToHclTerraform(this._shortName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            size: {
                value: cdktn.stringToHclTerraform(this._size),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSimpleADTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSimpleAD.TagPropertyList",
            },
            vpc_settings: {
                value: ccSimpleADVpcSettingsPropertyToHclTerraform(this._vpcSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSimpleAD.VpcSettingsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSimpleADTagPropertyToTerraform(struct?: CcSimpleAD.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSimpleADTagPropertyToHclTerraform(struct?: CcSimpleAD.TagProperty | cdktn.IResolvable): any {
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


export function ccSimpleADVpcSettingsPropertyToTerraform(struct?: CcSimpleAD.VpcSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
        vpc_id: cdktn.stringToTerraform(struct!.vpcId),
    }
}


export function ccSimpleADVpcSettingsPropertyToHclTerraform(struct?: CcSimpleAD.VpcSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        vpc_id: {
            value: cdktn.stringToHclTerraform(struct!.vpcId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSimpleAD {
export interface TagProperty {
    /**
    * The key name of the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad#key CcSimpleAD#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad#value CcSimpleAD#value}
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
export interface VpcSettingsProperty {
    /**
    * The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad#subnet_ids CcSimpleAD#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * The identifier of the VPC in which to create the directory.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directoryservice_simple_ad#vpc_id CcSimpleAD#vpc_id}
    */
    readonly vpcId: string;
}
export class VpcSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        if (this._vpcId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcId = this._vpcId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._subnetIds = undefined;
            this._vpcId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._subnetIds = value.subnetIds;
            this._vpcId = value.vpcId;
        }
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }
}
}
